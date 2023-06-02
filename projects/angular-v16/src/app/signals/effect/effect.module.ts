import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EFFECT_ROUTES } from './effect.routes';
import { BasicEffectComponent } from './basic-effect/basic-effect.component';
import { EffectComponent } from './effect.component';

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
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EffectModule {}
