const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

const API_URL = "https://crudcrud.com/api/5426f7c662ec4cd6ab8e973e2678aa3a/todos";

document.addEventListener("DOMContentLoaded", () => {
    getRemoteTodos();
});
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

async function addTodo(event) {
    event.preventDefault();

    const newTodoText = todoInput.value.trim();

    if (newTodoText === "") {
        return;
    }

    const newTodo = {
        text: newTodoText,
        completed: false
    };

    try {
        const response = await axios.post(API_URL, newTodo);
        displayTodo(response.data);
        todoInput.value = "";
    } catch (error) {
        console.error("Error adding todo:", error);
    }
}

async function deleteCheck(e) {
    const item = e.target;

    if (item.classList.contains("trash-btn")) {
        const todo = item.parentElement;
        const todoId = todo.getAttribute("data-id");

        try {
            await axios.delete(`${API_URL}/${todoId}`);
            todo.remove();
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    }

    if (item.classList.contains("complete-btn")) {
        const todo = item.parentElement;
        const todoId = todo.getAttribute("data-id");
        const completed = todo.classList.toggle("completed");

        try {
            await axios.put(`${API_URL}/${todoId}`, { completed });
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    }
}

function filterTodo() {
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        const status = filterOption.value;
        const completed = todo.classList.contains("completed");

        if ((status === "all") ||
            (status === "completed" && completed) ||
            (status === "incomplete" && !completed)) {
            todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
    });
}

async function getRemoteTodos() {
    try {
        const response = await axios.get(API_URL);
        response.data.forEach(todo => {
            displayTodo(todo);
        });
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

function displayTodo(todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.classList.toggle("completed", todo.completed);
    todoDiv.setAttribute("data-id", todo._id);

    const newTodo = document.createElement("li");
    newTodo.innerText = todo.text;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
}
