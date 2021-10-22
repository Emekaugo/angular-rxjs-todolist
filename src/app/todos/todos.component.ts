import { Component, OnInit, Input } from '@angular/core';
import { TodosService, Todo } from '../services/todos.service';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  fetchData$: Observable<boolean>;
  todos$: Observable<Todo[]>;


  // receive the limit from the parent(appcomponent) via input
  @Input() limit: number;



  constructor(private todosService: TodosService) {
    this.limit= 3;
    this.fetchData$ = this.todosService.getTodos(this.limit);
    this.todos$ = this.todosService.todos$;

   }
  // public fetchData$: Observable<boolean>;
  // public todos$: Observable<Todo[]>;



  ngOnInit() {
  // initialize the both observables
  this.fetchData$ = this.todosService.getTodos(this.limit);
  this.todos$ = this.todosService.todos$;
  }

  // call the service
  onChange(id: number) {
  this.todosService.onToggle(id);
  }

  // call the service
  removeTodo(id: number) {
  this.todosService.removeTodo(id);
  }

  today: number = Date.now();

}
