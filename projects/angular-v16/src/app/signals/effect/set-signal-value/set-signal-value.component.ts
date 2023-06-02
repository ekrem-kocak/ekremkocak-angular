import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-set-signal-value',
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
export class SetSignalValueComponent {
  count = signal(0);
  isBig = signal(false);

  // best practice
  _isBig = computed(() => {
    this.count() > 10 ? true : false;
  });

  constructor() {
    // not recommended
    effect(
      () => {
        if (this.count() > 10) {
          this.isBig.set(true);
        } else {
          this.isBig.set(false);
        }
      },
      { allowSignalWrites: true }
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
