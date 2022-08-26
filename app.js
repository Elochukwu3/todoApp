

window.addEventListener("load", () => {
  todos = [] || JSON.parse(localStorage.getItem("todos"));


  let name = document.querySelector(".name");
  let username = localStorage.getItem("username") || "";
  username = name.value;
    name.addEventListener("change", (e) => {
    localStorage.setItem("username", e.target.value);
  });
  let formInput = document.querySelector("#todo-form");
  formInput.addEventListener("submit", (e) => {
    e.preventDefault();
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

    edit.addEventListener("click", (e) => {

      const replaceValue = content.querySelector("input");
      replaceValue.removeAttribute("readonly");
      replaceValue.focus();
      replaceValue.addEventListener("focusout", (e) => {
        replaceValue.setAttribute("readonly", true);
        td.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
      });
    });
    
    deleteBtn.addEventListener("click", () => {
      todos = todos.filter((f) => {
      //  here im am returning each array object that is not equal to the local storage
      return  f != td;
        
      });
  
      localStorage.setItem("todos", JSON.stringify(todos));
      displayTodos();
    });
  });
}
// console.clear()
