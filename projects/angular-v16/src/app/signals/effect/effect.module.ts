import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EFFECT_ROUTES } from './effect.routes';
import { BasicEffectComponent } from './basic-effect/basic-effect.component';
import { EffectComponent } from './effect.component';
import { EffectCleanupComponent } from './effect-cleanup/effect-cleanup.component';
import { SetSignalValueComponent } from './set-signal-value/set-signal-value.component';

const routes: Route[] = [
  {
    path: '',
    component: EffectComponent,
    children: [
      {
        path: '',
        redirectTo: EFFECT_ROUTES.BASIC_EFFECT.routerLink,
        pathMatch: 'full',
      },
      {
        path: EFFECT_ROUTES.BASIC_EFFECT.routerLink,
        component: BasicEffectComponent,
      },
      {
        path: EFFECT_ROUTES.EFFECT_CLEANUP.routerLink,
        component: EffectCleanupComponent,
      },
      {
        path: EFFECT_ROUTES.SET_SIGNAL_VALUE.routerLink,
        component: SetSignalValueComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EffectModule {}
