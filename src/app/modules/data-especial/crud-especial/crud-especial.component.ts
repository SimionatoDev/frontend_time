import { Data_Especial_CabService } from './../../../services/data_especial_cab.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Data_Especial_CabModel } from 'src/app/models/data_especial_cab-model';
import { FeriadoModel } from 'src/app/Models/feriado-model';
import { ParametroModel } from 'src/app/Models/parametro-model';
import { ParametroData_Especial_Cab01 } from 'src/app/parametros/parametro-data_especial_cab01';
import { ParametroParametro01 } from 'src/app/parametros/parametro-parametro01';
import { GlobalService } from 'src/app/services/global.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { AtualizaParametroDataEspecial_cab01 } from 'src/app/shared/classes/atualiza-parametro-data-especial_cab01';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { ControlePaginas } from 'src/app/shared/classes/controle-paginas';
import {
  GetValueJsonBoolean,
  GetValueJsonNumber,
  GetValueJsonString,
  GetValueJsonStringArray,
  MensagensBotoes,
  messageError,
  aaaammddddmmaaaa,
} from 'src/app/shared/classes/util';
import { DataEspecialData } from '../crud-data-especial-dialog/data-especial-data';
import { CrudDataEspecialDialogComponent } from '../crud-data-especial-dialog/crud-data-especial-dialog.component';

@Component({
  selector: 'app-crud-especial',
  templateUrl: './crud-especial.component.html',
  styleUrls: ['./crud-especial.component.css'],
})
export class CrudEspecialComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;
  inscricaoGetAll!: Subscription;
  inscricaoParametro!: Subscription;
  inscricaoRota!: Subscription;
  inscricaoApiBrasil!: Subscription;
  inscricaoSaveFeriado!: Subscription;

  especiais: Data_Especial_CabModel[] = [];

  parametros: FormGroup;

  erro: string = '';

  opcoesOrdenacao: string[] = [];

  opcoesCampo: string[] = [];

  tamPagina = 50;

  controlePaginas: ControlePaginas = new ControlePaginas(this.tamPagina, 0);

  retorno: boolean = false;

  parametro: ParametroModel = new ParametroModel();

  hide: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private data_Especial_CabService: Data_Especial_CabService,
    private router: Router,
    private route: ActivatedRoute,
    private appSnackBar: AppSnackbar,
    private globalService: GlobalService,
    private parametrosService: ParametrosService,
    private localStorageService:LocalStorageService,
    private crudDialog: MatDialog,
  ) {
    this.parametros = formBuilder.group({
      ordenacao: [null],
      campo: [null],
      filtro: [null],
    });
    this.inscricaoRota = route.params.subscribe((params: any) => {
      if (typeof params.retorno == 'undefined') {
        this.retorno = false;
      } else {
        this.retorno = true;
        const par = this.globalService.estadoFind('feriado');
      }
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.inscricaoGetAll?.unsubscribe();
    this.inscricaoParametro?.unsubscribe();
    this.inscricaoRota?.unsubscribe();
    this.inscricaoApiBrasil?.unsubscribe();
    this.inscricaoSaveFeriado?.unsubscribe();
  }

  escolha(opcao: number, especial?: Data_Especial_CabModel) {
    if (typeof especial !== 'undefined') {
       this.openViewDataEspecialCabDialog(especial,opcao);
    } else {
      especial  = new Data_Especial_CabModel();
      especial.id_empresa = this.globalService.getIdEmpresa();
      this.openViewDataEspecialCabDialog(especial,opcao);
    }
  }

  getAcoes() {
    return CadastroAcoes;
  }

  getDataEspecial() {

    let par = new ParametroData_Especial_Cab01();

    par = AtualizaParametroDataEspecial_cab01(par,this.parametro.getParametro());

    par.id_empresa = this.globalService.getIdEmpresa();

    par.contador = 'N';

    par.tamPagina = this.tamPagina;

    par.pagina = this.controlePaginas.getPaginalAtual();

    this.globalService.setSpin(true);

    this.inscricaoGetAll = this.data_Especial_CabService.getDatas_Especiais_CabParametro_01(par)
      .subscribe(
      (data: Data_Especial_CabModel[]) => {
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

    let par = new ParametroData_Especial_Cab01();

    par = AtualizaParametroDataEspecial_cab01(par,this.parametro.getParametro());

    par.id_empresa = this.globalService.getIdEmpresa();

    par.contador = 'S';

    par.tamPagina = this.tamPagina;

    par.pagina = this.controlePaginas.getPaginalAtual();

    this.globalService.setSpin(true);

    par.contador = 'S';

    par.tamPagina = this.tamPagina;

    this.globalService.setSpin(true);
    this.inscricaoGetAll = this.data_Especial_CabService.getDatas_Especiais_CabParametro_01(par)
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

  getParametro() {
    this.globalService.setSpin(true);
    let par = new ParametroParametro01();
    par.id_empresa = this.parametro.id_empresa;
    par.modulo = this.parametro.modulo;
    par.assinatura = this.parametro.assinatura;
    par.id_usuario = this.parametro.id_usuario;
    par.orderby = 'Usuário';
    this.inscricaoParametro = this.parametrosService
      .getParametrosParametro01(par)
      .subscribe(
        (data: ParametroModel[]) => {
          this.globalService.setSpin(false);
          this.parametro = new ParametroModel();
          this.parametro.id_empresa = data[0].id_empresa;
          this.parametro.modulo = data[0].modulo;
          this.parametro.id_usuario = data[0].id_usuario;
          this.parametro.assinatura = data[0].assinatura;
          this.parametro.parametro = data[0].parametro;
          this.parametro.user_insert = data[0].user_insert;
          this.parametro.user_update = data[0].user_update;
          this.opcoesOrdenacao = GetValueJsonStringArray(
            this.parametro.getParametro(),
            'ordenacao'
          );
          this.opcoesCampo = GetValueJsonStringArray(
            this.parametro.getParametro(),
            'pesquisar'
          );
          this.setValues();
          this.getDataEspecialContador()
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.setValues();
          this.getDataEspecialContador();
        }
      );
  }

  updateParametros() {
    this.globalService.setSpin(true);
    this.parametro.user_insert = this.globalService.usuario.id;
    this.parametro.user_update = this.globalService.usuario.id;
    let config = this.parametro.getParametro();
    Object(config).op_ordenacao = this.opcoesOrdenacao.findIndex(
      (op) => this.parametros.value.ordenacao == op
    );
    Object(config).op_pesquisar = this.opcoesCampo.findIndex(
      (op) => this.parametros.value.campo == op
    );
    Object(config).descricao = this.parametros.value.filtro;
    Object(config).page = 0;
    Object(config).new = false;
    this.parametro.parametro = JSON.stringify(config);
    this.inscricaoParametro = this.parametrosService
      .ParametroAtualiza(this.parametro)
      .subscribe(
        (data: ParametroModel) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openSuccessSnackBar(`Parâmetros Atualizados`, 'OK');
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Gravação Dos Parametros ${messageError(error)}`,
            'OK'
          );
        }
      );
  }

  setValues() {
    this.parametros.setValue({
      ordenacao:
        this.opcoesOrdenacao[
          GetValueJsonNumber(this.parametro.getParametro(), 'op_ordenacao')
        ],
      campo:
        this.opcoesCampo[
          GetValueJsonNumber(this.parametro.getParametro(), 'op_pesquisar')
        ],
      filtro: GetValueJsonString(this.parametro.getParametro(), 'descricao'),
    });
  }

  getTexto() {
    return MensagensBotoes;
  }

  onChangePage() {
    this.getDataEspecial();
  }


  onChangeParametros(param:ParametroModel) {
    console.log("change chamdo",param);
    this.parametro = param;
    let page:number = 1;
    var pag = this.localStorageService.getNumber("page");
    console.log("page:",pag);
    if (pag != null) {
       page =  pag;
    }
    this.controlePaginas.setPaginaAtual(page);
    this.localStorageService.removeItem("page");
    this.getDataEspecialContador();
  }



  onChangeHide(hide:boolean){
    this.hide = hide;
  }

  onHome() {
    this.router.navigate(['']);
  }

  onSaveConfig() {
    this.updateParametros();
  }


  openViewDataEspecialCabDialog(dataEspecial: Data_Especial_CabModel,opcao : CadastroAcoes): void {
    const data: DataEspecialData = new DataEspecialData();
    data.opcao  = opcao;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id     = 'consulta-email';
    dialogConfig.width  = '100%';
    dialogConfig.height = '100%';
    dialogConfig.data = data;
    dialogConfig.disableClose = true;
    const modalDialog = this.crudDialog.open(
      CrudDataEspecialDialogComponent,
      dialogConfig
    )
      .beforeClosed()
      .subscribe((data: DataEspecialData) => {
      });
   }

}
