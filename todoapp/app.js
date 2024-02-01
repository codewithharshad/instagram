const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => addTaskToDOM(task));
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = { text: taskText, completed: false };
  addTaskToDOM(task);
  saveTask(task);

  taskInput.value = "";
}
// Check if Enter key is pressed
function checkEnter(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

function clearAll() {
  localStorage.clear();
  refreshTaskList();
}

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.innerHTML = `
        <span>${task.text}</span>
        <button class='bg-btn' onclick="editTask(this)"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class='bg-btn done-bg-btn' onclick="markAsCompleted(this)"><i class="fa-solid fa-check"></i></button>
        <button class='bg-btn del-bg-btn' onclick="removeTask(this)"><i class="fa-regular fa-trash-can"></i></button>
    `;

  if (task.completed) {
    li.classList.add("completed");
    taskList.appendChild(li); // Insert completed task at the bottom
  } else {
    taskList.insertBefore(li, taskList.firstChild); // Insert active task at the top
  }
}

function editTask(button) {
  const li = button.parentNode;
  const span = li.querySelector("span");
  const taskText = span.innerText;

  const updatedTaskText = prompt("Edit task:", taskText);
  if (updatedTaskText !== null) {
    span.innerText = updatedTaskText;

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = savedTasks.map((task) => {
      if (task.text === taskText) {
        return { ...task, text: updatedTaskText };
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
}

function markAsCompleted(button) {
  const li = button.parentNode;
  const span = li.querySelector("span");
  const taskText = span.innerText;

  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = savedTasks.map((task) => {
    if (task.text === taskText) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  // Move completed tasks to the bottom
  const completedTasks = updatedTasks.filter((task) => task.completed);
  const activeTasks = updatedTasks.filter((task) => !task.completed);
  const reorderedTasks = [...activeTasks, ...completedTasks];

  localStorage.setItem("tasks", JSON.stringify(reorderedTasks));
  refreshTaskList();
}

function refreshTaskList() {
  // Clear the current task list
  taskList.innerHTML = "";

  // Load tasks from localStorage and add them to the DOM
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => addTaskToDOM(task));
}

function removeTask(button) {
  const li = button.parentNode;
  const taskText = li.querySelector("span").innerText;

  taskList.removeChild(li);

  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = savedTasks.filter((task) => task.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function saveTask(task) {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
}
