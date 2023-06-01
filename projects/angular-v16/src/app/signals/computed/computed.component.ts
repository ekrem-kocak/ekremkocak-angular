import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed',
  template: ` <div class="d-flex flex-column align-items-center">
    <h1>Count : {{ count() }}</h1>
    <h2>Double Count : {{ doubleCount() }}</h2>
    <div class="d-flex gap-2">
      <button class="btn btn-warning" (click)="decrement()">decrement</button>
      <button class="btn btn-danger" (click)="reset()">reset</button>
      <button class="btn btn-primary" (click)="increment()">increment</button>
    </div>
  </div>`,
  standalone: true,
})
export class ComputedComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

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
