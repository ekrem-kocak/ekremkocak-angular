import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  template: ` <div class="d-flex flex-column align-items-center">
    <h1>Count : {{ count() }}</h1>
    <div class="d-flex gap-2">
      <button class="btn btn-warning" (click)="decrement()">decrement</button>
      <button class="btn btn-danger" (click)="reset()">reset</button>
      <button class="btn btn-primary" (click)="increment()">increment</button>
    </div>
  </div>`,
  standalone: true,
})
export class EffectCleanupComponent {
  count = signal(0);

  constructor() {
    effect(
      (onCleanup) => {
        // onCleanup works when signal fire or destroy
        const count = this.count();

        const timer = setTimeout(() => {
          console.log(`1 second ago, the count became ${count}`);
        }, 1000);

        onCleanup(() => {
          console.log('clean timer');
          clearTimeout(timer);
        });
      },
      { manualCleanup: true }
    );
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
