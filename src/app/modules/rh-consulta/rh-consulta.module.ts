import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RhConsultaRoutingModule } from './rh-consulta-routing.module';
import { RhConsultaLanc01loadComponent } from './rh-consulta-lanc01load/rh-consulta-lanc01load.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RhConsultaLanc01loadComponent
  ],
  imports: [
    CommonModule,
    RhConsultaRoutingModule,
    MaterialModule,
    FormsModule,
    ScrollingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class RhConsultaModule { }
