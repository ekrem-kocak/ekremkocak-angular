import { Component, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-untracked',
  template: `
    <div class="d-flex flex-column align-items-center">
      <h1>Count : {{ count() }}</h1>
      <div class="d-flex gap-2">
        <button class="btn btn-warning" (click)="decrement()">decrement</button>
        <button class="btn btn-danger" (click)="reset()">reset</button>
        <button class="btn btn-primary" (click)="increment()">increment</button>
      </div>

      <div class="input-group mt-3">
        <input type="text" #input class="form-control" [value]="username()" />
        <button
          class="btn btn-outline-secondary"
          type="button"
          (click)="username.set(input.value)"
        >
          Set Username
        </button>
      </div>
    </div>
  `,
  styles: [``],
  standalone: true,
})
export class UntrackedComponent {
  count = signal(0);
  username = signal('ekrem kocak');

  constructor() {
    effect(() => {
      const count = this.count();
      const username = untracked(() => this.username());

      console.log(`count : ${count} - username : ${username}`);
    });
  }

  reset(): void {
    this.count.set(0);
  }

  increment(): void {
    this.count.update((val) => val + 1);
  }

  decrement(): void {
    this.count.update((val) => val - 1);
  }
}
