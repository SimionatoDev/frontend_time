import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LacamentoMod02Component } from './lacamento-mod02/lacamento-mod02.component';
const routes: Routes = [
  { path: '', redirectTo: 'exec_mod02', pathMatch: 'full' },
  { path: 'exec_mod02', component: LacamentoMod02Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancMod02RoutingModule { }
