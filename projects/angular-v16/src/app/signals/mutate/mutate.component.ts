import { NgClass, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, inject, signal } from '@angular/core';

export interface ToDo {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  #http = inject(HttpClient);

  #url = 'https://jsonplaceholder.typicode.com/todos';

  loadToDos() {
    return this.#http.get<ToDo[]>(this.#url);
  }
}

@Component({
  selector: 'app-mutate',
  template: `
    <div class="m-5">
      <ul class="list-group">
        <li
          class="list-group-item pointer"
          [ngClass]="
            task.completed ? 'text-decoration-line-through' : 'text-primary'
          "
          *ngFor="let task of tasks()"
          (click)="toggleComplete(task.id)"
        >
          {{ task.title }}
        </li>
      </ul>
    </div>
  `,
  imports: [NgFor, NgClass],
  standalone: true,
})
export class MutateComponent {
  tasks = signal<Array<ToDo>>([]);

  constructor() {
    inject(ToDoService)
      .loadToDos()
      .subscribe((tasks) => this.tasks.set(tasks));
  }

  toggleComplete(id: ToDo['id']) {
    this.tasks.mutate((tasks) => {
      tasks.map((task) => {
        if (task.id === id) task.completed = !task.completed;
        return task;
      });
    });
  }
}
