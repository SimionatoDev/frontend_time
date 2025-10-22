import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RhFileRoutingModule } from './rh-file-routing.module';
import { RhFileLoadComponent } from './rh-file-load/rh-file-load.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    RhFileLoadComponent
  ],
  imports: [
    CommonModule,
    RhFileRoutingModule,
        MaterialModule,
        FormsModule,
        ScrollingModule,
        ReactiveFormsModule,
        SharedModule,
        NgxMaskModule.forChild()
  ]
})
export class RhFileModule { }
