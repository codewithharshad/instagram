chrome.storage.local.get("todos", (data) => {
  if (!data.todos) {
    chrome.storage.local.set({ todos: [] });
  }
});

function getTodos() {
  return new Promise((resolve) => {
    chrome.storage.local.get("todos", (data) => {
      resolve(data.todos);
    });
  });
}

function addTodo(todo) {
  getTodos().then((todos) => {
    todo.id = Math.random().toString(36).substring(2, 15); // Generate unique ID
    todos.push(todo);
    chrome.storage.local.set({ todos });
  });
}

function updateTodo(id, updatedTodo) {
  getTodos().then((todos) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos[index] = updatedTodo;
      chrome.storage.local.set({ todos });
    }
  });
}

function deleteTodo(id) {
  getTodos().then((todos) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    chrome.storage.local.set({ todos: filteredTodos });
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getTodos") {
    getTodos().then((todos) => sendResponse(todos));
  } else if (message.action === "addTodo") {
    addTodo(message.todo);
  } else if (message.action === "updateTodo") {
    updateTodo(message.id, message.updatedTodo);
  } else if (message.action === "deleteTodo") {
    deleteTodo(message.id);
  }
});
