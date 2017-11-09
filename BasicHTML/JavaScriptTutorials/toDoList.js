var todoList = [];
var input = prompt("What would you like to do?");

while(input !== "quit") {

    if(input === "list") {
       listTodos();

    } else if(input === "new") {

        addTodo();

    } else if(input === "delete") {
        deleteTodo();   
    }

    input = prompt("What would you like to do?");
}

console.log("You have finished adding to the list");

function listTodos() {
    console.log('************');
    todoList.forEach(function(todo, index) {
        console.log(`${index} : ${todo}`);
    });
    console.log('************');
}

function addTodo() {
    var newTodo = prompt("Enter new todo");
    todoList.push(newTodo);
}

function deleteTodo() {
    var index = prompt("Enter of index of todo to delete");
    todoList.splice(index, 1);
    console.log("Deleted Todo");
}