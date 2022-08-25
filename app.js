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
