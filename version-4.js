/*Using booleans

* todoList.addTodo should add objects
* todoList.changeTodo should change the todo text property
* todoList.toggleCompleted should change the completed property

*/
var todolist= {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function(){
  console.log('My Todos', this.todos)
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo(position){
    this.todo.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo= this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
