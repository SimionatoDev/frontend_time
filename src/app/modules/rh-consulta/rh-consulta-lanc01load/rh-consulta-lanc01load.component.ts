import { OrderBy } from './../../../shared/classes/Orderby';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ParametroModel } from 'src/app/Models/parametro-model';
import { ParametroComparativoRh } from 'src/app/parametros/parametro-comparativo-rh';
import { Apontamento_RhService } from 'src/app/services/apontamento_rh.service';
import { GlobalService } from 'src/app/services/global.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { AtualizaParametroComparativoRH } from 'src/app/shared/classes/atualiza-parametro-comparativo-rh';
import { messageError } from 'src/app/shared/classes/util';

@Component({
  selector: 'app-rh-consulta-lanc01load',
  templateUrl: './rh-consulta-lanc01load.component.html',
  styleUrls: ['./rh-consulta-lanc01load.component.css']
})
export class RhConsultaLanc01loadComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;

    inscricaoGetApontamentos!: Subscription;

    inscricaoParametro!: Subscription;

    erro: string = '';

    parametro: ParametroModel = new ParametroModel();

    hide: boolean = false;

    lancamentos: any[] = [];

  constructor(
      private aponRhService: Apontamento_RhService,
      private appSnackBar: AppSnackbar,
      private globalService: GlobalService,
      private parametrosService: ParametrosService,) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.inscricaoGetApontamentos?.unsubscribe();
    this.inscricaoParametro?.unsubscribe();
  }

  getLancamentos() {

      let par = new ParametroComparativoRh();

      par = AtualizaParametroComparativoRH(par,this.parametro.getParametro());

      par.id_empresa = this.globalService.getIdEmpresa();

      this.globalService.setSpin(true);

      this.inscricaoGetApontamentos = this.aponRhService.apontamento_comparativorhxts(par)
        .subscribe(
        (data: any) => {
          this.globalService.setSpin(false);
          this.lancamentos = data.Resultado;
          console.log(this.lancamentos);
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.lancamentos = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Apontamentos ${messageError(error)}`,
            'OK'
          );
        }
      );
    }


  onChangeParametros(param:ParametroModel) {
    this.parametro = param;
    this.getLancamentos()
  }


  onChangeHide(hide:boolean){
    this.hide = hide;
  }

  onHome() {
    //this.router.navigate(['']);
  }

  onSaveConfig() {
    //this.updateParametros();
  }


}
