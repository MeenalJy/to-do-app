// script.js
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        todoList.appendChild(taskItem);
        taskInput.value = '';
    }
});
