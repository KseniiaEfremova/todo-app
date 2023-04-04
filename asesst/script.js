let addMessage = document.querySelector(".input-box");
let todo = document.querySelector(".todo-list");

let todoList = [];

if(localStorage.getItem("todo")) {
    todoList = JSON.parse(localStorage.getItem("todo"));
    displayMessages();
}

addMessage.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let newTodo = {
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
                <div class="flex-item" id='item_${i}'>
                    <button class="check-btn">
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




// data = [
//     {
//         id: 1,
//         text: "Jog arround the park",
//         done: false,
//         visibility: true
//     },
//     {
//         id: 2,
//         text: "Read for 1 hour",
//         done: true,
//         visibility: true
//     },
//     {
//         id: 3,
//         text: "Meditation",
//         done: true,
//         visibility: true
//     },
// ]


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


// // the function displays all items fron todolist
// function displayTodoList(data) {
//     if (!data || data.length === 0) {
//         //   productContainer.innerHTML = "<h2 class='no-results'>No Results</h2>";
//     } else {
//         const todoList = data
//             .map((todoItem) => {
//                 const { id, text, done, visibility } = todoItem;
//                 console.log(todoItem);
//                 // isDone(done, id);
//                 return `
//           <div class="todo-item">
//           <div class="flex-item">
//               <button class="check-btn">
//               </button>
//               <p class="text-task">${text}</p>
//           </div>

//           <button class="cross-btn">
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
//                   <path fill="#494C6B" fill-rule="evenodd"
//                       d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
//               </svg>
//           </button>
//       </div>
//     `;
//             })
//             .join("");
//         // console.log(data[1].text)
//         // toChangeButton(data);
//         displayTodoListEl.innerHTML = todoList;
//     }
// }



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