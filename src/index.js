import todoLogo from './assets/to-do-list.png';
import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';




const todoImg = document.getElementById('todoLogo');
todoImg.src = todoLogo;


function TodoItem(title,descripton,dueDate,priority){
    this.title = title;
    this.descripton = descripton;
    this.dueDate = dueDate;
    this.priority = priority
}

document.querySelector(".new-item").addEventListener("click",function(){
    document.body.classList.add('active-form')
})

document.querySelector(".form #close-btn").addEventListener("click",function(){
    document.body.classList.remove("active-form")
})