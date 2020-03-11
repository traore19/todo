import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  todos =[
    {
   label : 'Do sport',
   priority : 1,
   done :false
 },
 {
   label: 'Do homework',
   priority:1,
   done: true,
 },
];

addTodo(newTodoLabel) {

 var newTodo = {

   label: newTodoLabel,
   priority:2,
   done:false,
 }
 
 if (newTodoLabel) 
 this.todos.push(newTodo);
}

deleteTodo(todo) {
 this.todos = this.todos.filter( t => t.label !== todo.label )
}
}
