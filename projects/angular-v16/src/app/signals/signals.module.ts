import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ComputedComponent } from './computed/computed.component';
import { ROUTE_CONFIG } from './route-config';
import { Signal1Component } from './signal1/signal1.component';
import { SignalsComponent } from './signals.component';

const routes: Route[] = [
  {
    path: '',
    component: SignalsComponent,
    children: [
      { path: ROUTE_CONFIG.SIGNAL1.routerLink, component: Signal1Component },
      { path: ROUTE_CONFIG.COMPUTED.routerLink, component: ComputedComponent },
    ],
  },
];

@NgModule({
  declarations: [SignalsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SignalsModule {}
