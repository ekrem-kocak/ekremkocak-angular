import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EFFECT_ROUTES } from './effect.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-effect',
  template: `
    <ul class="nav nav-pills justify-content-center mb-3">
      <li class="nav-item" *ngFor="let route of routes">
        <a
          class="nav-link"
          routerLinkActive="active"
          [routerLink]="route.routerLink"
          >{{ route.name }}</a
        >
      </li>
    </ul>
    <router-outlet> </router-outlet>
  `,
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class EffectComponent {
  routes: { name: string; routerLink: string }[];

  constructor() {
    this.routes = Object.values(EFFECT_ROUTES);
  }
}
