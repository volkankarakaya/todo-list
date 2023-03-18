import todoLogo from "./assets/to-do-list.png";
import "./style.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";

const todoImg = document.getElementById("todoLogo");
todoImg.src = todoLogo;

function TodoItem(title, descripton, dueDate, priority) {
  this.title = title;
  this.descripton = descripton;
  this.dueDate = dueDate;
  this.priority = priority;
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
const todoList = {}
todoList.home = JSON.parse(localStorage.getItem("home")|| '[]');

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
  localStorage.setItem("home", JSON.stringify(todoList.home))
  
  console.log(todoList.home);
  //reset form values
  resetForm()

  updateTodoList(todoList.home)
});

function resetForm(){
    const titleValue = document.getElementById("title").value =""
    const dateValue = document.getElementById("dueDate").value ="";
    const priorityValue = document.getElementById("priority").value ="";
    const descriptonValue = document.getElementById("description").value ="";
}

function updateTodoList(todoList){
    const itemContainer = document.querySelector('.item-container');
    itemContainer.innerHTML = ""

    todoList.forEach(element => {
        const htmlItem = document.createElement('div');
        // htmlItem.setAttribute('class',);
        htmlItem.setAttribute('class', 'item '+ element.priority)
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
      </div>`


        

    itemContainer.appendChild(htmlItem)        
    });

}


const addProjectBtn = document.querySelector(".add-project-btn");
addProjectBtn.addEventListener("click", function(){
    document.querySelector(".save-project").classList.toggle("active")
})

window.addEventListener("load", updateTodoList(todoList.home))
