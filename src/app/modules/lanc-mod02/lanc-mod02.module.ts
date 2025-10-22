import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancMod02RoutingModule } from './lanc-mod02-routing.module';
import { LacamentoMod02Component } from './lacamento-mod02/lacamento-mod02.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LacamentoMod02Component
  ],
  imports: [
    CommonModule,
    LancMod02RoutingModule,
    MaterialModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ]
})
export class LancMod02Module { }
