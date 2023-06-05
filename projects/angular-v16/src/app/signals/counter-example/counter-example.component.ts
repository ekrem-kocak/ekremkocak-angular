import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter-example',
  template: `
    <div class="d-flex flex-column align-items-center">
      <h1>Counter : {{ count() }}</h1>
      <h1>is even : {{ isEven() }}</h1>
      <div class="d-flex gap-2">
        <button class="btn btn-secondary" (click)="reset()">Reset</button>
        <button class="btn btn-secondary" (click)="increment(3)">
          increment 1
        </button>
        <button class="btn btn-secondary" (click)="increment(5)">
          increment 2
        </button>
      </div>
    </div>
  `,
  standalone: true,
})
export class CounterExampleComponent {
  count = signal(100);
  isEven = computed(() => this.count() % 2 === 0);

  constructor() {
    effect(() => {
      console.warn('isEven => ', this.isEven());
    });

    effect(() => {
      this.count();
      console.warn('isEven => ', this.isEven());
    });
  }

  increment(n: number): void {
    for (let i = 0; i < n; i++) {
      this.count.update((val) => val + i);
    }
  }

  reset(): void {
    this.count.set(100);
    this.count.set(100);
    this.count.set(100);
  }
}
