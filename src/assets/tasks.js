

// function Task(title, descripton, dueDate, priority) {
//     this.title = title;
//     this.descripton = descripton;
//     this.dueDate = dueDate;
//     this.priority = priority;
//     this.category = activeCategory;
//     let now = new Date();
//     this.id = now.getTime();
//   }


class Task{
    
    constructor(title,descripton,dueDate,priority,activeCategory,checked){
        this.title = title;
        this.descripton = descripton;
        this.dueDate = dueDate;
        this.priority = priority;
        this.category = activeCategory;
        this.checked = false;
        this.id = (new Date()).getTime(); 
    }
}

export {Task}