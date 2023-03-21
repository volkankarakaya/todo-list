import todoLogo from "./assets/to-do-list.png";
import "./style.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";
import { forEach, indexOf } from "lodash";

const todoImg = document.getElementById("todoLogo");
todoImg.src = todoLogo;


let tasks = JSON.parse(localStorage.getItem('tasks'))

function saveTaskToLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.push(task);
  console.log(tasks)
  localStorage.setItem("tasks",JSON.stringify(tasks))
}






let activeCategory = "home";
// const homeBtn = document.getElementById("home");
// const projectsBtn = document.querySelector(".projects h3");
// homeBtn.addEventListener("click", function () {
//   activeCategory = "home";
//   updateTodoList(tasks);
// });
// projectsBtn.addEventListener("click", function () {
//   activeCategory = "projects";
// });

function Task(title, descripton, dueDate, priority) {
  this.title = title;
  this.descripton = descripton;
  this.dueDate = dueDate;
  this.priority = priority;
  this.category = activeCategory;
  let now = new Date();
  this.id = now.getTime();
}

document.querySelector(".new-item").addEventListener("click", function () {
  document.body.classList.add("active-form");
});

document
  .querySelector(".form #close-btn")
  .addEventListener("click", function () {
    document.body.classList.remove("active-form");
  });

const addTodoBtn = document.getElementById("add-todo-btn");

// todoList.home = JSON.parse(localStorage.getItem("home"));

addTodoBtn.addEventListener("click", function (e) {
  const titleValue = document.getElementById("title").value;
  const dateValue = document.getElementById("dueDate").value;
  const priorityValue = document.getElementById("priority").value;
  const descriptonValue = document.getElementById("description").value;

  //create object
  e.preventDefault();
  let task = new Task(
    titleValue,
    descriptonValue,
    dateValue,
    priorityValue
  );
  // save item to LocalStorage
  saveTaskToLocalStorage(task)

  // console.log(todoList.home);
  //reset form values
  // resetForm();

  // updateTodoList(tasks);

 
});

// function resetForm() {
//   const titleValue = (document.getElementById("title").value = "");
//   const dateValue = (document.getElementById("dueDate").value = "");
//   const priorityValue = (document.getElementById("priority").value = "");
//   const descriptonValue = (document.getElementById("description").value = "");
// }

// function updateTodoList(list) {
//   const itemContainer = document.querySelector(".item-container");
//   itemContainer.innerHTML = "";

//   list.forEach((element) => {
//     const htmlItem = document.createElement("div");
//     // htmlItem.setAttribute('class',);
//     htmlItem.setAttribute("class", "item " + element.priority);
//     htmlItem.setAttribute("id", element.id);
//     htmlItem.innerHTML = `<div class="item-name">
//           <input type="checkbox" name="todo" id="${element.id}" />
//           <p>${element.title}</p>
//         </div>
//         <div class="item-info">
//           <button>Details</button>
//           <p>${element.dueDate}</p>
//           <div class = "item-edit-btn">
//           <i class="fa fa-regular fa-pen-to-square"></i>
//            </div>
//           <div class = "item-delete-btn">
//           <i class="fa fa-solid fa-trash-can"></i>          
//           </div>

//         </div>
//       </div>`;

//     if (element.category === activeCategory) {
//       itemContainer.appendChild(htmlItem);
//     }
//   });
// }

// const addProjectBtn = document.querySelector(".add-project-btn");
// addProjectBtn.addEventListener("click", function () {
//   document.querySelector(".save-project").classList.toggle("active");
// });



// todoList.projects = JSON.parse(localStorage.getItem("projects") || "{}");
// const saveProjectBtn = document.querySelector(".save-project button");

// saveProjectBtn.addEventListener("click", function () {
//   const projectInputValue = document.querySelector(".save-project input").value;
//   const saveProjectContainer = document.querySelector(".save-project");
//   saveProjectContainer.classList.remove("active");

//   todoList.projects[projectInputValue] = [];
//   // localStorage.setItem("projects", JSON.stringify(todoList.projects) || {}) ||
//   //   {};

//   console.log(todoList.projects);
//   updateProjectList(todoList.projects);
//   updateTodoList(todoList.home);
// });

// function updateProjectList(projects) {
//   const projectList = document.querySelector(".projects ul");
//   projectList.innerHTML = "";
//   Object.keys(projects).forEach((key) => {
//     const newItem = document.createElement("li");
//     newItem.textContent = key;
//     newItem.setAttribute("data-category", key);
//     projectList.appendChild(newItem);
//   });
// }

// //project list click event
// const projectListItems = document.querySelectorAll("li")
// // console.log('projectListItems')
// projectListItems.forEach(project => {
//   project.addEventListener("click", function (e) {
//     // const projectList = todoList.projects[project];
//     activeCategory = e.target.dataset.category;
//     console.log(e.target.dataset.category);
//     updateTodoList(todoList.home);
//     console.log('todoList')
//   });
// });

// window.addEventListener("load", updateProjectList(todoList.projects));
// window.addEventListener("load", updateTodoList(tasks));




// const projectListItems = document.querySelectorAll("li");
// projectListItems.forEach(function (listItem) {
//   listItem.addEventListener("click", function (e) {
//     activeCategory = e.target.dataset.category;
//     updateTodoList(tasks);
//   });
// });

// let deleteBtns = document.querySelectorAll(".item-delete-btn");
// console.log(deleteBtns)
// deleteBtns.forEach(function(delBtn){
//   delBtn.addEventListener("click", function(e){
//     let myTarget = e.target.parentElement.parentElement.parentElement
//     let myId = myTarget.id;
//     console.log(myId)

//    for(const obj of todoList.home){
//     if (obj.id == myId){
//       todoList.home.splice(indexOf(obj),1)
//       todoList.home = localStorage.setItem("home", JSON.stringify(todoList.home))
//         }

//    }
    
//     updateTodoList(todoList.home)
//   })
// })



