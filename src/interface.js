import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";
import trashCan from "./assets/trash-can-regular.svg"
import { getTodoItem, removeTaskFromStorage,updateTodoItem } from "./local_storage";
const trashCanIcon = document.querySelectorAll(".trash-can")
trashCanIcon.src = trashCan

class UserInterface {
  static renderHTML(taskList) {
    const itemContainer = document.querySelector(".item-container");
    itemContainer.innerHTML = "";
    let displayData = taskList.map((element)=>{
      return `
      <div id="${element.id}" class = "item ${element.priority}">
        <div class="item-name">
        <input type="checkbox" name="todo" id="${element.id}" />
        <p>${element.title}</p>
      </div>
      <div class="item-info">
        <button>Details</button>
        <p>${element.dueDate}</p>
        <button class = "item-edit-btn">
        Edit
         </button>
        <button class = "trash-can">
      delete
        </button>

      </div>
    </div>
    </div>`;
  })
  itemContainer.innerHTML = displayData.join(" ");


  }

  // <img class="trash-can" src=${trashCan} width="20px"/> 
  //<i class="fa fa-regular fa-pen-to-square"></i>

  static resetForm() {
    const titleValue = (document.getElementById("title").value = "");
    const dateValue = (document.getElementById("dueDate").value = "");
    const priorityValue = (document.getElementById("priority").value = "");
    const descriptonValue = (document.getElementById("description").value = "");
  }

  static removeTodo(){
    const deleteBtns = document.querySelectorAll(".trash-can");
    deleteBtns.forEach(deleteBtn=>{
      deleteBtn.addEventListener("click",(e)=>{
        const itemContainer = e.target.parentElement.parentElement;
        itemContainer.classList.add("fall")
        console.log(deleteBtn)
        removeTaskFromStorage(e)
      })
    })
    

  }

  static editTodo(){
    const editBtns = document.querySelectorAll(".item-edit-btn");
    editBtns.forEach((btn)=>{
      btn.addEventListener("click",(e)=>{
        const itemId = e.target.parentElement.parentElement.id;
        this.editForm(e);
        
        
        let item = getTodoItem(itemId)
        document.querySelector(".edit-form #title").value = item.title;
        document.querySelector(".edit-form #date").value = item.dueDate;
        document.querySelector(".edit-form #priority").value = item.priority;

        
       

        const saveBtn = document.querySelector(".edit-form button");

        saveBtn.addEventListener("click", function(e){
          const titleValue = document.querySelector(".edit-form #title").value;
          const dateValue = document.querySelector(".edit-form #date").value
          const priorityValue = document.querySelector(".edit-form #priority").value
          updateTodoItem(itemId,titleValue,dateValue,priorityValue);
          UserInterface.renderItemHTML(e,itemId,titleValue,dateValue,priorityValue);

        })

        

      })
    })
    
  }

  static toggleForm(){
    document.body.classList.toggle("active-form");
  };

  static editForm(e){
    const itemContainer = e.target.parentElement.parentElement;
    itemContainer.classList.add("edit-form")
    itemContainer.innerHTML = `
    
      <div class="item-name">
        <input type="checkbox" name="todo" id="" />
        <input type="text" name="title" id="title">
      </div>
      <div class="item-info">
        <input type="date" name="date" id="date">
        <select name="priority" id="priority">
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        <button class="save-btn">Save</button>
        
      </div>
    `
  }

  static renderItemHTML(e,id,title,date,priority){
    const itemContainer = e.target.parentElement.parentElement;
    itemContainer.id = id;
    itemContainer.classList.remove("high"||"medium"||"low");
    itemContainer.classList.add(priority);
    itemContainer.classList.remove("edit-form")
    itemContainer.innerHTML =  `
    <div class="item-name">
    <input type="checkbox" name="todo" id="${id}" />
    <p>${title}</p>
  </div>
  <div class="item-info">
    <button>Details</button>
    <p>${date}</p>
    <button class = "item-edit-btn">
    Edit
     </button>
    <button class = "trash-can">
  delete
    </button>

  </div>
</div>`
  }
}



export { UserInterface };

// function updateTodoItem(id,title,date,priority){
//   let tasks;
//   if (localStorage.getItem("tasks")===null){
//     tasks={}
//   }else{
//     tasks = JSON.parse(localStorage.getItem("tasks"))
//   }
//   for(let x in tasks){
//     if(tasks[x].id==id){
//       tasks[x].title =title;
//       tasks[x].dueDate = date;
//       tasks[x].priority = priority;
//       console.log(tasks[x])
//     }
//   }
// }
