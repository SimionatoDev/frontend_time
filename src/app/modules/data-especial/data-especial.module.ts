import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataEspecialRoutingModule } from './data-especial-routing.module';
import { CrudEspecialComponent } from './crud-especial/crud-especial.component';
import { EspecialViewComponent } from './especial-view/especial-view.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { CrudDataEspecialDialogComponent } from './crud-data-especial-dialog/crud-data-especial-dialog.component';
import { ViewDataEspecialDialogComponent } from './view-data-especial-dialog/view-data-especial-dialog.component';

@NgModule({
  declarations: [CrudEspecialComponent, EspecialViewComponent, CrudDataEspecialDialogComponent, ViewDataEspecialDialogComponent],
  imports: [
    CommonModule,
    DataEspecialRoutingModule,
    MaterialModule,
    FormsModule,
    ScrollingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ],
})
export class DataEspecialModule {}
