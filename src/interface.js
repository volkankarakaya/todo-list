import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";
import trashCan from "./assets/trash-can-regular.svg"
import { removeTaskFromStorage } from "./local_storage";
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
}



export { UserInterface };
