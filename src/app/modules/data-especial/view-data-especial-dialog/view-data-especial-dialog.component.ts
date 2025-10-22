import { Data_Especial_CabModel } from 'src/app/models/data_especial_cab-model';
import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { GlobalService } from 'src/app/services/global.service';
import { messageError } from 'src/app/shared/classes/util';
import { ParametroData_Especial_Det01 } from 'src/app/parametros/parametro-data_especial_det01';
import { Data_Especial_DetService } from 'src/app/services/data_especial_det.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ViewDataEspecialData } from './view-data-especial-data';
import { ProjetosService } from 'src/app/services/projetos.service';
import { Data_Especial_DetModel } from 'src/app/models/data_especial_det-model';

@Component({
  selector: 'app-view-data-especial-dialog',
  templateUrl: './view-data-especial-dialog.component.html',
  styleUrls: ['./view-data-especial-dialog.component.css']
})
export class ViewDataEspecialDialogComponent implements OnInit {


      inscricaoDataEspecial!: Subscription;

      data_Especial_CabModel:Data_Especial_CabModel[] = [];

      especiais: Data_Especial_DetModel[] = [];

      tamPagina = 50;

      controlePaginas: ControlePaginas = new ControlePaginas(this.tamPagina, 0);

      labelCadastro:string = "";


  constructor(
              public dialogRef: MatDialogRef<ViewDataEspecialDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:ViewDataEspecialData ,
              private globalService: GlobalService,
              private appSnackBar: AppSnackbar,
              private projetosService:ProjetosService,
              private data_Especial_DetService:Data_Especial_DetService
  ) {
    this.labelCadastro = `Auditor: ${data.razao_usuario}`
   }

  ngOnInit(): void {
    this.getDataEspecialContador();
  }


  ngOnDestroy(): void {
    this.inscricaoDataEspecial?.unsubscribe();
  }


   getDataEspecial() {

      let par = new ParametroData_Especial_Det01()

      par.id_empresa = this.globalService.getIdEmpresa();

      par.id_usuario = this.data.id_usuario;

      par.dt_inicial = this.data.especial.dt_inicial;

      par.dt_final = this.data.especial.dt_final;

      par.contador = 'N';

      par.tamPagina = this.tamPagina;

      par.pagina = this.controlePaginas.getPaginalAtual();

      this.globalService.setSpin(true);

      this.inscricaoDataEspecial = this.data_Especial_DetService.getDatas_Especiais_DetParametro_01(par)
        .subscribe(
        (data: Data_Especial_DetModel[]) => {
          this.globalService.setSpin(false);
          this.especiais = data;
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.especiais = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Feriados ${messageError(error)}`,
            'OK'
          );
        }
      );
    }

   getDataEspecialContador() {

      let par = new ParametroData_Especial_Det01();

      par.id_empresa = this.globalService.getIdEmpresa();

      par.id_usuario = this.data.id_usuario;

      par.dt_inicial = this.data.especial.dt_inicial;

      par.dt_final = this.data.especial.dt_final;

      par.contador = 'S';

      par.tamPagina = this.tamPagina;

      par.pagina = this.controlePaginas.getPaginalAtual();

      this.globalService.setSpin(true);

      this.globalService.setSpin(true);
      this.inscricaoDataEspecial = this.data_Especial_DetService.getDatas_Especiais_DetParametro_01(par)
       .subscribe(
        (data: any) => {
          this.globalService.setSpin(false);
          this.controlePaginas = new ControlePaginas(
            this.tamPagina,
            data.total == 0 ? 1 : data.total
          );
          this.getDataEspecial();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.controlePaginas = new ControlePaginas(this.tamPagina, 0);
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Datas Especiais ${messageError(error)}`,
            'OK'
          );
        }
      );
    }

    onChangePage(){
      this.getDataEspecial();
    }



  closeModal() {
    this.dialogRef.close();
  }
}
