/*Fullfiling requirements with objects

* It should store the todos in an object
* It should have a function to display todos
* It should have a function to add todos
* It should have a function to change todos
* It should have a function to delete todos

*/
var todolist= {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function(){
  console.log('My Todos', this.todos)
  },
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo(position){
    this.todo.splice(position, 1);
    this.displayTodos();
  }
};

