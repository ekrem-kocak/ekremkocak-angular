import { Component } from '@angular/core';
import { ROUTE_CONFIG } from './route-config';

@Component({
  selector: 'app-signals',
  template: `
    <div class="container py-5">
      <div class="row">
        <div class="card">
          <div class="card-header bg-white">
            <div class="d-flex align-items-center justify-content-center">
              <h1>SIGNALS</h1>
              <img
                class="img-fluid ms-3"
                style="height: 40px;"
                src="assets/traffic-light.svg"
                alt=""
              />
            </div>
            <ul class="nav nav-pills">
              <li class="nav-item" *ngFor="let route of routes">
                <a
                  class="nav-link"
                  routerLinkActive="active"
                  [routerLinkActiveOptions]="{ exact: true }"
                  [routerLink]="route.routerLink"
                  >{{ route.name }}</a
                >
              </li>
            </ul>
          </div>
          <div class="card-body">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SignalsComponent {
  routes: { name: string; routerLink: string }[];

  constructor() {
    this.routes = Object.values(ROUTE_CONFIG);
  }
}
