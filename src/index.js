import todoLogo from "./assets/to-do-list.png";
import "./style.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";

const todoImg = document.getElementById("todoLogo");
todoImg.src = todoLogo;

let activeCategory = "home";
const homeBtn = document.getElementById("home");
const projectsBtn = document.querySelector(".projects h3");
homeBtn.addEventListener("click", function () {
  activeCategory = "home";
  updateTodoList(todoList.home)
});
projectsBtn.addEventListener("click", function () {
  activeCategory = "projects";
});

function TodoItem(title, descripton, dueDate, priority) {
  this.title = title;
  this.descripton = descripton;
  this.dueDate = dueDate;
  this.priority = priority;
  this.category = activeCategory;
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
const todoList = {};
todoList.home = JSON.parse(localStorage.getItem("home") || "[]");

addTodoBtn.addEventListener("click", function (e) {
  const titleValue = document.getElementById("title").value;
  const dateValue = document.getElementById("dueDate").value;
  const priorityValue = document.getElementById("priority").value;
  const descriptonValue = document.getElementById("description").value;

  //create object
  e.preventDefault();
  let todoItem = new TodoItem(
    titleValue,
    descriptonValue,
    dateValue,
    priorityValue
  );
  // save item to LocalStorage
  todoList.home.push(todoItem);
  localStorage.setItem("home", JSON.stringify(todoList.home));

  // console.log(todoList.home);
  //reset form values
  resetForm();

  updateTodoList(todoList.home);
});

function resetForm() {
  const titleValue = (document.getElementById("title").value = "");
  const dateValue = (document.getElementById("dueDate").value = "");
  const priorityValue = (document.getElementById("priority").value = "");
  const descriptonValue = (document.getElementById("description").value = "");
}

function updateTodoList(list) {
  const itemContainer = document.querySelector(".item-container");
  itemContainer.innerHTML = "";

  list.forEach((element) => {
    const htmlItem = document.createElement("div");
    // htmlItem.setAttribute('class',);
    htmlItem.setAttribute("class", "item " + element.priority);
    htmlItem.innerHTML = `<div class="item-name">
          <input type="checkbox" name="todo" id="" />
          <p>${element.title}</p>
        </div>
        <div class="item-info">
          <button>Details</button>
          <p>${element.dueDate}</p>
          <i class="fa fa-regular fa-pen-to-square"></i>
          <i class="fa fa-solid fa-trash-can"></i>
        </div>
      </div>`;

    if (element.category === activeCategory) {
      itemContainer.appendChild(htmlItem);
    }
  });
}

const addProjectBtn = document.querySelector(".add-project-btn");
addProjectBtn.addEventListener("click", function () {
  document.querySelector(".save-project").classList.toggle("active");
});

window.addEventListener("load", updateTodoList(todoList.home));

todoList.projects = JSON.parse(localStorage.getItem("projects") || "{}");
const saveProjectBtn = document.querySelector(".save-project button");

saveProjectBtn.addEventListener("click", function () {
  const projectInputValue = document.querySelector(".save-project input").value;
  const saveProjectContainer = document.querySelector(".save-project");
  saveProjectContainer.classList.remove("active");

  todoList.projects[projectInputValue] = [];
  localStorage.setItem("projects", JSON.stringify(todoList.projects) || {}) ||
    {};

  console.log(todoList.projects);
  updateProjectList(todoList.projects);
  updateTodoList(todoList.home);
});

function updateProjectList(projects) {
  const projectList = document.querySelector(".projects ul");
  projectList.innerHTML = "";
  Object.keys(projects).forEach((key) => {
    const newItem = document.createElement("li");
    newItem.textContent = key;
    newItem.setAttribute("data-category", key);
    projectList.appendChild(newItem);
  });
}

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


window.addEventListener("load", updateProjectList(todoList.projects));
window.addEventListener("load", updateTodoList(todoList.home));

const projectListItems = document.querySelectorAll("li");
projectListItems.forEach(function(listItem){
  listItem.addEventListener("click", function(e){
    activeCategory = e.target.dataset.category;
    updateTodoList(todoList.home)
  })
})
console.log(projectListItems)