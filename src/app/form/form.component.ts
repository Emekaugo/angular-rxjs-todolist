import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../services/todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

// title will be bound to the title input of the form
title: string = '';

// use dependency injection to inject the TodosService
constructor(private todosService: TodosService) { }

ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

addTodo() {
// construct todo object and add it using the service
const todo: Todo = {
id: Date.now(),
title: this.title,
complete: false,
}
this.todosService.addTodo(todo);
}

}
