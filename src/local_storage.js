

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
  
  function getTasks(){
    let tasks;
    if(localStorage.getItem("tasks")===null){
      tasks = []
    }else{
      tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    return tasks
  }
  
  
//   function removeTask(task){
//     let tasks;
//     if(localStorage.getItem("tasks")===null){
//       tasks= [];
//     }else{
//       tasks = JSON.parse(localStorage.getItem("tasks"))
//     }
//     // let myId = task.parentElement.parentElement.parentElement.id;
//     console.log(task.parentElement.parentElement.children[1])

    // for (let x in tasks){
    //     if(tasks[x].id === myId){
    //         tasks.splice(x,1)
    //     }
    // }
    // localStorage.setItem('tasks',JSON.stringify(tasks))
//   }
  

  export{saveTaskToLocalStorage, getTasks}
  