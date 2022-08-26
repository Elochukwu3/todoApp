// // declaration
// let getBtn = document.querySelector(".get-btn")
// let removeBtn = document.querySelector(".remove-btn")
// let addBtn = document.querySelector(".btn");
// let input = document.querySelector(".inpt");

// let toDoSaver =[];
// // let inputValue;
//   let displayDiv = document.querySelector(".display");
//   let userList = document.createElement("ol");
//   const allShow = (allTodo)=>{
//     let inputValue = input.value;
//     let list = document.createElement("li");
//     let deleteBtn = document.createElement("i");
//     deleteBtn.classList.add("fas", "fa-trash");
//     list.textContent = inputValue;
//     displayDiv.appendChild(userList);
//     userList.appendChild(list);
//     list.appendChild(deleteBtn)
//     allTodo.push(inputValue);
//  localStorage.setItem("toDoKey", JSON.stringify(allTodo));
//   }

//   addBtn.addEventListener("click", ()=>{
//     if (!localStorage.getItem("toDoKey")) {
//      console.log("kim");
//     allShow(toDoSaver)
//     }else{
//       console.log("maaa");
//       let get = JSON.parse(localStorage.getItem("toDoKey"))
//         let alreadySaved = [...get];
//         allShow(alreadySaved)
//         }
//   })

//   getBtn.addEventListener("click", ()=>{
//  if (!localStorage.getItem("toDoKey")) {
//    console.log("kkk");
//   // getBtn.disabled = true;
//  }else{
//   //  console.log("kkk");
//   //  getBtn.disabled = false;
//    let get =JSON.parse(localStorage.getItem("toDoKey"))
//    for (let index = 0; index <get.length; index++) {
//      const element = get[index];
//      let list = document.createElement("li");
//     list.textContent = element;
//     displayDiv.appendChild(userList);
//     userList.appendChild(list);

//   }
//  }

// })
// removeBtn.addEventListener("click", ()=>{
//   localStorage.removeItem("toDoKey");
//  list.remove();
// })
// // deleteBtn.addEventListener("click", ()=>{
// //   localStorage.clear(list);
// //   list.remove();
// //   })

window.addEventListener("load", () => {
  todos = [] || JSON.parse(localStorage.getItem("todos"));

  console.log(todos);
  let name = document.querySelector(".name");
  let username = localStorage.getItem("username") || "";
  username = name.value;
  //   console.log(username);
  name.addEventListener("change", (e) => {
    localStorage.setItem("username", e.target.value);
  });
  let formInput = document.querySelector("#todo-form");
  formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e.target);
    const todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    e.target.reset();
    displayTodos();
  });
});
// displayTodos()
function displayTodos() {
  const todoList = document.querySelector(".business-personal");
  todoList.innerHTML = "";

  // console.log(todos);
  todos.forEach((td) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("business-item");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const btnContainer = document.createElement("div");
    const edit = document.createElement("button");
    const deleteBtn = document.createElement("button");
    input.type = "checkbox";
    input.checked = td.done;
    span.classList.add("bubble");
    //  span.classList.add("personal")
    if (td.category == "Personal") {
      span.classList.add("personal");
    } else {
      span.classList.add("business");
    }
    content.classList.add("todo-content");
    btnContainer.classList.add("todo-btn-cont");
    edit.classList.add("edit");
    deleteBtn.classList.add("delete");
    edit.innerHTML = "EDIT";
    deleteBtn.innerHTML = "Delete";
    content.innerHTML = `<input type="text" value="${td.content}" readonly class = "inputItem">`;
    label.appendChild(input);
    label.appendChild(span);
    btnContainer.appendChild(edit);
    btnContainer.appendChild(deleteBtn);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(btnContainer);
    todoList.appendChild(todoItem);

    input.addEventListener("click", (e) => {
      td.done = e.target.checked;
      if (td.done == true) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }
    });
    edit.addEventListener("click", () => {
      const replaceValue = document.querySelector(".inputItem");
      replaceValue.removeAttribute("readonly");
      replaceValue.focus();
      replaceValue.addEventListener("focusout", (e) => {
        td.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(td));
        replaceValue.setAttribute("readonly", true);
        // displayTodos()
      });
    });
    deleteBtn.addEventListener("click", (e) => {
      todos = todos.filter((f) => {
        f !== td;
      });
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
      displayTodos();
    });
  });
}
// console.clear()
