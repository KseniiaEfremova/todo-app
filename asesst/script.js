let addMessage = document.querySelector(".input-box");
let todo = document.querySelector(".todo-list");

let todoList = [];

if (localStorage.getItem("todo")) {
    todoList = JSON.parse(localStorage.getItem("todo"));
    displayMessages();
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('check-btn')) {
        button = todoList.find(item => "item_" + item.id === e.target.id);
        if (button.checked) {
            button.checked = false
            console.log(button.checked)
            e.target.classList.remove("done-btn");
            e.target.children[0].classList.add("noTick");

        } else {
            button.checked = true
            console.log(button.checked)
            e.target.classList.add("done-btn");
            e.target.children[0].classList.remove("noTick");
        }




        // console.log(e.target.id);
        // console.log("item_" + todoList[0].id);

    }
})

addMessage.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let newTodo = {
            id: new Date().getTime(),
            todo: addMessage.value,
            checked: false,
            visibility: true
        }
        event.preventDefault();

        todoList.push(newTodo);
        displayMessages();
        addMessage.value = "";
        localStorage.setItem("todo", JSON.stringify(todoList));
    }
});


function displayMessages() {
    let displayMessage = "";
    todoList.forEach(function (item, i) {
        displayMessage += `
        <div class="todo-item">
                <div class="flex-item" >
                    <button class="check-btn" id='item_${item.id}'>
                        <svg class="noTick" xmlns="http://www.w3.org/2000/svg" width="10" height="8">
                        <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
                        </svg>
                    </button>
                    <p>${item.todo}</p>
                </div>

                <button class="cross-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                        <path fill="#494C6B" fill-rule="evenodd"
                            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
                    </svg>
                </button>
        </div>`;
        todo.innerHTML = displayMessage;
    })
}






// function toChangeButton(data) {
//     for (let index in data) {
//         console.log(data[index].done);
//         console.log(data[index].id);
//         isDone(data[index].done, data[index].id);
//     }
// };










// let inputText = document.querySelector(".input-box");

// let displayTodoListEl = document.getElementById("display-list");



// // buttons.forEach(changeButton);

// // function changeButton(button) {
// //     button.addEventListener("click", () => {
// //         button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8">
// //         <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
// //     </svg>`
// //         console.log(button.innerHTML)
// //     });
// // }



// inputText.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         let newText = inputText.value;
//         event.preventDefault();
//         data.push(
//             {
//                 id: data.length + 1,
//                 text: newText,
//                 done: false,
//                 visibility: true
//             }
//         );
//         console.log(data);
//         displayTodoList(data);
//         inputText.value = "";
//     }
// });


// function isDone(done, id) {
//     let buttons = document.querySelectorAll(".done-btn");
//     console.log(buttons)
//     let todoTextsEl = document.querySelectorAll(".text-task");
//     let ticks = document.querySelectorAll(".ticks");
//     if (done) {
//         buttons[id - 1].classList.remove(".notDone");
//         todoTextsEl[id - 1].classList.remove(".crossed-text");
//         ticks[id - 1].classList.remove(".noTick");

//     } else {
//         buttons[id - 1].setAttribute("class", ".notDone");
//         todoTextsEl[id - 1].setAttribute("class", ".crossed-text");
//         ticks[id - 1].setAttribute("class", ".noTick");
//     }
// }

// function toChangeButton(data) {
//     for (let index in data) {
//         console.log(data[index].done);
//         console.log(data[index].id);
//         isDone(data[index].done, data[index].id);
//     }
// }


// function isVisible(visibility) {
//     if (visibility) {

//     } else {

//     }
// }


// function init() {
//     displayTodoList(data);
// }

// init();