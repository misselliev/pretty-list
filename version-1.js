/*Fullfiling requirements with just Arrays

Requirements:
* It should have a place to store todos
* It  should have a place to display todos
* It should have a way to add todos
* It should have a way to change todos
* It should have a way to delete todos

*/

//Storing
var todos=['item 1', 'item 2', 'item 3']

//Displaying
console.log("My to-dos:", todos)

//Adding
todos.push('item 4')
todos.push('item 5')

//Changing
todos[0] = 'item 1 updated'
todos[1]= 'item 2 updated'

//Deleting
todos.splice(0,1) //Deletes first item 
todos.splice(3,1) //Deletes last item
