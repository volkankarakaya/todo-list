


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
  
  
  function removeTaskFromStorage(e){
    let tasks;
    if(localStorage.getItem("tasks")===null){
      tasks= [];
    }else{
      tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    let myId = e.target.parentElement.parentElement.id;
    console.log(myId)

    for (let x in tasks){
        if(tasks[x].id == myId){
            tasks.splice(x,1)
        }
    }
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }

  function getTodoItem(id){
    let tasks;
    if(localStorage.getItem("tasks")===null){
      tasks =[]
    }else{
      tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    for(let x in tasks){
      if(tasks[x].id == id){
        return tasks[x]
      }
    }
  }

  export function updateTodoItem(id,title,date,priority){
    let tasks;
    if (localStorage.getItem("tasks")===null){
      tasks={}
    }else{
      tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    for(let x in tasks){
      if(tasks[x].id==id){
        
        tasks[x].title =title;
        tasks[x].dueDate = date;
        tasks[x].priority = priority;
        console.log(tasks[x])
      }
    }
    localStorage.setItem('tasks',JSON.stringify(tasks))

  }

  export function saveProjectToLocalStorage(project){
    let projects;
    if(localStorage.getItem("projects")===null){
      projects=[]
    }else{
      projects = JSON.parse(localStorage.getItem("projects"))
    }
    projects.push(project);
    localStorage.setItem("projects", JSON.stringify(projects))
    console.log(projects)

  }

  export function getProjectsFromLocalStorage(){
    let projects;
    if(localStorage.getItem("projects")===null){
      projects = [];
    }else{
      projects = JSON.parse(localStorage.getItem("projects"));

    }
    return projects
  }
  
  export function deleteProjectFromLocalStorage(project){
    let projects;
    if(localStorage.getItem("projects")===null){
      projects =[]
    }else{
      projects = JSON.parse(localStorage.getItem("projects"))
    }
    projects.splice(indexOf(project),1)
    localStorage.setItem("projects",JSON.stringify(projects))
    console.log("deleted")
  }


  export{saveTaskToLocalStorage, getTasks, removeTaskFromStorage, getTodoItem}
  