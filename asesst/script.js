let inputText = document.querySelector(".input-box");

let displayTodoListEl = document.getElementById("display-list");

// let buttons = document.querySelectorAll(".done-btn");


// buttons.forEach(changeButton);

// function changeButton(button) {
//     button.addEventListener("click", () => {
//         button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8">
//         <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
//     </svg>`
//         console.log(button.innerHTML)
//     });
// }




data = [
    {
        id: 1,
        text: "Jog arround the park",
        done: false,
        visibility: true
    },
    {
        id: 2,
        text: "Read for 1 hour",
        done: false,
        visibility: true
    },
]


inputText.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let newText = inputText.value;
        event.preventDefault();
        data.push(
            {
                id: data.length + 1,
                text: newText,
                done: false,
                visibility: true
            }
        );
        console.log(data);
        displayTodoList(data);
        inputText.value = "";
    }
});


// the function displays all items fron todolist
function displayTodoList(data) {
    if (!data || data.length === 0) {
        //   productContainer.innerHTML = "<h2 class='no-results'>No Results</h2>";
    } else {
        const todoList = data
            .map((todoItem) => {
                const { text, done, visibility } = todoItem;
                return `
          <div class="todo-item">
          <div class="flex-item">
              <button class="done-btn">

              </button>
              <p>${text}</p>
          </div>

          <button class="cross-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path fill="#494C6B" fill-rule="evenodd"
                      d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
              </svg>
          </button>
      </div>
    `;
            })
            .join("");

        displayTodoListEl.innerHTML = todoList;
    }
}



function isDone(done) {
    if (data.done) {
        console.log()
    } else {

    }
}


function isVisible(visibility) {
    if (visibility) {

    } else {

    }
}


function init() {
    displayTodoList(data);
}

init();