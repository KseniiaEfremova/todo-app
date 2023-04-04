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

function doneTask(event) {
    // finding all elements
    let parent = event.target.closest(".flex-item");
    let button = parent.children[0];
    let textTask = parent.children[1];
    let tick = button.children[0];

    // chanching style of done elements
    button.classList.toggle("done-btn");
    textTask.classList.toggle("crossed-text");
    tick.classList.toggle("noTick");
    console.log(parent);

    // saving shanges in the local storage
    let id = Number(button.id);
    let task = todoList.find((task) => task.id === id);
    task.checked = !task.checked;
    console.log(id);
    setStorage('todo', todoList);
    console.log(todoList);

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
        <div class="todo-item">
                <div class="flex-item" >
                    <button class="${cssButtonClass}" id='${todoItem.id}'>
                        <svg class="${cssTickClass}" xmlns="http://www.w3.org/2000/svg" width="10" height="8">
                        <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
                        </svg>
                    </button>
                    <p class="${cssTextClass}">${todoItem.todo}</p>
                </div>

                <button class="cross-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                        <path fill="#494C6B" fill-rule="evenodd"
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
//     displayTodoList(data);
// }

// init();