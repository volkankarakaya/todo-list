"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_to_do_list_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/to-do-list.png */ "./src/assets/to-do-list.png");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local_storage.js */ "./src/local_storage.js");


// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// import "../node_modules/@fortawesome/fontawesome-free/js/all.js";



var todoImg = document.getElementById("todoLogo");
todoImg.src = _assets_to_do_list_png__WEBPACK_IMPORTED_MODULE_1__;
var homeBtn = document.getElementById("home");
var projectsBtn = document.querySelector(".projects h3");
_interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.renderHTML((0,_local_storage_js__WEBPACK_IMPORTED_MODULE_4__.getTasks)());
document.querySelector(".new-item").addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.toggleForm);
document.querySelector(".form #close-btn").addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.toggleForm);
var addTodoBtn = document.getElementById("add-todo-btn");
addTodoBtn.addEventListener("click", createTaskItem);
addTodoBtn.addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.resetForm);
addTodoBtn.addEventListener("click", function () {
  _interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.renderHTML((0,_local_storage_js__WEBPACK_IMPORTED_MODULE_4__.getTasks)());
  _interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.filterCategory();
});
addTodoBtn.addEventListener("click", function () {
  document.body.classList.remove("active-form");
});
_interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.removeTodo();
_interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.editTodo();
_interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.addProject();
_interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.renderProjectsHTML();
_interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.filterCategory();
_interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.setActiveCategory();
_interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.removeProject();
_interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.removeTodo();
_interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.editTodo();
homeBtn.addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.filterCategory);
projectsBtn.addEventListener("click", _interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.filterCategory);
function createTaskItem() {
  var titleValue = document.getElementById("title").value;
  var dateValue = document.getElementById("dueDate").value;
  var priorityValue = document.getElementById("priority").value;
  var descriptonValue = document.getElementById("description").value;
  var activeCategory = _interface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.activeCategory;
  var task = new _task_js__WEBPACK_IMPORTED_MODULE_3__.Task(titleValue, descriptonValue, dateValue, priorityValue, activeCategory);
  // save item to LocalStorage
  (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveTaskToLocalStorage)(task);
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

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInterface": () => (/* binding */ UserInterface)
/* harmony export */ });
/* harmony import */ var _assets_trash_can_regular_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/trash-can-regular.svg */ "./src/assets/trash-can-regular.svg");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local_storage */ "./src/local_storage.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
// import "../node_modules/@fortawesome/fontawesome-free/js/all.js";


var trashCanIcon = document.querySelectorAll(".trash-can");
trashCanIcon.src = _assets_trash_can_regular_svg__WEBPACK_IMPORTED_MODULE_0__;
var UserInterface = /*#__PURE__*/function () {
  function UserInterface() {
    _classCallCheck(this, UserInterface);
  }
  _createClass(UserInterface, null, [{
    key: "renderHTML",
    value: function renderHTML(taskList) {
      var itemContainer = document.querySelector(".item-container");
      itemContainer.innerHTML = "";
      var displayData = taskList.map(function (element) {
        return "\n      <div id=\"".concat(element.id, "\" class = \"item ").concat(element.priority, "\">\n        <div class=\"item-name\">\n        <input type=\"checkbox\" name=\"todo\" id=\"").concat(element.id, "\" />\n        <p>").concat(element.title, "</p>\n      </div>\n      <div class=\"item-info\">\n        <button>Details</button>\n        <p>").concat(element.dueDate, "</p>\n        <button class = \"item-edit-btn\">\n        Edit\n         </button>\n        <button class = \"trash-can\">\n      delete\n        </button>\n\n      </div>\n    </div>\n    </div>");
      });
      itemContainer.innerHTML = displayData.join(" ");
    }

    // <img class="trash-can" src=${trashCan} width="20px"/>
    //<i class="fa fa-regular fa-pen-to-square"></i>
  }, {
    key: "resetForm",
    value: function resetForm() {
      var titleValue = document.getElementById("title").value = "";
      var dateValue = document.getElementById("dueDate").value = "";
      var priorityValue = document.getElementById("priority").value = "";
      var descriptonValue = document.getElementById("description").value = "";
    }
  }, {
    key: "removeTodo",
    value: function removeTodo() {
      var deleteBtns = document.querySelectorAll(".trash-can");
      deleteBtns.forEach(function (deleteBtn) {
        deleteBtn.addEventListener("click", function (e) {
          var itemContainer = e.target.parentElement.parentElement;
          itemContainer.classList.add("fall");
          console.log(deleteBtn);
          (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.removeTaskFromStorage)(e);
        });
      });
    }
  }, {
    key: "editTodo",
    value: function editTodo() {
      var _this = this;
      var editBtns = document.querySelectorAll(".item-edit-btn");
      editBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          var itemId = e.target.parentElement.parentElement.id;
          _this.editForm(e);
          var item = (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.getTodoItem)(itemId);
          document.querySelector(".edit-form #title").value = item.title;
          document.querySelector(".edit-form #date").value = item.dueDate;
          document.querySelector(".edit-form #priority").value = item.priority;
          var saveBtn = document.querySelector(".edit-form button");
          saveBtn.addEventListener("click", function (e) {
            var titleValue = document.querySelector(".edit-form #title").value;
            var dateValue = document.querySelector(".edit-form #date").value;
            var priorityValue = document.querySelector(".edit-form #priority").value;
            (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.updateTodoItem)(itemId, titleValue, dateValue, priorityValue);
            UserInterface.renderItemHTML(e, itemId, titleValue, dateValue, priorityValue);
          });
        });
      });
    }
  }, {
    key: "toggleForm",
    value: function toggleForm() {
      document.body.classList.toggle("active-form");
    }
  }, {
    key: "editForm",
    value: function editForm(e) {
      var itemContainer = e.target.parentElement.parentElement;
      itemContainer.classList.add("edit-form");
      itemContainer.innerHTML = "\n    \n      <div class=\"item-name\">\n        <input type=\"checkbox\" name=\"todo\" id=\"\" />\n        <input type=\"text\" name=\"title\" id=\"title\">\n      </div>\n      <div class=\"item-info\">\n        <input type=\"date\" name=\"date\" id=\"date\">\n        <select name=\"priority\" id=\"priority\">\n            <option value=\"low\">low</option>\n            <option value=\"medium\">medium</option>\n            <option value=\"high\">high</option>\n          </select>\n        <button class=\"save-btn\">Save</button>\n        \n      </div>\n    ";
    }
  }, {
    key: "renderItemHTML",
    value: function renderItemHTML(e, id, title, date, priority) {
      var itemContainer = e.target.parentElement.parentElement;
      itemContainer.id = id;
      itemContainer.classList.remove("high" || 0 || 0);
      itemContainer.classList.add(priority);
      itemContainer.classList.remove("edit-form");
      itemContainer.innerHTML = "\n    <div class=\"item-name\">\n    <input type=\"checkbox\" name=\"todo\" id=\"".concat(id, "\" />\n    <p>").concat(title, "</p>\n  </div>\n  <div class=\"item-info\">\n    <button>Details</button>\n    <p>").concat(date, "</p>\n    <button class = \"item-edit-btn\">\n    Edit\n     </button>\n    <button class = \"trash-can\">\n  delete\n    </button>\n\n  </div>\n</div>");
    }
  }, {
    key: "setActiveCategory",
    value: function setActiveCategory() {
      var _this2 = this;
      var homeBtn = document.getElementById("home");
      var projectsBtn = document.querySelector(".projects h3");
      var subProjectBtns = document.querySelectorAll(".projects li");
      homeBtn.addEventListener("click", function () {
        _this2.activeCategory = "home";
      });
      projectsBtn.addEventListener("click", function () {
        _this2.activeCategory = "projects";
      });
      subProjectBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          _this2.activeCategory = btn.children[0].innerText;
          console.log(_this2.activeCategory);
          UserInterface.filterCategory();
        });
      });
    }
  }, {
    key: "filterCategory",
    value: function filterCategory() {
      var tasks;
      var activeCategoryList = [];
      if (localStorage.getItem("tasks" === null)) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
      }
      for (var x in tasks) {
        if (tasks[x].category == UserInterface.activeCategory) {
          activeCategoryList.push(tasks[x]);
        }
      }
      // console.log(activeCategoryList);
      UserInterface.renderHTML(activeCategoryList);
    }
  }, {
    key: "addProject",
    value: function addProject() {
      var addProjectBtn = document.querySelector(".add-project-btn");
      var saveProjectForm = document.querySelector(".save-project");
      var saveProjectBtn = document.querySelector(".save-project button");
      addProjectBtn.addEventListener("click", function () {
        saveProjectForm.classList.toggle("active");
      });
      saveProjectBtn.addEventListener("click", function () {
        var project = document.getElementById("project-title").value;
        (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.saveProjectToLocalStorage)(project);
        saveProjectForm.classList.toggle("active");
        UserInterface.renderProjectsHTML();
        document.getElementById("project-title").value = "";
      });
    }
  }, {
    key: "renderProjectsHTML",
    value: function renderProjectsHTML() {
      var projects = (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.getProjectsFromLocalStorage)();
      var projectContainer = document.querySelector(".projects ul");
      var projectHTML = projects.map(function (project) {
        return '<li><div class="left-project-panel">' + project + '</div><div class="right-project-panel">x</div></li>';
      }).join("");
      projectContainer.innerHTML = projectHTML;
    }
  }, {
    key: "removeProject",
    value: function removeProject() {
      var deleteProjectBtns = document.querySelectorAll(".right-project-panel");
      deleteProjectBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.target.parentElement.style.visibility = "collapse";
          var project = e.target.parentElement.children[0].innerText;
          (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.deleteProjectFromLocalStorage)(project);
        });
      });
      console.log(deleteProjectBtns);
    }
  }]);
  return UserInterface;
}();
_defineProperty(UserInterface, "activeCategory", "home");


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

/***/ }),

/***/ "./src/local_storage.js":
/*!******************************!*\
  !*** ./src/local_storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProjectFromLocalStorage": () => (/* binding */ deleteProjectFromLocalStorage),
/* harmony export */   "getProjectsFromLocalStorage": () => (/* binding */ getProjectsFromLocalStorage),
/* harmony export */   "getTasks": () => (/* binding */ getTasks),
/* harmony export */   "getTodoItem": () => (/* binding */ getTodoItem),
/* harmony export */   "removeTaskFromStorage": () => (/* binding */ removeTaskFromStorage),
/* harmony export */   "saveProjectToLocalStorage": () => (/* binding */ saveProjectToLocalStorage),
/* harmony export */   "saveTaskToLocalStorage": () => (/* binding */ saveTaskToLocalStorage),
/* harmony export */   "updateTodoItem": () => (/* binding */ updateTodoItem)
/* harmony export */ });
function saveTaskToLocalStorage(task) {
  var tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function getTasks() {
  var tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  return tasks;
}
function removeTaskFromStorage(e) {
  var tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  var myId = e.target.parentElement.parentElement.id;
  console.log(myId);
  for (var x in tasks) {
    if (tasks[x].id == myId) {
      tasks.splice(x, 1);
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function getTodoItem(id) {
  var tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  for (var x in tasks) {
    if (tasks[x].id == id) {
      return tasks[x];
    }
  }
}
function updateTodoItem(id, title, date, priority) {
  var tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = {};
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  for (var x in tasks) {
    if (tasks[x].id == id) {
      tasks[x].title = title;
      tasks[x].dueDate = date;
      tasks[x].priority = priority;
      console.log(tasks[x]);
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function saveProjectToLocalStorage(project) {
  var projects;
  if (localStorage.getItem("projects") === null) {
    projects = [];
  } else {
    projects = JSON.parse(localStorage.getItem("projects"));
  }
  projects.push(project);
  localStorage.setItem("projects", JSON.stringify(projects));
  console.log(projects);
}
function getProjectsFromLocalStorage() {
  var projects;
  if (localStorage.getItem("projects") === null) {
    projects = [];
  } else {
    projects = JSON.parse(localStorage.getItem("projects"));
  }
  return projects;
}
function deleteProjectFromLocalStorage(project) {
  var projects;
  if (localStorage.getItem("projects") === null) {
    projects = [];
  } else {
    projects = JSON.parse(localStorage.getItem("projects"));
  }
  projects.splice(indexOf(project), 1);
  localStorage.setItem("projects", JSON.stringify(projects));
  console.log("deleted");
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Task = /*#__PURE__*/_createClass(function Task(title, descripton, dueDate, priority, activeCategory, checked) {
  _classCallCheck(this, Task);
  this.title = title;
  this.descripton = descripton;
  this.dueDate = dueDate;
  this.priority = priority;
  this.category = activeCategory;
  this.checked = false;
  this.id = new Date().getTime();
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:100,300,400);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,*::after,*::before{\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n    --header-background:#0369a1;\n    --header-color:#ecfeff;\n    --sidebar-backgroud:#ecfeff;\n    --sidebar-color: #374151;\n    --main-background:white;\n    --item-background: #ecfeff;\n    --item-color:#52525b;\n    --button-backgroun: #0ea5e9;\n    --button-color:#f0f9ff;\n    --icon-color:#334155;\n    --sidebar-item-hover-background:#0369a1;\n    --sidebar-item-hover-color:#cffafe;\n    --red-code:#f87171;\n    --orange-code:#fdba74;\n    --green-code:#a3e635;\n    --new-item-background: #bae6fd;\n}\n\nbody{\n    background: var(--main-background);\n    font-size: 24px;\n    font-family: 'Monserrat', 'Roboto', sans-serif;\n    display: grid;\n    grid-template: 120px 8fr/ 1fr 4fr;\n    height: 100vh;\n    width: 100%;\n    margin: 0 auto;\n    \n}\n\nheader{\n    \n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    gap: 24px;\n    padding-left: 16px;\n    background: var(--header-background);\n    color: var(--header-color) ;\n    \n}\n\n.sidebar{\n    \n    padding:32px;\n    background-color: var(--sidebar-backgroud);\n    color:var(--sidebar-color);\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    position: relative;\n    \n\n\n}\n\n.item-container{\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    background: var(--main-background);\n    gap: 16px;\n\n\n\n\n}\n.main{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    transition: filter 0ms ease-in-out 0ms;\n}\n\n.item{\n\n    display: flex;\n    justify-content: space-between;\n    padding: 0 8px;\n    height: 60px;\n    background: var(--item-background);\n    color:var(--item-color)\n}\n\n.item-name{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap:16px;\n}\n\n.item-info{\n    display: flex;\n    align-items: center;\n    gap:16px;\n    justify-content: space-between;\n}\n\n.item.high{\n    border-left: 6px solid var(--red-code);\n    border-radius: 3px;\n    \n}\n\n.item.medium{\n    border-left: 6px solid var(--orange-code);\n    border-radius: 3px;\n    \n}\n\n.item.low{\n    border-left: 6px solid var(--green-code);\n    border-radius: 3px;\n    \n}\n\nbutton{\n    padding: 6px 12px;\n    background: var(--button-backgroun);\n    color:var(--button-color);\n    border:none;\n    border-radius: 4px;\n    font-size: 1rem;\n\n}\n\n\n/* button:active{\n    transform: scale(1.04);\n    color:var(--header-background);\n} */\n\nbutton:hover{\n    cursor: pointer;\n    box-shadow: 3px 3px 2px 0px rgba(155, 190, 207, 0.62);\n}\n\n.item-info p{\n    font-size: 0.7rem;\n}\n\n.item-info i{\n    cursor: pointer;\n}\n\n.fa-pen-to-square{\n    color:var(--icon-color);\n    font-size: 24px;\n}\n.fa-pen-to-square:hover{\n    color:var(--button-backgroun)\n}\n\n.fa-pen-to-square:active{\n    transform: scale(1.05);\n}\n\n.fa-trash-can{\n    color:var(--icon-color);\n    font-size: 24px;\n\n}\n.fa-trash-can:hover{\n    color:var(--button-backgroun)\n}\n\n/* .fa-trash-can:active{\n    transform: scale(1.05);\n} */\n\n.projects h3{\n    user-select: none; \n}\n\n.projects ul{\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    align-items: start;\n    gap: 8px;\n    margin-top: 16px;\n    user-select: none; \n}\n\n.projects li{\n    width: 240px;\n    margin-left: 36px;\n    display: flex;\n    justify-content: space-between;\n\n}\n\n.sidebar>h3:hover,.projects>h3:hover, .projects li:hover{\n    background: var(--sidebar-item-hover-background);\n    color: var(--sidebar-item-hover-color);\n    cursor: pointer;\n    border-radius: 8px;\n    padding:0px 12px;\n\n}\n\n.sidebar>h3:active,.projects>h3:active, .projects li:active{\ntransform: scale(1.05);\n\n}\n\n.add-project-btn{\n    background-color: var(--header-background);\n    color: var(--header-color);\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    font-size: 64px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    position: absolute;\n    bottom: 180px;\n    left: 120px;\n\n    box-shadow: 1px 2px 2px 2px rgba(155, 190, 207, 0.62);\n    user-select: none; \n    \n}\n\n.add-project-btn:hover{\n    cursor: pointer;\n    color: var(--header-background);\n    background: var(--header-color);\n    border: 2px solid var(--header-background);\n}\n\n.add-project-btn:active{\n    transform: scale(1.05);\n}\n\n.new-item{\n    background-color: var(--new-item-background);\n    color:var(--item-color);\n    padding: 16px;\n    border-radius: 6px;\n    user-select: none;\n    border-left:6px solid var(--item-color);\n    margin: 0 16px;\n\n}\n.new-item:hover{\n    cursor: pointer;\n    background-color: var(--header-background);\n    color:var(--header-color);\n    \n}\n\n.new-item:active{\n    transform: scale(1.01);\n}\n\n.form{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    max-width:650px;\n    width: 98%;\n    padding: 24px;\n    background: #fff;\n    border-radius: 10px;\n    box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.1);\n    margin-top: -24px;\n    transition: top 0ms ease-in-out 0ms, opacity 300m ease-in-out, margin-top 300ms ease-in-out;\n    opacity: 0;\n    display: flex;\n    flex-direction: column;\n    color: var(--item-color);\n    z-index: -1;\n}\n\n.form>*{\n    margin: 16px 0px;\n}\n\n.form #close-btn{\n    position:absolute;\n    top:0px;\n    right:10px;\n\n}\n\nbody.active-form{\n    overflow: hidden;\n}\n\nbody.active-form .main{\n    filter: blur(5px);\n    background: rgba(0,0,0,0.08);\n    transition: filter 0ms ease-in-out 0ms;\n}\n\nbody.active-form .form{\n    top: 50%;\n    opacity: 1;\n    margin-top: 0px;\n    transition: top 0ms ease-in-out 0ms, opacity 300ms ease-in-out, margin-top 300ms ease-in-out;\n    z-index: 1;\n}\n\n.form-items{\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr/ 1fr 1fr;\n    gap:24px\n    \n}\n\n.form-item:nth-child(1){\n    grid-column: 1/2;\n    grid-row:1/2;\n}\n.form-item:nth-child(3){\n    grid-column: 1/2;\n    grid-row: 2/3;\n}\n.form-item:nth-child(4){\n    grid-column: 1/2;\n    grid-row: 3/4;\n}\n.form-item:nth-child(2){\n    grid-row: 1/4;\n    grid-column: 2/3;\n}\n\n.form-items .add-todo-btn-container{\n    grid-row: 4/5;\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n\n    \n}\n#add-todo-btn{\n    padding: 16px 32px;\n}\n\n\n\n\n\n\n.form-item>*{\n    display: block;\n}\n\ninput,select,textarea{\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    background: var(--new-item-background);\n    \n    border:none;\n    border-radius: 8px;\n    outline:none\n}\n\ninput:focus, select:focus, textarea:focus{\n   outline:  2px solid var(--header-background);\n}\n\n.form h3{\n    border-bottom: 2px solid var(--header-background);\n}\n\ntextarea{\n    height: 80%;\n}\n\nlabel{\n    font-size: 0.9rem;\n}\n\n\n.save-project{\n    border:2px solid var(--header-background);\n    padding: 16px;\n    border-radius: 8px;\n    display: none;\n    margin-top: 24px;\n}\n\n.save-project.active{\n    display: block;\n}\n\n\n.item.fall{\n    display: none;\n}\n\n.right-project-panel{\n    visibility: hidden;\n\n}\n\nli:hover .right-project-panel{\n    visibility: visible;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:100,300,400\");\n\n*,*::after,*::before{\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n    --header-background:#0369a1;\n    --header-color:#ecfeff;\n    --sidebar-backgroud:#ecfeff;\n    --sidebar-color: #374151;\n    --main-background:white;\n    --item-background: #ecfeff;\n    --item-color:#52525b;\n    --button-backgroun: #0ea5e9;\n    --button-color:#f0f9ff;\n    --icon-color:#334155;\n    --sidebar-item-hover-background:#0369a1;\n    --sidebar-item-hover-color:#cffafe;\n    --red-code:#f87171;\n    --orange-code:#fdba74;\n    --green-code:#a3e635;\n    --new-item-background: #bae6fd;\n}\n\nbody{\n    background: var(--main-background);\n    font-size: 24px;\n    font-family: 'Monserrat', 'Roboto', sans-serif;\n    display: grid;\n    grid-template: 120px 8fr/ 1fr 4fr;\n    height: 100vh;\n    width: 100%;\n    margin: 0 auto;\n    \n}\n\nheader{\n    \n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    gap: 24px;\n    padding-left: 16px;\n    background: var(--header-background);\n    color: var(--header-color) ;\n    \n}\n\n.sidebar{\n    \n    padding:32px;\n    background-color: var(--sidebar-backgroud);\n    color:var(--sidebar-color);\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    position: relative;\n    \n\n\n}\n\n.item-container{\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    background: var(--main-background);\n    gap: 16px;\n\n\n\n\n}\n.main{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    transition: filter 0ms ease-in-out 0ms;\n}\n\n.item{\n\n    display: flex;\n    justify-content: space-between;\n    padding: 0 8px;\n    height: 60px;\n    background: var(--item-background);\n    color:var(--item-color)\n}\n\n.item-name{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap:16px;\n}\n\n.item-info{\n    display: flex;\n    align-items: center;\n    gap:16px;\n    justify-content: space-between;\n}\n\n.item.high{\n    border-left: 6px solid var(--red-code);\n    border-radius: 3px;\n    \n}\n\n.item.medium{\n    border-left: 6px solid var(--orange-code);\n    border-radius: 3px;\n    \n}\n\n.item.low{\n    border-left: 6px solid var(--green-code);\n    border-radius: 3px;\n    \n}\n\nbutton{\n    padding: 6px 12px;\n    background: var(--button-backgroun);\n    color:var(--button-color);\n    border:none;\n    border-radius: 4px;\n    font-size: 1rem;\n\n}\n\n\n/* button:active{\n    transform: scale(1.04);\n    color:var(--header-background);\n} */\n\nbutton:hover{\n    cursor: pointer;\n    box-shadow: 3px 3px 2px 0px rgba(155, 190, 207, 0.62);\n}\n\n.item-info p{\n    font-size: 0.7rem;\n}\n\n.item-info i{\n    cursor: pointer;\n}\n\n.fa-pen-to-square{\n    color:var(--icon-color);\n    font-size: 24px;\n}\n.fa-pen-to-square:hover{\n    color:var(--button-backgroun)\n}\n\n.fa-pen-to-square:active{\n    transform: scale(1.05);\n}\n\n.fa-trash-can{\n    color:var(--icon-color);\n    font-size: 24px;\n\n}\n.fa-trash-can:hover{\n    color:var(--button-backgroun)\n}\n\n/* .fa-trash-can:active{\n    transform: scale(1.05);\n} */\n\n.projects h3{\n    user-select: none; \n}\n\n.projects ul{\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    align-items: start;\n    gap: 8px;\n    margin-top: 16px;\n    user-select: none; \n}\n\n.projects li{\n    width: 240px;\n    margin-left: 36px;\n    display: flex;\n    justify-content: space-between;\n\n}\n\n.sidebar>h3:hover,.projects>h3:hover, .projects li:hover{\n    background: var(--sidebar-item-hover-background);\n    color: var(--sidebar-item-hover-color);\n    cursor: pointer;\n    border-radius: 8px;\n    padding:0px 12px;\n\n}\n\n.sidebar>h3:active,.projects>h3:active, .projects li:active{\ntransform: scale(1.05);\n\n}\n\n.add-project-btn{\n    background-color: var(--header-background);\n    color: var(--header-color);\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    font-size: 64px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    position: absolute;\n    bottom: 180px;\n    left: 120px;\n\n    box-shadow: 1px 2px 2px 2px rgba(155, 190, 207, 0.62);\n    user-select: none; \n    \n}\n\n.add-project-btn:hover{\n    cursor: pointer;\n    color: var(--header-background);\n    background: var(--header-color);\n    border: 2px solid var(--header-background);\n}\n\n.add-project-btn:active{\n    transform: scale(1.05);\n}\n\n.new-item{\n    background-color: var(--new-item-background);\n    color:var(--item-color);\n    padding: 16px;\n    border-radius: 6px;\n    user-select: none;\n    border-left:6px solid var(--item-color);\n    margin: 0 16px;\n\n}\n.new-item:hover{\n    cursor: pointer;\n    background-color: var(--header-background);\n    color:var(--header-color);\n    \n}\n\n.new-item:active{\n    transform: scale(1.01);\n}\n\n.form{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    max-width:650px;\n    width: 98%;\n    padding: 24px;\n    background: #fff;\n    border-radius: 10px;\n    box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.1);\n    margin-top: -24px;\n    transition: top 0ms ease-in-out 0ms, opacity 300m ease-in-out, margin-top 300ms ease-in-out;\n    opacity: 0;\n    display: flex;\n    flex-direction: column;\n    color: var(--item-color);\n    z-index: -1;\n}\n\n.form>*{\n    margin: 16px 0px;\n}\n\n.form #close-btn{\n    position:absolute;\n    top:0px;\n    right:10px;\n\n}\n\nbody.active-form{\n    overflow: hidden;\n}\n\nbody.active-form .main{\n    filter: blur(5px);\n    background: rgba(0,0,0,0.08);\n    transition: filter 0ms ease-in-out 0ms;\n}\n\nbody.active-form .form{\n    top: 50%;\n    opacity: 1;\n    margin-top: 0px;\n    transition: top 0ms ease-in-out 0ms, opacity 300ms ease-in-out, margin-top 300ms ease-in-out;\n    z-index: 1;\n}\n\n.form-items{\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr/ 1fr 1fr;\n    gap:24px\n    \n}\n\n.form-item:nth-child(1){\n    grid-column: 1/2;\n    grid-row:1/2;\n}\n.form-item:nth-child(3){\n    grid-column: 1/2;\n    grid-row: 2/3;\n}\n.form-item:nth-child(4){\n    grid-column: 1/2;\n    grid-row: 3/4;\n}\n.form-item:nth-child(2){\n    grid-row: 1/4;\n    grid-column: 2/3;\n}\n\n.form-items .add-todo-btn-container{\n    grid-row: 4/5;\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n\n    \n}\n#add-todo-btn{\n    padding: 16px 32px;\n}\n\n\n\n\n\n\n.form-item>*{\n    display: block;\n}\n\ninput,select,textarea{\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    background: var(--new-item-background);\n    \n    border:none;\n    border-radius: 8px;\n    outline:none\n}\n\ninput:focus, select:focus, textarea:focus{\n   outline:  2px solid var(--header-background);\n}\n\n.form h3{\n    border-bottom: 2px solid var(--header-background);\n}\n\ntextarea{\n    height: 80%;\n}\n\nlabel{\n    font-size: 0.9rem;\n}\n\n\n.save-project{\n    border:2px solid var(--header-background);\n    padding: 16px;\n    border-radius: 8px;\n    display: none;\n    margin-top: 24px;\n}\n\n.save-project.active{\n    display: block;\n}\n\n\n.item.fall{\n    display: none;\n}\n\n.right-project-panel{\n    visibility: hidden;\n\n}\n\nli:hover .right-project-panel{\n    visibility: visible;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/to-do-list.png":
/*!***********************************!*\
  !*** ./src/assets/to-do-list.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "to-do-list.png";

/***/ }),

/***/ "./src/assets/trash-can-regular.svg":
/*!******************************************!*\
  !*** ./src/assets/trash-can-regular.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "trash-can-regular.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLGVBQWUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsZUFBZSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFB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MENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbF9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHRvZG9Mb2dvIGZyb20gXCIuL2Fzc2V0cy90by1kby1saXN0LnBuZ1wiO1xuLy8gaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwuY3NzXCI7XG4vLyBpbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzXCI7XG5pbXBvcnQgeyBVc2VySW50ZXJmYWNlfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnR7c2F2ZVRhc2tUb0xvY2FsU3RvcmFnZSwgZ2V0VGFza3MsIHJlbW92ZVRhc2t9IGZyb20gXCIuL2xvY2FsX3N0b3JhZ2UuanNcIlxuXG5cbmNvbnN0IHRvZG9JbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Mb2dvXCIpO1xudG9kb0ltZy5zcmMgPSB0b2RvTG9nbztcblxuXG5cblxuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzIGgzXCIpO1xuXG5cblVzZXJJbnRlcmZhY2UucmVuZGVySFRNTChnZXRUYXNrcygpKVxuXG5cblxuXG5cblxuXG5cblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1pdGVtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVc2VySW50ZXJmYWNlLnRvZ2dsZUZvcm0pO1xuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIi5mb3JtICNjbG9zZS1idG5cIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVc2VySW50ZXJmYWNlLnRvZ2dsZUZvcm1cbiAgKTtcblxuY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tYnRuXCIpO1xuXG5cblxuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVGFza0l0ZW0pO1xuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVXNlckludGVyZmFjZS5yZXNldEZvcm0pO1xuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgVXNlckludGVyZmFjZS5yZW5kZXJIVE1MKGdldFRhc2tzKCkpO1xuICBVc2VySW50ZXJmYWNlLmZpbHRlckNhdGVnb3J5KClcbn0pO1xuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWZvcm1cIilcbn0pXG5cblxuXG5cblVzZXJJbnRlcmZhY2UucmVtb3ZlVG9kbygpO1xuVXNlckludGVyZmFjZS5lZGl0VG9kbygpO1xuVXNlckludGVyZmFjZS5hZGRQcm9qZWN0KCk7XG5Vc2VySW50ZXJmYWNlLnJlbmRlclByb2plY3RzSFRNTCgpO1xuVXNlckludGVyZmFjZS5maWx0ZXJDYXRlZ29yeSgpXG5cblVzZXJJbnRlcmZhY2Uuc2V0QWN0aXZlQ2F0ZWdvcnkoKTtcblVzZXJJbnRlcmZhY2UucmVtb3ZlUHJvamVjdCgpO1xuVXNlckludGVyZmFjZS5yZW1vdmVUb2RvKCk7XG5Vc2VySW50ZXJmYWNlLmVkaXRUb2RvKCk7XG5cbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsVXNlckludGVyZmFjZS5maWx0ZXJDYXRlZ29yeSk7XG5wcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixVc2VySW50ZXJmYWNlLmZpbHRlckNhdGVnb3J5KTtcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVtKCl7XG4gIFxuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdG9uVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IGFjdGl2ZUNhdGVnb3J5ID0gVXNlckludGVyZmFjZS5hY3RpdmVDYXRlZ29yeVxuICBcbiAgIFxuICAgIGxldCB0YXNrID0gbmV3IFRhc2soXG4gICAgICB0aXRsZVZhbHVlLFxuICAgICAgZGVzY3JpcHRvblZhbHVlLFxuICAgICAgZGF0ZVZhbHVlLFxuICAgICAgcHJpb3JpdHlWYWx1ZSxcbiAgICAgIGFjdGl2ZUNhdGVnb3J5XG4gICAgKTtcbiAgICAvLyBzYXZlIGl0ZW0gdG8gTG9jYWxTdG9yYWdlXG4gICAgc2F2ZVRhc2tUb0xvY2FsU3RvcmFnZSh0YXNrKSAgXG4gIFxuICBcbn1cblxuXG5cblxuXG4vLyBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idG5cIik7XG4vLyBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZS1wcm9qZWN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4vLyB9KTtcblxuXG5cbi8vIHRvZG9MaXN0LnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpIHx8IFwie31cIik7XG4vLyBjb25zdCBzYXZlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZS1wcm9qZWN0IGJ1dHRvblwiKTtcblxuLy8gc2F2ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgY29uc3QgcHJvamVjdElucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNhdmUtcHJvamVjdCBpbnB1dFwiKS52YWx1ZTtcbi8vICAgY29uc3Qgc2F2ZVByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNhdmUtcHJvamVjdFwiKTtcbi8vICAgc2F2ZVByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuLy8gICB0b2RvTGlzdC5wcm9qZWN0c1twcm9qZWN0SW5wdXRWYWx1ZV0gPSBbXTtcbi8vICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdC5wcm9qZWN0cykgfHwge30pIHx8XG4vLyAgIC8vICAge307XG5cbi8vICAgY29uc29sZS5sb2codG9kb0xpc3QucHJvamVjdHMpO1xuLy8gICB1cGRhdGVQcm9qZWN0TGlzdCh0b2RvTGlzdC5wcm9qZWN0cyk7XG4vLyAgIHVwZGF0ZVRvZG9MaXN0KHRvZG9MaXN0LmhvbWUpO1xuLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0KHByb2plY3RzKSB7XG4vLyAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cyB1bFwiKTtcbi8vICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbi8vICAgT2JqZWN0LmtleXMocHJvamVjdHMpLmZvckVhY2goKGtleSkgPT4ge1xuLy8gICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4vLyAgICAgbmV3SXRlbS50ZXh0Q29udGVudCA9IGtleTtcbi8vICAgICBuZXdJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnlcIiwga2V5KTtcbi8vICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChuZXdJdGVtKTtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIC8vcHJvamVjdCBsaXN0IGNsaWNrIGV2ZW50XG4vLyBjb25zdCBwcm9qZWN0TGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpXCIpXG4vLyAvLyBjb25zb2xlLmxvZygncHJvamVjdExpc3RJdGVtcycpXG4vLyBwcm9qZWN0TGlzdEl0ZW1zLmZvckVhY2gocHJvamVjdCA9PiB7XG4vLyAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgLy8gY29uc3QgcHJvamVjdExpc3QgPSB0b2RvTGlzdC5wcm9qZWN0c1twcm9qZWN0XTtcbi8vICAgICBhY3RpdmVDYXRlZ29yeSA9IGUudGFyZ2V0LmRhdGFzZXQuY2F0ZWdvcnk7XG4vLyAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC5jYXRlZ29yeSk7XG4vLyAgICAgdXBkYXRlVG9kb0xpc3QodG9kb0xpc3QuaG9tZSk7XG4vLyAgICAgY29uc29sZS5sb2coJ3RvZG9MaXN0Jylcbi8vICAgfSk7XG4vLyB9KTtcblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHVwZGF0ZVByb2plY3RMaXN0KHRvZG9MaXN0LnByb2plY3RzKSk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdXBkYXRlVG9kb0xpc3QodGFza3MpKTtcblxuXG5cblxuLy8gY29uc3QgcHJvamVjdExpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcbi8vIHByb2plY3RMaXN0SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAobGlzdEl0ZW0pIHtcbi8vICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgYWN0aXZlQ2F0ZWdvcnkgPSBlLnRhcmdldC5kYXRhc2V0LmNhdGVnb3J5O1xuLy8gICAgIHVwZGF0ZVRvZG9MaXN0KHRhc2tzKTtcbi8vICAgfSk7XG4vLyB9KTtcblxuLy8gbGV0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tZGVsZXRlLWJ0blwiKTtcbi8vIGNvbnNvbGUubG9nKGRlbGV0ZUJ0bnMpXG4vLyBkZWxldGVCdG5zLmZvckVhY2goZnVuY3Rpb24oZGVsQnRuKXtcbi8vICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbi8vICAgICBsZXQgbXlUYXJnZXQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuLy8gICAgIGxldCBteUlkID0gbXlUYXJnZXQuaWQ7XG4vLyAgICAgY29uc29sZS5sb2cobXlJZClcblxuLy8gICAgZm9yKGNvbnN0IG9iaiBvZiB0b2RvTGlzdC5ob21lKXtcbi8vICAgICBpZiAob2JqLmlkID09IG15SWQpe1xuLy8gICAgICAgdG9kb0xpc3QuaG9tZS5zcGxpY2UoaW5kZXhPZihvYmopLDEpXG4vLyAgICAgICB0b2RvTGlzdC5ob21lID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJob21lXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0LmhvbWUpKVxuLy8gICAgICAgICB9XG5cbi8vICAgIH1cbiAgICBcbi8vICAgICB1cGRhdGVUb2RvTGlzdCh0b2RvTGlzdC5ob21lKVxuLy8gICB9KVxuLy8gfSlcblxuXG5cbiIsIi8vIGltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qc1wiO1xuaW1wb3J0IHRyYXNoQ2FuIGZyb20gXCIuL2Fzc2V0cy90cmFzaC1jYW4tcmVndWxhci5zdmdcIjtcbmltcG9ydCB7XG4gIGdldFRvZG9JdGVtLFxuICByZW1vdmVUYXNrRnJvbVN0b3JhZ2UsXG4gIHVwZGF0ZVRvZG9JdGVtLFxuICBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlLFxuICBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsXG4gIGRlbGV0ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlXG59IGZyb20gXCIuL2xvY2FsX3N0b3JhZ2VcIjtcbmNvbnN0IHRyYXNoQ2FuSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2gtY2FuXCIpO1xudHJhc2hDYW5JY29uLnNyYyA9IHRyYXNoQ2FuO1xuXG5jbGFzcyBVc2VySW50ZXJmYWNlIHtcbiAgc3RhdGljIGFjdGl2ZUNhdGVnb3J5ID0gXCJob21lXCI7XG4gIHN0YXRpYyByZW5kZXJIVE1MKHRhc2tMaXN0KSB7XG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1jb250YWluZXJcIik7XG4gICAgaXRlbUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCBkaXNwbGF5RGF0YSA9IHRhc2tMaXN0Lm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCIke2VsZW1lbnQuaWR9XCIgY2xhc3MgPSBcIml0ZW0gJHtlbGVtZW50LnByaW9yaXR5fVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1uYW1lXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidG9kb1wiIGlkPVwiJHtlbGVtZW50LmlkfVwiIC8+XG4gICAgICAgIDxwPiR7ZWxlbWVudC50aXRsZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWluZm9cIj5cbiAgICAgICAgPGJ1dHRvbj5EZXRhaWxzPC9idXR0b24+XG4gICAgICAgIDxwPiR7ZWxlbWVudC5kdWVEYXRlfTwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiaXRlbS1lZGl0LWJ0blwiPlxuICAgICAgICBFZGl0XG4gICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwidHJhc2gtY2FuXCI+XG4gICAgICBkZWxldGVcbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgfSk7XG4gICAgaXRlbUNvbnRhaW5lci5pbm5lckhUTUwgPSBkaXNwbGF5RGF0YS5qb2luKFwiIFwiKTtcbiAgfVxuXG4gIC8vIDxpbWcgY2xhc3M9XCJ0cmFzaC1jYW5cIiBzcmM9JHt0cmFzaENhbn0gd2lkdGg9XCIyMHB4XCIvPlxuICAvLzxpIGNsYXNzPVwiZmEgZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlXCI+PC9pPlxuXG4gIHN0YXRpYyByZXNldEZvcm0oKSB7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlID0gXCJcIik7XG4gICAgY29uc3QgZGF0ZVZhbHVlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZSA9IFwiXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZSA9IFwiXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0b25WYWx1ZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlID0gXCJcIik7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlVG9kbygpIHtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaC1jYW5cIik7XG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKChkZWxldGVCdG4pID0+IHtcbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmFsbFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZGVsZXRlQnRuKTtcbiAgICAgICAgcmVtb3ZlVGFza0Zyb21TdG9yYWdlKGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZWRpdFRvZG8oKSB7XG4gICAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tZWRpdC1idG5cIik7XG4gICAgZWRpdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgdGhpcy5lZGl0Rm9ybShlKTtcblxuICAgICAgICBsZXQgaXRlbSA9IGdldFRvZG9JdGVtKGl0ZW1JZCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtICN0aXRsZVwiKS52YWx1ZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtICNkYXRlXCIpLnZhbHVlID0gaXRlbS5kdWVEYXRlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybSAjcHJpb3JpdHlcIikudmFsdWUgPSBpdGVtLnByaW9yaXR5O1xuXG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybSBidXR0b25cIik7XG5cbiAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWZvcm0gI3RpdGxlXCIpLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtICNkYXRlXCIpLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuZWRpdC1mb3JtICNwcmlvcml0eVwiXG4gICAgICAgICAgKS52YWx1ZTtcbiAgICAgICAgICB1cGRhdGVUb2RvSXRlbShpdGVtSWQsIHRpdGxlVmFsdWUsIGRhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSk7XG4gICAgICAgICAgVXNlckludGVyZmFjZS5yZW5kZXJJdGVtSFRNTChcbiAgICAgICAgICAgIGUsXG4gICAgICAgICAgICBpdGVtSWQsXG4gICAgICAgICAgICB0aXRsZVZhbHVlLFxuICAgICAgICAgICAgZGF0ZVZhbHVlLFxuICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlRm9ybSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmUtZm9ybVwiKTtcbiAgfVxuXG4gIHN0YXRpYyBlZGl0Rm9ybShlKSB7XG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWZvcm1cIik7XG4gICAgaXRlbUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1uYW1lXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidG9kb1wiIGlkPVwiXCIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1pbmZvXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgaWQ9XCJkYXRlXCI+XG4gICAgICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPmxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPm1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5oaWdoPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzYXZlLWJ0blwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIHJlbmRlckl0ZW1IVE1MKGUsIGlkLCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGl0ZW1Db250YWluZXIuaWQgPSBpZDtcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdoXCIgfHwgXCJtZWRpdW1cIiB8fCBcImxvd1wiKTtcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xuICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImVkaXQtZm9ybVwiKTtcbiAgICBpdGVtQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiaXRlbS1uYW1lXCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ0b2RvXCIgaWQ9XCIke2lkfVwiIC8+XG4gICAgPHA+JHt0aXRsZX08L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaXRlbS1pbmZvXCI+XG4gICAgPGJ1dHRvbj5EZXRhaWxzPC9idXR0b24+XG4gICAgPHA+JHtkYXRlfTwvcD5cbiAgICA8YnV0dG9uIGNsYXNzID0gXCJpdGVtLWVkaXQtYnRuXCI+XG4gICAgRWRpdFxuICAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzID0gXCJ0cmFzaC1jYW5cIj5cbiAgZGVsZXRlXG4gICAgPC9idXR0b24+XG5cbiAgPC9kaXY+XG48L2Rpdj5gO1xuICB9XG5cbiAgc3RhdGljIHNldEFjdGl2ZUNhdGVnb3J5KCkge1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gICAgY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzIGgzXCIpO1xuICAgIGNvbnN0IHN1YlByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0cyBsaVwiKVxuXG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IFwiaG9tZVwiO1xuICAgIH0pO1xuICAgIHByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gXCJwcm9qZWN0c1wiO1xuICAgIH0pO1xuXG4gICAgc3ViUHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKT0+e1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnk9IGJ0bi5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWN0aXZlQ2F0ZWdvcnkpO1xuICAgICAgICBVc2VySW50ZXJmYWNlLmZpbHRlckNhdGVnb3J5KCk7XG4gICAgICAgIFxuXG4gICAgICB9KVxuICAgIH0pXG5cblxuICB9XG5cbiAgc3RhdGljIGZpbHRlckNhdGVnb3J5KCkge1xuICAgIGxldCB0YXNrcztcbiAgICBsZXQgYWN0aXZlQ2F0ZWdvcnlMaXN0ID0gW107XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIiA9PT0gbnVsbCkpIHtcbiAgICAgIHRhc2tzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgICB9XG4gICAgZm9yIChsZXQgeCBpbiB0YXNrcykge1xuICAgICAgaWYgKHRhc2tzW3hdLmNhdGVnb3J5ID09IFVzZXJJbnRlcmZhY2UuYWN0aXZlQ2F0ZWdvcnkpIHtcbiAgICAgICAgYWN0aXZlQ2F0ZWdvcnlMaXN0LnB1c2godGFza3NbeF0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVDYXRlZ29yeUxpc3QpO1xuICAgIFVzZXJJbnRlcmZhY2UucmVuZGVySFRNTChhY3RpdmVDYXRlZ29yeUxpc3QpO1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3QoKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtYnRuXCIpO1xuICAgIGNvbnN0IHNhdmVQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZS1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IHNhdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYXZlLXByb2plY3QgYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNhdmVQcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIHNhdmVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlXG4gICAgICBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKHByb2plY3QpO1xuICAgICAgc2F2ZVByb2plY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBVc2VySW50ZXJmYWNlLnJlbmRlclByb2plY3RzSFRNTCgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlPVwiXCJcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJQcm9qZWN0c0hUTUwoKXtcbiAgICBsZXQgcHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMgdWxcIilcbiAgICBsZXQgcHJvamVjdEhUTUwgPSBwcm9qZWN0cy5tYXAocHJvamVjdD0+e1xuICAgICAgcmV0dXJuICc8bGk+PGRpdiBjbGFzcz1cImxlZnQtcHJvamVjdC1wYW5lbFwiPicrcHJvamVjdCsnPC9kaXY+PGRpdiBjbGFzcz1cInJpZ2h0LXByb2plY3QtcGFuZWxcIj54PC9kaXY+PC9saT4nXG4gICAgfSkuam9pbihcIlwiKVxuICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gcHJvamVjdEhUTUxcblxuICB9XG5cbiAgc3RhdGljIHJlbW92ZVByb2plY3QoKXtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmlnaHQtcHJvamVjdC1wYW5lbFwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnRucy5mb3JFYWNoKGJ0bj0+e1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiXG4gICAgICAgIGxldCBwcm9qZWN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXS5pbm5lclRleHRcbiAgICAgICAgZGVsZXRlUHJvamVjdEZyb21Mb2NhbFN0b3JhZ2UocHJvamVjdCk7XG5cbiAgICAgIH0pXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhkZWxldGVQcm9qZWN0QnRucylcbiAgfVxufVxuXG5leHBvcnQgeyBVc2VySW50ZXJmYWNlIH07XG5cbi8vIGZ1bmN0aW9uIHVwZGF0ZVRvZG9JdGVtKGlkLHRpdGxlLGRhdGUscHJpb3JpdHkpe1xuLy8gICBsZXQgdGFza3M7XG4vLyAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpPT09bnVsbCl7XG4vLyAgICAgdGFza3M9e31cbi8vICAgfWVsc2V7XG4vLyAgICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpXG4vLyAgIH1cbi8vICAgZm9yKGxldCB4IGluIHRhc2tzKXtcbi8vICAgICBpZih0YXNrc1t4XS5pZD09aWQpe1xuLy8gICAgICAgdGFza3NbeF0udGl0bGUgPXRpdGxlO1xuLy8gICAgICAgdGFza3NbeF0uZHVlRGF0ZSA9IGRhdGU7XG4vLyAgICAgICB0YXNrc1t4XS5wcmlvcml0eSA9IHByaW9yaXR5O1xuLy8gICAgICAgY29uc29sZS5sb2codGFza3NbeF0pXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4iLCJcblxuXG5mdW5jdGlvbiBzYXZlVGFza1RvTG9jYWxTdG9yYWdlKHRhc2spe1xuICAgIGxldCB0YXNrcztcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSA9PT0gbnVsbCl7XG4gICAgICB0YXNrcyA9IFtdO1xuICAgIH1lbHNle1xuICAgICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpXG4gICAgfVxuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgY29uc29sZS5sb2codGFza3MpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcbiAgfVxuICBcbiAgZnVuY3Rpb24gZ2V0VGFza3MoKXtcbiAgICBsZXQgdGFza3M7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKT09PW51bGwpe1xuICAgICAgdGFza3MgPSBbXVxuICAgIH1lbHNle1xuICAgICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpXG4gICAgfVxuICAgIHJldHVybiB0YXNrc1xuICB9XG4gIFxuICBcbiAgZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21TdG9yYWdlKGUpe1xuICAgIGxldCB0YXNrcztcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpPT09bnVsbCl7XG4gICAgICB0YXNrcz0gW107XG4gICAgfWVsc2V7XG4gICAgICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSlcbiAgICB9XG4gICAgbGV0IG15SWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgY29uc29sZS5sb2cobXlJZClcblxuICAgIGZvciAobGV0IHggaW4gdGFza3Mpe1xuICAgICAgICBpZih0YXNrc1t4XS5pZCA9PSBteUlkKXtcbiAgICAgICAgICAgIHRhc2tzLnNwbGljZSh4LDEpXG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJyxKU09OLnN0cmluZ2lmeSh0YXNrcykpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRUb2RvSXRlbShpZCl7XG4gICAgbGV0IHRhc2tzO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIik9PT1udWxsKXtcbiAgICAgIHRhc2tzID1bXVxuICAgIH1lbHNle1xuICAgICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpXG4gICAgfVxuICAgIGZvcihsZXQgeCBpbiB0YXNrcyl7XG4gICAgICBpZih0YXNrc1t4XS5pZCA9PSBpZCl7XG4gICAgICAgIHJldHVybiB0YXNrc1t4XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb2RvSXRlbShpZCx0aXRsZSxkYXRlLHByaW9yaXR5KXtcbiAgICBsZXQgdGFza3M7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIik9PT1udWxsKXtcbiAgICAgIHRhc2tzPXt9XG4gICAgfWVsc2V7XG4gICAgICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSlcbiAgICB9XG4gICAgZm9yKGxldCB4IGluIHRhc2tzKXtcbiAgICAgIGlmKHRhc2tzW3hdLmlkPT1pZCl7XG4gICAgICAgIFxuICAgICAgICB0YXNrc1t4XS50aXRsZSA9dGl0bGU7XG4gICAgICAgIHRhc2tzW3hdLmR1ZURhdGUgPSBkYXRlO1xuICAgICAgICB0YXNrc1t4XS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrc1t4XSlcbiAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJyxKU09OLnN0cmluZ2lmeSh0YXNrcykpXG5cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKHByb2plY3Qpe1xuICAgIGxldCBwcm9qZWN0cztcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpPT09bnVsbCl7XG4gICAgICBwcm9qZWN0cz1bXVxuICAgIH1lbHNle1xuICAgICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpXG4gICAgfVxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpXG5cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKXtcbiAgICBsZXQgcHJvamVjdHM7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKT09PW51bGwpe1xuICAgICAgcHJvamVjdHMgPSBbXTtcbiAgICB9ZWxzZXtcbiAgICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblxuICAgIH1cbiAgICByZXR1cm4gcHJvamVjdHNcbiAgfVxuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlKHByb2plY3Qpe1xuICAgIGxldCBwcm9qZWN0cztcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpPT09bnVsbCl7XG4gICAgICBwcm9qZWN0cyA9W11cbiAgICB9ZWxzZXtcbiAgICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxuICAgIH1cbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXhPZihwcm9qZWN0KSwxKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIixKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXG4gICAgY29uc29sZS5sb2coXCJkZWxldGVkXCIpXG4gIH1cblxuXG4gIGV4cG9ydHtzYXZlVGFza1RvTG9jYWxTdG9yYWdlLCBnZXRUYXNrcywgcmVtb3ZlVGFza0Zyb21TdG9yYWdlLCBnZXRUb2RvSXRlbX1cbiAgIiwiXG5cblxuZXhwb3J0IGNsYXNzIFRhc2t7XG4gICAgXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRvbixkdWVEYXRlLHByaW9yaXR5LGFjdGl2ZUNhdGVnb3J5LGNoZWNrZWQpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRvbiA9IGRlc2NyaXB0b247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGFjdGl2ZUNhdGVnb3J5O1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7IFxuICAgIH1cbn1cblxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMHxSb2JvdG86MTAwLDMwMCw0MDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCo6OmFmdGVyLCo6OmJlZm9yZXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgLS1oZWFkZXItYmFja2dyb3VuZDojMDM2OWExO1xcbiAgICAtLWhlYWRlci1jb2xvcjojZWNmZWZmO1xcbiAgICAtLXNpZGViYXItYmFja2dyb3VkOiNlY2ZlZmY7XFxuICAgIC0tc2lkZWJhci1jb2xvcjogIzM3NDE1MTtcXG4gICAgLS1tYWluLWJhY2tncm91bmQ6d2hpdGU7XFxuICAgIC0taXRlbS1iYWNrZ3JvdW5kOiAjZWNmZWZmO1xcbiAgICAtLWl0ZW0tY29sb3I6IzUyNTI1YjtcXG4gICAgLS1idXR0b24tYmFja2dyb3VuOiAjMGVhNWU5O1xcbiAgICAtLWJ1dHRvbi1jb2xvcjojZjBmOWZmO1xcbiAgICAtLWljb24tY29sb3I6IzMzNDE1NTtcXG4gICAgLS1zaWRlYmFyLWl0ZW0taG92ZXItYmFja2dyb3VuZDojMDM2OWExO1xcbiAgICAtLXNpZGViYXItaXRlbS1ob3Zlci1jb2xvcjojY2ZmYWZlO1xcbiAgICAtLXJlZC1jb2RlOiNmODcxNzE7XFxuICAgIC0tb3JhbmdlLWNvZGU6I2ZkYmE3NDtcXG4gICAgLS1ncmVlbi1jb2RlOiNhM2U2MzU7XFxuICAgIC0tbmV3LWl0ZW0tYmFja2dyb3VuZDogI2JhZTZmZDtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LWZhbWlseTogJ01vbnNlcnJhdCcsICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxMjBweCA4ZnIvIDFmciA0ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgXFxufVxcblxcbmhlYWRlcntcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpIDtcXG4gICAgXFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBcXG4gICAgcGFkZGluZzozMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91ZCk7XFxuICAgIGNvbG9yOnZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxuXFxuXFxufVxcblxcbi5pdGVtLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kKTtcXG4gICAgZ2FwOiAxNnB4O1xcblxcblxcblxcblxcbn1cXG4ubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcbn1cXG5cXG4uaXRlbXtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDhweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pdGVtLWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjp2YXIoLS1pdGVtLWNvbG9yKVxcbn1cXG5cXG4uaXRlbS1uYW1le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDoxNnB4O1xcbn1cXG5cXG4uaXRlbS1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MTZweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaXRlbS5oaWdoe1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLXJlZC1jb2RlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBcXG59XFxuXFxuLml0ZW0ubWVkaXVte1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLW9yYW5nZS1jb2RlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBcXG59XFxuXFxuLml0ZW0ubG93e1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLWdyZWVuLWNvZGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIFxcbn1cXG5cXG5idXR0b257XFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmFja2dyb3VuKTtcXG4gICAgY29sb3I6dmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbn1cXG5cXG5cXG4vKiBidXR0b246YWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICBjb2xvcjp2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxufSAqL1xcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAwcHggcmdiYSgxNTUsIDE5MCwgMjA3LCAwLjYyKTtcXG59XFxuXFxuLml0ZW0taW5mbyBwe1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLml0ZW0taW5mbyBpe1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYS1wZW4tdG8tc3F1YXJle1xcbiAgICBjb2xvcjp2YXIoLS1pY29uLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4uZmEtcGVuLXRvLXNxdWFyZTpob3ZlcntcXG4gICAgY29sb3I6dmFyKC0tYnV0dG9uLWJhY2tncm91bilcXG59XFxuXFxuLmZhLXBlbi10by1zcXVhcmU6YWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4uZmEtdHJhc2gtY2Fue1xcbiAgICBjb2xvcjp2YXIoLS1pY29uLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcblxcbn1cXG4uZmEtdHJhc2gtY2FuOmhvdmVye1xcbiAgICBjb2xvcjp2YXIoLS1idXR0b24tYmFja2dyb3VuKVxcbn1cXG5cXG4vKiAuZmEtdHJhc2gtY2FuOmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59ICovXFxuXFxuLnByb2plY3RzIGgze1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgXFxufVxcblxcbi5wcm9qZWN0cyB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IFxcbn1cXG5cXG4ucHJvamVjdHMgbGl7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDM2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG59XFxuXFxuLnNpZGViYXI+aDM6aG92ZXIsLnByb2plY3RzPmgzOmhvdmVyLCAucHJvamVjdHMgbGk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGViYXItaXRlbS1ob3Zlci1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXItaXRlbS1ob3Zlci1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOjBweCAxMnB4O1xcblxcbn1cXG5cXG4uc2lkZWJhcj5oMzphY3RpdmUsLnByb2plY3RzPmgzOmFjdGl2ZSwgLnByb2plY3RzIGxpOmFjdGl2ZXtcXG50cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblxcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTgwcHg7XFxuICAgIGxlZnQ6IDEyMHB4O1xcblxcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAycHggcmdiYSgxNTUsIDE5MCwgMjA3LCAwLjYyKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IFxcbiAgICBcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46YWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ubmV3LWl0ZW17XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldy1pdGVtLWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjp2YXIoLS1pdGVtLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6NnB4IHNvbGlkIHZhcigtLWl0ZW0tY29sb3IpO1xcbiAgICBtYXJnaW46IDAgMTZweDtcXG5cXG59XFxuLm5ldy1pdGVtOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6dmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgXFxufVxcblxcbi5uZXctaXRlbTphY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxufVxcblxcbi5mb3Jte1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgIG1heC13aWR0aDo2NTBweDtcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcXG4gICAgbWFyZ2luLXRvcDogLTI0cHg7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwbXMgZWFzZS1pbi1vdXQgMG1zLCBvcGFjaXR5IDMwMG0gZWFzZS1pbi1vdXQsIG1hcmdpbi10b3AgMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB2YXIoLS1pdGVtLWNvbG9yKTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5mb3JtPip7XFxuICAgIG1hcmdpbjogMTZweCAwcHg7XFxufVxcblxcbi5mb3JtICNjbG9zZS1idG57XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6MHB4O1xcbiAgICByaWdodDoxMHB4O1xcblxcbn1cXG5cXG5ib2R5LmFjdGl2ZS1mb3Jte1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5ib2R5LmFjdGl2ZS1mb3JtIC5tYWlue1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA4KTtcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDBtcyBlYXNlLWluLW91dCAwbXM7XFxufVxcblxcbmJvZHkuYWN0aXZlLWZvcm0gLmZvcm17XFxuICAgIHRvcDogNTAlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwbXMgZWFzZS1pbi1vdXQgMG1zLCBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0LCBtYXJnaW4tdG9wIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZm9ybS1pdGVtc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyLyAxZnIgMWZyO1xcbiAgICBnYXA6MjRweFxcbiAgICBcXG59XFxuXFxuLmZvcm0taXRlbTpudGgtY2hpbGQoMSl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OjEvMjtcXG59XFxuLmZvcm0taXRlbTpudGgtY2hpbGQoMyl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcbi5mb3JtLWl0ZW06bnRoLWNoaWxkKDQpe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG4uZm9ybS1pdGVtOm50aC1jaGlsZCgyKXtcXG4gICAgZ3JpZC1yb3c6IDEvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLmZvcm0taXRlbXMgLmFkZC10b2RvLWJ0bi1jb250YWluZXJ7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG5cXG4gICAgXFxufVxcbiNhZGQtdG9kby1idG57XFxuICAgIHBhZGRpbmc6IDE2cHggMzJweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLmZvcm0taXRlbT4qe1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaW5wdXQsc2VsZWN0LHRleHRhcmVhe1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBtYXJnaW46IDhweCAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXctaXRlbS1iYWNrZ3JvdW5kKTtcXG4gICAgXFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG91dGxpbmU6bm9uZVxcbn1cXG5cXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1c3tcXG4gICBvdXRsaW5lOiAgMnB4IHNvbGlkIHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmZvcm0gaDN7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxufVxcblxcbnRleHRhcmVhe1xcbiAgICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxubGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG5cXG4uc2F2ZS1wcm9qZWN0e1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG4uc2F2ZS1wcm9qZWN0LmFjdGl2ZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcblxcbi5pdGVtLmZhbGx7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yaWdodC1wcm9qZWN0LXBhbmVse1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxufVxcblxcbmxpOmhvdmVyIC5yaWdodC1wcm9qZWN0LXBhbmVse1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHVDQUF1QztJQUN2QyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7O0FBRWxCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLDJCQUEyQjs7QUFFL0I7O0FBRUE7O0lBRUksWUFBWTtJQUNaLDBDQUEwQztJQUMxQywwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsa0JBQWtCOzs7O0FBSXRCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLFNBQVM7Ozs7O0FBS2I7QUFDQTtJQUNJLGFB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SUFDYix1Q0FBdUM7SUFDdkM7O0FBRUo7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7OztBQUkzQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7Ozs7O0FBT0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0NBQXNDOztJQUV0QyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7R0FDRyw0Q0FBNEM7QUFDL0M7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0kseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDB8Um9ib3RvOjEwMCwzMDAsNDAwXFxcIik7XFxuXFxuKiwqOjphZnRlciwqOjpiZWZvcmV7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQ6IzAzNjlhMTtcXG4gICAgLS1oZWFkZXItY29sb3I6I2VjZmVmZjtcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91ZDojZWNmZWZmO1xcbiAgICAtLXNpZGViYXItY29sb3I6ICMzNzQxNTE7XFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kOndoaXRlO1xcbiAgICAtLWl0ZW0tYmFja2dyb3VuZDogI2VjZmVmZjtcXG4gICAgLS1pdGVtLWNvbG9yOiM1MjUyNWI7XFxuICAgIC0tYnV0dG9uLWJhY2tncm91bjogIzBlYTVlOTtcXG4gICAgLS1idXR0b24tY29sb3I6I2YwZjlmZjtcXG4gICAgLS1pY29uLWNvbG9yOiMzMzQxNTU7XFxuICAgIC0tc2lkZWJhci1pdGVtLWhvdmVyLWJhY2tncm91bmQ6IzAzNjlhMTtcXG4gICAgLS1zaWRlYmFyLWl0ZW0taG92ZXItY29sb3I6I2NmZmFmZTtcXG4gICAgLS1yZWQtY29kZTojZjg3MTcxO1xcbiAgICAtLW9yYW5nZS1jb2RlOiNmZGJhNzQ7XFxuICAgIC0tZ3JlZW4tY29kZTojYTNlNjM1O1xcbiAgICAtLW5ldy1pdGVtLWJhY2tncm91bmQ6ICNiYWU2ZmQ7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb25zZXJyYXQnLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTIwcHggOGZyLyAxZnIgNGZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIFxcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIFxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKSA7XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgXFxuICAgIHBhZGRpbmc6MzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdWQpO1xcbiAgICBjb2xvcjp2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcblxcblxcbn1cXG5cXG4uaXRlbS1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZCk7XFxuICAgIGdhcDogMTZweDtcXG5cXG5cXG5cXG5cXG59XFxuLm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMG1zIGVhc2UtaW4tb3V0IDBtcztcXG59XFxuXFxuLml0ZW17XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMCA4cHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taXRlbS1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6dmFyKC0taXRlbS1jb2xvcilcXG59XFxuXFxuLml0ZW0tbmFtZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MTZweDtcXG59XFxuXFxuLml0ZW0taW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLml0ZW0uaGlnaHtcXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1yZWQtY29kZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgXFxufVxcblxcbi5pdGVtLm1lZGl1bXtcXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1vcmFuZ2UtY29kZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgXFxufVxcblxcbi5pdGVtLmxvd3tcXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1ncmVlbi1jb2RlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWJhY2tncm91bik7XFxuICAgIGNvbG9yOnZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG59XFxuXFxuXFxuLyogYnV0dG9uOmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgY29sb3I6dmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbn0gKi9cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggMHB4IHJnYmEoMTU1LCAxOTAsIDIwNywgMC42Mik7XFxufVxcblxcbi5pdGVtLWluZm8gcHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5pdGVtLWluZm8gaXtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmEtcGVuLXRvLXNxdWFyZXtcXG4gICAgY29sb3I6dmFyKC0taWNvbi1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLmZhLXBlbi10by1zcXVhcmU6aG92ZXJ7XFxuICAgIGNvbG9yOnZhcigtLWJ1dHRvbi1iYWNrZ3JvdW4pXFxufVxcblxcbi5mYS1wZW4tdG8tc3F1YXJlOmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLmZhLXRyYXNoLWNhbntcXG4gICAgY29sb3I6dmFyKC0taWNvbi1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG5cXG59XFxuLmZhLXRyYXNoLWNhbjpob3ZlcntcXG4gICAgY29sb3I6dmFyKC0tYnV0dG9uLWJhY2tncm91bilcXG59XFxuXFxuLyogLmZhLXRyYXNoLWNhbjphY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufSAqL1xcblxcbi5wcm9qZWN0cyBoM3tcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IFxcbn1cXG5cXG4ucHJvamVjdHMgdWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyBcXG59XFxuXFxuLnByb2plY3RzIGxpe1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxufVxcblxcbi5zaWRlYmFyPmgzOmhvdmVyLC5wcm9qZWN0cz5oMzpob3ZlciwgLnByb2plY3RzIGxpOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWl0ZW0taG92ZXItYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWl0ZW0taG92ZXItY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzowcHggMTJweDtcXG5cXG59XFxuXFxuLnNpZGViYXI+aDM6YWN0aXZlLC5wcm9qZWN0cz5oMzphY3RpdmUsIC5wcm9qZWN0cyBsaTphY3RpdmV7XFxudHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDE4MHB4O1xcbiAgICBsZWZ0OiAxMjBweDtcXG5cXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMnB4IHJnYmEoMTU1LCAxOTAsIDIwNywgMC42Mik7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyBcXG4gICAgXFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuOmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLm5ldy1pdGVte1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXctaXRlbS1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6dmFyKC0taXRlbS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OjZweCBzb2xpZCB2YXIoLS1pdGVtLWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwIDE2cHg7XFxuXFxufVxcbi5uZXctaXRlbTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOnZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIFxcbn1cXG5cXG4ubmV3LWl0ZW06YWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4uZm9ybXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgICBtYXgtd2lkdGg6NjUwcHg7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XFxuICAgIG1hcmdpbi10b3A6IC0yNHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMG1zIGVhc2UtaW4tb3V0IDBtcywgb3BhY2l0eSAzMDBtIGVhc2UtaW4tb3V0LCBtYXJnaW4tdG9wIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0taXRlbS1jb2xvcik7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uZm9ybT4qe1xcbiAgICBtYXJnaW46IDE2cHggMHB4O1xcbn1cXG5cXG4uZm9ybSAjY2xvc2UtYnRue1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOjBweDtcXG4gICAgcmlnaHQ6MTBweDtcXG5cXG59XFxuXFxuYm9keS5hY3RpdmUtZm9ybXtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYm9keS5hY3RpdmUtZm9ybSAubWFpbntcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wOCk7XFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcbn1cXG5cXG5ib2R5LmFjdGl2ZS1mb3JtIC5mb3Jte1xcbiAgICB0b3A6IDUwJTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMG1zIGVhc2UtaW4tb3V0IDBtcywgb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCwgbWFyZ2luLXRvcCAzMDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmZvcm0taXRlbXN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIDFmci8gMWZyIDFmcjtcXG4gICAgZ2FwOjI0cHhcXG4gICAgXFxufVxcblxcbi5mb3JtLWl0ZW06bnRoLWNoaWxkKDEpe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzoxLzI7XFxufVxcbi5mb3JtLWl0ZW06bnRoLWNoaWxkKDMpe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG4uZm9ybS1pdGVtOm50aC1jaGlsZCg0KXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuLmZvcm0taXRlbTpudGgtY2hpbGQoMil7XFxuICAgIGdyaWQtcm93OiAxLzQ7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5mb3JtLWl0ZW1zIC5hZGQtdG9kby1idG4tY29udGFpbmVye1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxuXFxuICAgIFxcbn1cXG4jYWRkLXRvZG8tYnRue1xcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XFxufVxcblxcblxcblxcblxcblxcblxcbi5mb3JtLWl0ZW0+KntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmlucHV0LHNlbGVjdCx0ZXh0YXJlYXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbmV3LWl0ZW0tYmFja2dyb3VuZCk7XFxuICAgIFxcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvdXRsaW5lOm5vbmVcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cywgdGV4dGFyZWE6Zm9jdXN7XFxuICAgb3V0bGluZTogIDJweCBzb2xpZCB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5mb3JtIGgze1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbn1cXG5cXG50ZXh0YXJlYXtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbmxhYmVse1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuXFxuLnNhdmUtcHJvamVjdHtcXG4gICAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuLnNhdmUtcHJvamVjdC5hY3RpdmV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5cXG4uaXRlbS5mYWxse1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmlnaHQtcHJvamVjdC1wYW5lbHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcbn1cXG5cXG5saTpob3ZlciAucmlnaHQtcHJvamVjdC1wYW5lbHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJ0b2RvTG9nbyIsIlVzZXJJbnRlcmZhY2UiLCJUYXNrIiwic2F2ZVRhc2tUb0xvY2FsU3RvcmFnZSIsImdldFRhc2tzIiwicmVtb3ZlVGFzayIsInRvZG9JbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwiaG9tZUJ0biIsInByb2plY3RzQnRuIiwicXVlcnlTZWxlY3RvciIsInJlbmRlckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlRm9ybSIsImFkZFRvZG9CdG4iLCJjcmVhdGVUYXNrSXRlbSIsInJlc2V0Rm9ybSIsImZpbHRlckNhdGVnb3J5IiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInJlbW92ZVRvZG8iLCJlZGl0VG9kbyIsImFkZFByb2plY3QiLCJyZW5kZXJQcm9qZWN0c0hUTUwiLCJzZXRBY3RpdmVDYXRlZ29yeSIsInJlbW92ZVByb2plY3QiLCJ0aXRsZVZhbHVlIiwidmFsdWUiLCJkYXRlVmFsdWUiLCJwcmlvcml0eVZhbHVlIiwiZGVzY3JpcHRvblZhbHVlIiwiYWN0aXZlQ2F0ZWdvcnkiLCJ0YXNrIiwidHJhc2hDYW4iLCJnZXRUb2RvSXRlbSIsInJlbW92ZVRhc2tGcm9tU3RvcmFnZSIsInVwZGF0ZVRvZG9JdGVtIiwic2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZSIsImdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSIsImRlbGV0ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlIiwidHJhc2hDYW5JY29uIiwicXVlcnlTZWxlY3RvckFsbCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInRhc2tMaXN0IiwiaXRlbUNvbnRhaW5lciIsImlubmVySFRNTCIsImRpc3BsYXlEYXRhIiwibWFwIiwiZWxlbWVudCIsImNvbmNhdCIsImlkIiwicHJpb3JpdHkiLCJ0aXRsZSIsImR1ZURhdGUiLCJqb2luIiwiZGVsZXRlQnRucyIsImZvckVhY2giLCJkZWxldGVCdG4iLCJlIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJfdGhpcyIsImVkaXRCdG5zIiwiYnRuIiwiaXRlbUlkIiwiZWRpdEZvcm0iLCJpdGVtIiwic2F2ZUJ0biIsInJlbmRlckl0ZW1IVE1MIiwidG9nZ2xlIiwiZGF0ZSIsIl90aGlzMiIsInN1YlByb2plY3RCdG5zIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiLCJ0YXNrcyIsImFjdGl2ZUNhdGVnb3J5TGlzdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ4IiwiY2F0ZWdvcnkiLCJwdXNoIiwiYWRkUHJvamVjdEJ0biIsInNhdmVQcm9qZWN0Rm9ybSIsInNhdmVQcm9qZWN0QnRuIiwicHJvamVjdCIsInByb2plY3RzIiwicHJvamVjdENvbnRhaW5lciIsInByb2plY3RIVE1MIiwiZGVsZXRlUHJvamVjdEJ0bnMiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJfZGVmaW5lUHJvcGVydHkiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibXlJZCIsInNwbGljZSIsImluZGV4T2YiLCJkZXNjcmlwdG9uIiwiY2hlY2tlZCIsIkRhdGUiLCJnZXRUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==