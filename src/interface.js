class UserInterface {
  static renderHTML(taskList) {
    const itemContainer = document.querySelector(".item-container");
    itemContainer.innerHTML = "";

    taskList.forEach((element) => {
      const htmlItem = document.createElement("div");
      // htmlItem.setAttribute('class',);
      htmlItem.setAttribute("class", "item " + element.priority);
      htmlItem.setAttribute("id", element.id);
      htmlItem.innerHTML = `<div class="item-name">
                    <input type="checkbox" name="todo" id="${element.id}" />
                    <p>${element.title}</p>
                  </div>
                  <div class="item-info">
                    <button>Details</button>
                    <p>${element.dueDate}</p>
                    <button class = "item-edit-btn">
                    <i class="fa fa-regular fa-pen-to-square"></i>
                     </button>
                    <button class = "item-delete-btn">
                    <i class="fa fa-solid fa-trash-can"></i>          
                    </button>
          
                  </div>
                </div>`;
      itemContainer.appendChild(htmlItem);
    });
  }

  static resetForm() {
    const titleValue = (document.getElementById("title").value = "");
    const dateValue = (document.getElementById("dueDate").value = "");
    const priorityValue = (document.getElementById("priority").value = "");
    const descriptonValue = (document.getElementById("description").value = "");
  }
}

export { UserInterface };
