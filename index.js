let todoItemsContainerEle = document.getElementById("todoItemsContainer")
let completedTodosContainerEl = document.getElementById("completedTodosContainer")
let addTodoButtonEle = document.getElementById("addTodoButton")


let todosCount = Math.floor(Math.random() * 100)

function onAddTodo(){
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount,
    }
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

addTodoButtonEle.onclick = function() {
    onAddTodo();
};


function onDeleteTodo(todoId,hrId) {
    let todoElement = document.getElementById(todoId);
    let horizontalLine = document.getElementById(hrId)
    todoItemsContainerEle.removeChild(todoElement);
    todoItemsContainerEle.removeChild(horizontalLine)
}

function onDeleteCompleteTodo(todoId,hrId){
    let todoElement = document.getElementById(todoId);
    let horizontalLine = document.getElementById(hrId)
    completedTodosContainerEl.removeChild(todoElement);
    completedTodosContainerEl.removeChild(horizontalLine)
}

function onCompleteTodo(todoId,hrId,labelId) {
    let todoElement = document.getElementById(todoId);
    let labelEl = document.getElementById(labelId)
    let todoValue = labelEl.textContent
    let horizontalLine = document.getElementById(hrId)
    todoItemsContainerEle.removeChild(todoElement);
    todoItemsContainerEle.removeChild(horizontalLine)

    let completeTodo = document.createElement("li")
    completeTodo.classList.add("tasks")
    completeTodo.id = todoId
    completedTodosContainerEl.appendChild(completeTodo)

    let labelElement = document.createElement("label");
    labelElement.classList.add("complete-task-name");
    labelElement.textContent = todoValue;
    completeTodo.appendChild(labelElement);

    let deleteButtonElement=document.createElement("button")
    deleteButtonElement.classList.add("delete-button")
    deleteButtonElement.textContent ="Delete"
    completeTodo.appendChild(deleteButtonElement);

    let hrLine = document.createElement("hr")
    hrLine.id = hrId
    hrLine.classList.add("hr-line")
    completedTodosContainerEl.appendChild(hrLine)

    deleteButtonElement.onclick = function() {
        onDeleteCompleteTodo(todoId,hrId);
    };

}


function createAndAppendTodo(todo) {

    let todoId = "todo" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo
    let hrId = "hr" + todo.uniqueNo

    let todoElement = document.createElement("li");
    todoElement.classList.add("tasks");
    todoElement.id = todoId;
    todoItemsContainerEle.appendChild(todoElement);

    // let labelContainer = document.createElement("div");
    // todoElement.appendChild(labelContainer);

    // let inputElement = document.createElement("input");
    // inputElement.type = "checkbox";
    // inputElement.id = checkboxId;
    // inputElement.checked = todo.isChecked;
    // inputElement.classList.add("task-checkbox")
    // todoElement.appendChild(inputElement);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("task-name");
    labelElement.textContent = todo.text;
    todoElement.appendChild(labelElement);

    let buttonContainerEl = document.createElement("div")
    buttonContainerEl.classList.add("button-container")
    todoElement.appendChild(buttonContainerEl)

    let deleteButtonElement=document.createElement("button")
    deleteButtonElement.classList.add("delete-button")
    deleteButtonElement.textContent ="Delete"
    buttonContainerEl.appendChild(deleteButtonElement);
    
    let completeButtonElement=document.createElement("button")
    completeButtonElement.classList.add("complete-button")
    completeButtonElement.textContent ="Complete"
    buttonContainerEl.appendChild(completeButtonElement);

    let horizontalLine = document.createElement("hr")
    horizontalLine.id = hrId
    horizontalLine.classList.add("hr-line")
    todoItemsContainerEle.appendChild(horizontalLine)

    

    deleteButtonElement.onclick = function() {
        onDeleteTodo(todoId,hrId);
    };

    completeButtonElement.onclick = function() {
        onCompleteTodo(todoId,hrId,labelId);
    };
   
}
    
// function completedTodo(todoElement,todo){
   
//     let todoId = todo;
  

//     let comTodoElement = document.createElement("li");
//     comTodoElement.classList.add("tasks");
//     comTodoElement.id = todoId;
//     completedTodosContainerEl.appendChild(comTodoElement);

//     let labelElement = document.createElement("label");
   
//     labelElement.classList.add("task-name");
//     labelElement.textContent = todoElement.text;
//     todoElement.appendChild(labelElement);
// }