import "./style.css";
import todoLogo from "./assets/to-do-list.png";
// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// import "../node_modules/@fortawesome/fontawesome-free/js/all.js";
import { UserInterface} from "./interface";
import { Task } from "./task.js";
import{saveTaskToLocalStorage, getTasks, removeTask} from "./local_storage.js"


const todoImg = document.getElementById("todoLogo");
todoImg.src = todoLogo;





const homeBtn = document.getElementById("home");
const projectsBtn = document.querySelector(".projects h3");


UserInterface.renderHTML(getTasks())










document.querySelector(".new-item").addEventListener("click", UserInterface.toggleForm);

document
  .querySelector(".form #close-btn")
  .addEventListener("click", UserInterface.toggleForm
  );

const addTodoBtn = document.getElementById("add-todo-btn");



addTodoBtn.addEventListener("click", createTaskItem);
addTodoBtn.addEventListener("click", UserInterface.resetForm);
addTodoBtn.addEventListener("click", function(){
  UserInterface.renderHTML(getTasks());
  UserInterface.filterCategory()
});
addTodoBtn.addEventListener("click", function(){
  document.body.classList.remove("active-form")
})




UserInterface.removeTodo();
UserInterface.editTodo();
UserInterface.addProject();
UserInterface.renderProjectsHTML();
UserInterface.filterCategory()

UserInterface.setActiveCategory();
UserInterface.removeProject();
UserInterface.removeTodo();
UserInterface.editTodo();

homeBtn.addEventListener("click",UserInterface.filterCategory);
projectsBtn.addEventListener("click",UserInterface.filterCategory);



function createTaskItem(){
  
    const titleValue = document.getElementById("title").value;
    const dateValue = document.getElementById("dueDate").value;
    const priorityValue = document.getElementById("priority").value;
    const descriptonValue = document.getElementById("description").value;
    const activeCategory = UserInterface.activeCategory
  
   
    let task = new Task(
      titleValue,
      descriptonValue,
      dateValue,
      priorityValue,
      activeCategory
    );
    // save item to LocalStorage
    saveTaskToLocalStorage(task)  
  
  
}





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



