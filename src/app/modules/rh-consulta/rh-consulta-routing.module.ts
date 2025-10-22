import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RhConsultaLanc01loadComponent } from './rh-consulta-lanc01load/rh-consulta-lanc01load.component';

const routes: Routes = [
  { path: '', redirectTo: 'consultaaponrh', pathMatch: 'full' },
  { path: 'consultaaponrh', component: RhConsultaLanc01loadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhConsultaRoutingModule { }
