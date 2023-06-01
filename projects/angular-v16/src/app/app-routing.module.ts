import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Signal1Component } from './signal1/signal1.component';

const routes: Routes = [
  {
    path: '',
    component: Signal1Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
