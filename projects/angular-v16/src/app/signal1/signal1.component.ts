import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal1',
  template: `
    <div class="d-flex flex-column align-items-center">
      <h1>{{ count() }}</h1>
      <div class="d-flex gap-2">
        <button class="btn btn-warning" (click)="decrement()">decrement</button>
        <button class="btn btn-danger" (click)="reset()">reset</button>
        <button class="btn btn-primary" (click)="increment()">increment</button>
      </div>
    </div>
  `,
  styles: [``],
  standalone: true,
})
export class Signal1Component {
  count = signal(0);

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
