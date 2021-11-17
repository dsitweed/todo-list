// Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const today = document.querySelector("#today");
const storageKey = "todoList";
var dataString = localStorage.getItem(storageKey);
var data; //data now in local storage
//Take data from local storage
if (dataString) {
  data = JSON.parse(dataString);
} else {
    data = [];
}
//Push data
render();

//set today
var date = new Date();
var y = date.getFullYear();
var m = date.getMonth() + 1;
var d = date.getDate();
today.innerHTML = d + "/" + m + "/" + y;

//Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Function

function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo"); //class="todo"
  //creat LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item"); //class="todo-item"
  todoDiv.appendChild(newTodo);
  //Check button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check" ></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Delete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //APPEND TO LIST
  todoList.appendChild(todoDiv);
  //save in storage local
  data = data.concat(todoInput.value);
  localStorage.setItem(storageKey, JSON.stringify(data));

  //Clear INPUT VALUE
  todoInput.value = "";
}

function deleteCheck(e) {
  //define item want delete amazing
  //console.log(e.target);
  const item = e.target;
  //DELETE TODO
  if (item.classList[0] === "trash-btn") {
    console.log("delete todo");
    const todo = item.parentElement;
    const def = todo.childNodes[1];//define element li contain data text
    var deleteVal = def.innerHTML;//Text in li
    console.log(deleteVal, data.indexOf(deleteVal));
    data.splice(data.indexOf(deleteVal),1)
    console.log(data);
    localStorage.setItem(storageKey, JSON.stringify(data));
    todo.remove();
  }

  //check MARK
  if (item.classList[0] === "complete-btn") {
    console.log("complete todo");
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function render(){
   var render = document.getElementById("render");
   var content = data.map(val => {
       return (`
       <div class="todo">
        <li class="todo-item">${val}</li>
        <button class="complete-btn"><i class="fas fa-check" ></i></button>
        <button class="trash-btn"><i class="fas fa-trash" ></i></button>
        </div>`);
   })
   //console.log(content.join(''));
   //join nối lại và bỏ dấu , mặc định
   render.innerHTML = content.join('');
}