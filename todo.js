const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let todos = [];
function displayTodos() {
  console.log("\n Your Todo List: \n");
  if (todos.length === 0) {
    console.log("No task yet! Add something");
  } else
    todos.forEach((todos, index) => {
      console.log(`${index + 1}. ${todos}`);
    });
}

function addTodo() {
  readline.question("Entre your task here:", (task) => {
    todos.push(task);
    console.log("Task added !");
    displayTodos();
    askForFunction();
  });
}

function removeTodo() {
  displayTodos();
  readline.question(
    "Enter the number of the task you want to remove: ",
    (index) => {
      const taskIndex = parseInt(index) - 1;
      if (taskIndex < 0 && taskIndex >= todos.length) {
        todos.splice(taskIndex, 1);
        console.log("Task removed!");
      } else {
        console.log("Invalid task number!");
      }
      displayTodos();
      askForFunction();
    }
  );
}

function askForFunction() {
  readline.question(
    "\n What would you like to do ? (add, remove, display, quit) : ",
    (action) => {
      switch (action) {
        case "add":
          addTodo();
          break;
        case "remove":
          removeTodo();
          break;
        case "list":
          displayTodos();
          askForFunction();
          break;
        case "quit":
          console.log("Thankyou!");
          readline.close();
          break;
        default:
          console.log("Invalid action ! Please try again...");
          askForFunction();
          break;
      }
    }
  );
}
console.log("welcome to yout ToDo Application!");
askForFunction();
