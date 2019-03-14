/*Fullfiling requirements with functions

* It should have a function to display todos
* It should have a function to add todos
* It should have a function to change todos
* It should have a function to delete todos

*/

var todos=['item 1', 'item 2', 'item 3']

//Displaying
function displayTodos(){
  console.log("My to-dos:", todos);
}

//Adding and showing changes
function addTodo(todo){
  todos.push(todo);
  displayTodos();
}

//Changing values
function changeTodo(position, newValue){
  todos[position] = newValue;
  displayTodos();
}

//Deleting values
function deleteTodo(position){
  todos.splice(position,1);
  displayTodos();
}