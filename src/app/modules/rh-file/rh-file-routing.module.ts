import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RhFileLoadComponent } from './rh-file-load/rh-file-load.component';

const routes: Routes = [
  { path: '', redirectTo: 'uploadfilerh', pathMatch: 'full' },
  { path: 'uploadfilerh', component: RhFileLoadComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhFileRoutingModule { }
