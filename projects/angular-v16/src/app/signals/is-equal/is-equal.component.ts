import { JsonPipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-is-equal',
  template: `
    <h3>{{ username() | json }}</h3>

    <div class="d-flex flex-column align-items-center">
      <div class="input-group mt-3">
        <input
          type="text"
          #input
          class="form-control"
          [value]="username().name"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          (click)="change(input.value)"
        >
          Set Username
        </button>
      </div>
    </div>
  `,
  styles: [``],
  standalone: true,
  imports: [JsonPipe],
})
export class IsEqualComponent {
  // username = signal({ name: 'Ekrem' }, { equal: isEqual }); // import from Lodash
  username = signal({ name: 'Ekrem' }, { equal: (a, b) => a.name === b.name });

  constructor() {
    effect(() => {
      console.log(`Object changed => `, this.username());
    });
  }

  change(name: string) {
    this.username.set({ name });
  }
}
