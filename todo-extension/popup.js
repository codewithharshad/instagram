document.addEventListener("DOMContentLoaded", function () {
  let todoList = document.getElementById("todo-list");
  let todoInput = document.getElementById("todo-input");
  let addTodoButton = document.getElementById("add-todo");
  let clearAllButton = document.getElementById("clear-all");

  // Load todos from storage
  function loadTodos() {
    chrome.storage.sync.get(["todos"], function (result) {
      todoList.innerHTML = "";
      if (result.todos) {
        result.todos.forEach((todo, index) => {
          addTodoElement(todo, index);
        });
      }
    });
  }
  // Clear all todos
  clearAllButton.addEventListener("click", function () {
    chrome.storage.sync.set({ todos: [] }, function () {
      loadTodos();
    });
  });
  // Add todo
  addTodoButton.addEventListener("click", function () {
    let todoText = todoInput.value.trim();
    if (todoText !== "") {
      chrome.storage.sync.get(["todos"], function (result) {
        let todos = result.todos || [];
        todos.push(todoText);
        chrome.storage.sync.set({ todos: todos }, function () {
          loadTodos();
        });
      });
      todoInput.value = "";
    }
  });

  // Add an individual todo element to the list
  function addTodoElement(todoText, index) {
    let li = document.createElement("li");
    li.classList.add("todo-item");

    let todoTextElement = document.createElement("span");
    todoTextElement.textContent = todoText;
    todoTextElement.classList.add("todo-text");
    li.appendChild(todoTextElement);

    let todoActions = document.createElement("div");
    todoActions.classList.add("todo-actions");

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      let newText = prompt("Enter new text:", todoText);
      if (newText !== null) {
        todoText = newText.trim();
        if (todoText !== "") {
          chrome.storage.sync.get(["todos"], function (result) {
            let todos = result.todos;
            todos[index] = todoText;
            chrome.storage.sync.set({ todos: todos }, function () {
              loadTodos();
            });
          });
        }
      }
    });
    todoActions.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      chrome.storage.sync.get(["todos"], function (result) {
        let todos = result.todos;
        todos.splice(index, 1);
        chrome.storage.sync.set({ todos: todos }, function () {
          loadTodos();
        });
      });
    });

    todoActions.appendChild(deleteButton);

    li.appendChild(todoActions);
    todoList.appendChild(li);
  }

  // Load todos when DOM content is loaded
  loadTodos();
});
