import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
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
export class BasicEffectComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.warn(`count changed to ${this.count()}`);
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
