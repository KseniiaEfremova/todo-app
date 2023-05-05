let addMessage = document.querySelector(".input-box");
let todo = document.querySelector(".todo-list");
let tasks = document.querySelector("#display-list");
console.log(tasks);

let todoList = [];

if (localStorage.getItem("todo")) {
    todoList = JSON.parse(localStorage.getItem("todo"));
    todoList.forEach((message) => displayMessage(message));
    console.log(todoList)
}


tasks.addEventListener("click", doneTask);
tasks.addEventListener("click", deleteTask);


function doneTask(event) {
    if (event.target.dataset.action !== 'done') return;
    // finding all elements
    let parent = event.target.closest(".todo-item");
    let button = parent.children[0].children[0];
    let textTask = parent.children[0].children[1];
    let tick = button.children[0];

    // chanching style of done elements
    button.classList.toggle("done-btn");
    textTask.classList.toggle("crossed-text");
    tick.classList.toggle("noTick");

    // saving changes in the local storage
    let id = Number(parent.id);
    let task = todoList.find((task) => task.id === id);
    task.checked = !task.checked;
    setStorage('todo', todoList);

}

function deleteTask(event) {
    if (event.target.dataset.action !== 'delete') return;

    let parent = event.target.closest(".todo-item");

    // finding id of the task
    let id = Number(parent.id);

    //deleting the task from local storage and saving changes
    todoList = todoList.filter((task) => task.id !== id);
    setStorage('todo', todoList);
    parent.remove();
}


//  Addind new task after clicking Enter
addMessage.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {

        event.preventDefault();

        let newTodo = {
            id: new Date().getTime(),
            todo: addMessage.value,
            checked: false,
            visibility: true
        };
        todoList.push(newTodo);
        addMessage.value = "";
        setStorage('todo', todoList);
        displayMessage(newTodo);
        addMessage.focus();

    }
});



// function displays one task
function displayMessage(todoItem) {

    let cssButtonClass = todoItem.checked ? "check-btn done-btn" : "check-btn notDone";
    let cssTickClass = todoItem.checked ? "" : "noTick";
    let cssTextClass = todoItem.checked ? "crossed-text" : "";


    let message = `
        <div class="todo-item" id='${todoItem.id}'>
                <div class="flex-item">
                    <button class="${cssButtonClass}" data-action="done">
                        <svg class="${cssTickClass}" data-action="done" xmlns="http://www.w3.org/2000/svg" width="10" height="8">
                        <path data-action="done" fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
                        </svg>
                    </button>
                    <p class="${cssTextClass}" data-action="done">${todoItem.todo}</p>
                </div>

                <button class="cross-btn" data-action="delete">
                    <svg data-action="delete" class="cross-btn" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                        <path data-action="delete" fill="#494C6B" fill-rule="evenodd"
                            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
                    </svg>
                </button>
        </div>`;
    todo.insertAdjacentHTML("beforeend", message);
    // todo.innerHTML = message;
}


function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}





// function isVisible(visibility) {
//     if (visibility) {

//     } else {

//     }
// }


// function init() {
//     if (localStorage.getItem("todo")) {
//         todoList = JSON.parse(localStorage.getItem("todo"));
//         todoList.forEach((message) => displayMessage(message));
//         console.log(todoList)
//     }
// }

// init();