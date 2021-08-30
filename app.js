 // Selector
 const todoInput = document.querySelector(".todo-input");
 const todoButton = document.querySelector(".todo-button");
 const todoList = document.querySelector(".todo-list");
 const today = document.querySelector("#today");

 //set today
 var date = new Date();
 var y = date.getFullYear();
 var m = date.getMonth() + 1;
 var d = date.getDate();
 today.innerHTML = d + "/" + m + "/" + y;

 //Event Listener
 todoButton.addEventListener('click', addTodo);
 todoList.addEventListener('click', deleteCheck);


 //Function

 function addTodo(event) {
     //prevent form from submitting
     event.preventDefault();
     //todo DIV
     const todoDiv = document.createElement('div');
     todoDiv.classList.add("todo"); //class="todo"
     //creat LI
     const newTodo = document.createElement('li');
     newTodo.innerText = todoInput.value;
     newTodo.classList.add('todo-item'); //class="todo-item"
     todoDiv.appendChild(newTodo);
     //Check button
     const completedButton = document.createElement('button');
     completedButton.innerHTML = '<i class="fas fa-check" ></i>';
     completedButton.classList.add("complete-btn");
     todoDiv.appendChild(completedButton);
     //Delete button
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
     //APPEND TO LIST
     todoList.appendChild(todoDiv);

     //Clear INPUT VALUE
     todoInput.value = "";
 }

 function deleteCheck(e) {
     //define item want delete amazing
     console.log(e.target);
     const item = e.target;
     //DELETE TODO
     if ((item.classList[0] === 'trash-btn') ||
         (item.classList[1] === 'fa-trash')) {
         console.log('delete todo');
         const todo = item.parentElement;
         todo.remove();
     }

     //check MARK
     if ((item.classList[0] === 'complete-btn') ||
         (item.classList[1] === 'fa-check')) {
         console.log('complete todo');
         const todo = item.parentElement;
         todo.classList.toggle("completed");
     }
 }