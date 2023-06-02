import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ComputedComponent } from './computed/computed.component';
import { SIGNALS_ROUTES } from './signals.routes';
import { Signal1Component } from './signal1/signal1.component';
import { SignalsComponent } from './signals.component';
import { UntrackedComponent } from './untracked/untracked.component';
import { IsEqualComponent } from './is-equal/is-equal.component';

const routes: Route[] = [
  {
    path: '',
    component: SignalsComponent,
    children: [
      { path: SIGNALS_ROUTES.SIGNAL1.routerLink, component: Signal1Component },
      {
        path: SIGNALS_ROUTES.COMPUTED.routerLink,
        component: ComputedComponent,
      },
      {
        path: SIGNALS_ROUTES.Effect.routerLink,
        loadChildren: () =>
          import('./effect/effect.module').then((m) => m.EffectModule),
      },
      {
        path: SIGNALS_ROUTES.Untracked.routerLink,
        component: UntrackedComponent,
      },
      {
        path: SIGNALS_ROUTES.IS_EQUAL.routerLink,
        component: IsEqualComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [SignalsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SignalsModule {}
