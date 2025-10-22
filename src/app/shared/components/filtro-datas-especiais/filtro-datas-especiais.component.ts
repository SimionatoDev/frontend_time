import { LocalStorageService } from './../../../services/local-storage.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { ControlePaginas } from '../../classes/controle-paginas';
import { ParametroModel } from 'src/app/Models/parametro-model';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailDialogData } from '../email-dialog/email-dialog-data';
import { DownloadDialogComponent } from '../download-dialog/download-dialog.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AppSnackbar } from '../../classes/app-snackbar';
import { DownloadDialogData } from '../download-dialog/download-dialog-data';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';
import { GlobalService } from 'src/app/services/global.service';
import { SimNao } from '../../classes/sim-nao';
import { ParametroUsuario01 } from 'src/app/parametros/parametro-usuario01';
import { UsuarioQuery01Model } from 'src/app/Models/usuario-query_01-model';
import { ParametrosService } from 'src/app/services/parametros.service';
import { GetValueJsonNumber, GetValueJsonString, messageError } from '../../classes/util';
import { ParametroAtividade01 } from 'src/app/parametros/parametro-atividade01';
import { ProjetosService } from 'src/app/services/projetos.service';
import { AtividadesService } from 'src/app/services/atividades.service';
import { ProjetoModel } from 'src/app/Models/projeto-model';
import { AtividadeQuery_01Model } from 'src/app/Models/atividade-query_01-model';
import { ParametroParametro01 } from 'src/app/parametros/parametro-parametro01';
import { ListaMeses } from '../../classes/lista-meses';
import { OrderBy } from '../../classes/Orderby';
import { Escopo } from '../../classes/escopo';
import { OpcaoGenerica } from '../../classes/opcao-generica';
import { MatSelect } from '@angular/material/select';
import { map,filter,tap,take, distinctUntilChanged, debounceTime} from   'rxjs/operators';

@Component({
  selector: 'app-filtro-datas-especiais',
  templateUrl: './filtro-datas-especiais.component.html',
  styleUrls: ['./filtro-datas-especiais.component.css']
})
export class FiltroDatasEspeciaisComponent implements OnInit {

  @Input('PARAMNAME') paramName :string = ""
  @Input('RETORNO')   retorno:boolean = false;
  @Input('EMAIL')     email:boolean = false;
  @Input('DOWNLOAD')  download:boolean = false;
  @Input('CONTROLE_PAGINAS') controle_paginas:ControlePaginas = new ControlePaginas(50,0);
  @Input('HIDE') hide: boolean = true;
  @Output('changeParametro') change = new EventEmitter<ParametroModel>();
  @Output('changeHide') changeHide = new EventEmitter<boolean>();


  inscricaoParametro!: Subscription;
  inscricaoUsuarios!: Subscription;
  inscricaoExcel!: Subscription;
  inscricaoEmail!: Subscription;
  inscricaoConta!: Subscription;
  inscricaoGrupo!: Subscription;
  inscricaoAtividades!: Subscription;
  inscricaoProjeto!: Subscription;

  parametros: FormGroup;


  showFiltro: boolean = true;

  hideAcao:string = "Ocultar";

  orderby:OrderBy[] =  [
    {sigla:"001" , descricao:"Data"},
    {sigla:"002" , descricao:"Grupo E Atividade"},
    {sigla:"003" , descricao:"Usuário"},
    {sigla:"004" , descricao:"Descrição"}
  ];

  anos:string[] = ["2025","2024","2023","2022"];

  meses: ListaMeses = new ListaMeses();

  parametro:  ParametroModel = new ParametroModel();

  usuarios: UsuarioQuery01Model[] = [];

  contrato: ProjetoModel = new ProjetoModel();

  conta: AtividadeQuery_01Model = new AtividadeQuery_01Model();

  grupo: AtividadeQuery_01Model = new AtividadeQuery_01Model();
  grupos: AtividadeQuery_01Model[] = [];

  atividade: AtividadeQuery_01Model = new AtividadeQuery_01Model();
  atividades: AtividadeQuery_01Model[] = [];

  atividadesDoGrupo:AtividadeQuery_01Model[] = [];

  tipos:OpcaoGenerica[] = [new OpcaoGenerica(1,"FER","FERIADOS"),new OpcaoGenerica(2,"ESP","DATA ESPECIAL")];

  enable_filter:boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private usuarioSrv: UsuariosService,
    private appSnackBar: AppSnackbar,
    private EmailDialog: MatDialog,
    private DownLoadDialog: MatDialog,
    private parametrosService: ParametrosService,
    private projetosService:ProjetosService,
    private atividadesService:AtividadesService,
    private localStorageService:LocalStorageService,
    //@Inject(MAT_DIALOG_DATA) public data: DownloadDialogData
    ) {
      this.parametros = formBuilder.group({
        data: [{ value: '' }],
        ano: [{ value: '' }],
        mes: [{ value: '' }],
        grupo: [{ value: '' }],
        atividade: [{ value: '' }],
        usuario: [{ value: '' }],
        tipo: [{ value: '' }],
        descricao: [{ value: '' }],
        orderby: [{ value: '' }],
      });
    this.setHide();
    this.setValuesNoParam();
  }

  ngOnInit(): void
  {
    var param = this.localStorageService.getParametroModel(this.paramName);

    this.parametros.get("data")?.valueChanges.pipe(
      map(value => value.trim()),
      filter(value => value.length >= 10 ),
      debounceTime(350),
      distinctUntilChanged(),
     ).subscribe((_) => this.onChangeParametros());

     this.parametros.get("descricao")?.valueChanges.pipe(
      map(value => value.trim()),
      filter(value => value.length > 0),
      debounceTime(350),
      distinctUntilChanged(),
     ).subscribe((_) => this.onChangeParametros());

    this.loadParametros();

  }

  ngOnDestroy(): void {
    this.inscricaoParametro?.unsubscribe();
    this.inscricaoUsuarios?.unsubscribe();
    this.inscricaoExcel?.unsubscribe();
    this.inscricaoEmail?.unsubscribe();
    this.inscricaoConta?.unsubscribe();
    this.inscricaoGrupo?.unsubscribe();
    this.inscricaoAtividades?.unsubscribe();
    this.inscricaoProjeto?.unsubscribe();
  }

  getUsuarios() {
    let par = new ParametroUsuario01();

    par.id_empresa = this.globalService.getIdEmpresa();


    this.globalService.setSpin(true);
    this.inscricaoUsuarios = this.usuarioSrv
      .getusuarios_01(par)
      .subscribe(
        (data:UsuarioQuery01Model[]) => {
          this.globalService.setSpin(false);
          this.usuarios = data;
          this.getProjeto();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          const semFiltro = new UsuarioQuery01Model();
          semFiltro.id = 0;
          semFiltro.razao = 'Todos';
          this.usuarios.push(semFiltro);
        }
      );
  }

  getConta() {
      let para = new ParametroAtividade01();
      para.id_empresa = this.globalService.getIdEmpresa();
      para.id_projeto = this.contrato.id;
      para.controle = 'S';
      para.orderby = 'projeto';
      para.conta = '90';
      para.nivel = 1;
      para.tipo = 'C';
      this.globalService.setSpin(true);
      console.log(para);
      this.inscricaoAtividades = this.atividadesService
        .getAtividades_01(para)
        .subscribe(
          (data: AtividadeQuery_01Model[]) => {
            this.globalService.setSpin(false);
            this.conta = data[0];
            this.getGrupos();
          },
          (error: any) => {
            this.globalService.setSpin(false);
            this.conta = new AtividadeQuery_01Model();
            this.grupos = [];
            this.atividades = [];
          }
        );
    }

  getGrupos() {
      let para = new ParametroAtividade01();
      para.id_empresa = this.globalService.getIdEmpresa();
      para.id_projeto = this.contrato.id;
      para.controle = 'S';
      para.orderby = 'projeto';
      para.conta = this.conta.conta;
      para.nivel = 2;
      para.tipo = 'S';
      this.globalService.setSpin(true);
      console.log(para);
      this.inscricaoAtividades = this.atividadesService
        .getAtividades_01(para)
        .subscribe(
          (data: AtividadeQuery_01Model[]) => {
            this.globalService.setSpin(false);
            console.log('grupos', data);
            this.grupos = data;
            this.getAtividades();
          },
          (error: any) => {
            this.globalService.setSpin(false);
            console.log('retornei com erro', error);
            this.grupos = [];
          }
        );
    }

  getAtividades() {
      let para = new ParametroAtividade01();
      para.id_empresa = this.globalService.getIdEmpresa();
      para.id_projeto = this.contrato.id;
      para.controle = 'S';
      para.orderby = 'projeto';
      para.conta = this.grupo.conta;
      para.subconta = this.grupo.subconta.trim();
      para.subconta_nivel = 'S';
      para.nivel_filtro = this.grupo.nivel;
      para.nivel = 3;
      para.tipo = 'O';
      this.globalService.setSpin(true);
      console.log(para);
      this.inscricaoAtividades = this.atividadesService
        .getAtividades_01(para)
        .subscribe(
          (data: AtividadeQuery_01Model[]) => {
            this.globalService.setSpin(false);
            this.atividades = data;
            console.log("Achei Atividades: ",this.atividades);
            this.setValues();
            this.loadAtividadesByGrupo();
            /*
            console.log('atividades:', data);
            this.formulario.patchValue({
              id_atividade: this.atividades[0].subconta,
            });
            */
            /*
                this.atividade = this.atividades.filter(
                  (ativ) => ativ.id === this.parametro.value.id_atividade
                )[0];
                this.loaded = true;
                */
          },
          (error: any) => {
            this.globalService.setSpin(false);
            this.atividades = [];
          }
        );
    }

  getProjeto() {
      this.globalService.setSpin(true);
      this.inscricaoProjeto = this.projetosService
        .getProjeto(this.globalService.getIdEmpresa(), 900000)
        .subscribe(
          (data: ProjetoModel) => {
            this.globalService.setSpin(false);
            this.contrato = data;
            console.log("Achei Projeto: ",this.contrato);
            this.getConta();
          },
          (error: any) => {
            this.globalService.setSpin(false);
            this.appSnackBar.openSuccessSnackBar(
              `Pesquisa Conta ${messageError(error)}`,
              'OK'
            );
            this.contrato = new ProjetoModel();
          }
        );
    }

 loadAtividadesByGrupo(){

  let gru:string =  this.parametros.value.grupo;

  console.log("Busncando Grupo: ",gru);

  console.log("grupo:",gru);

  this.atividadesDoGrupo = this.atividades.filter(atividade => atividade.subconta.substring(0,4) == gru.substring(0,4));

  console.log("atividade do grupo:",this.atividadesDoGrupo);

 }

 openEmailDialog(): void {
  const data: EmailDialogData = new EmailDialogData();
  data.titulo       = "ENVIAR CONSULTA VIA E-MAIL";
  data.destinatario = this.globalService.usuario.email;
  data.escopo       = "T";
  data.labelBottomNao = "Cancelar";
  data.labelBottonSim = "Processar";
  data.id_empresa      = this.globalService.getIdEmpresa();
  data.pagina          = this.controle_paginas.getPaginalAtual();
  data.parametro       = this.parametro;

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.id     = 'consulta-email';
  dialogConfig.width  = '800px';
  dialogConfig.data = data;
  const modalDialog = this.EmailDialog.open(
    EmailDialogComponent,
    dialogConfig
  )
    .beforeClosed()
    .subscribe((data: EmailDialogData) => {
    });
 }


 openDownLoadDialog(): void {

  /*
  console.log("Pagina: ", this.controle_paginas.getPaginalAtual());

  const data: DownloadDialogData = new DownloadDialogData();
  data.titulo       = "DOWNLOAD DE CONSULTA";
  data.escopo       = "T";
  data.labelBottomNao = "Cancelar";
  data.labelBottonSim = "Processar";
  data.id_empresa     = this.globalService.getIdEmpresa();
  data.pagina          = this.controle_paginas.getPaginalAtual();
  data.parametro       = this.parametro;

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.id     = 'consulta-download';
  dialogConfig.width  = '800px';
  dialogConfig.data = data;
  const modalDialog = this.DownLoadDialog.open(
    DownloadDialogComponent,
    dialogConfig
  )
    .beforeClosed()
    .subscribe((data: DownloadDialogData) => {
    });
 }

 sendMail(fileName:string) {


  let par = new ParametroSendemailv2();

  par.id_empresa = this.globalService.getIdEmpresa();

  par.id_filial = this.globalService.getLocal().id;

  par.id_inventario = this.globalService.getInventario().codigo;

  par.assunto = "Relatório Dos Ativos Do Inventário";

  par.destinatario =  this.globalService.usuario.email;

  par.mensagem     = "Mensagem enviada automaticamento por solicitação do usuário. Favor Verificar Anexo."

  par.fileName = fileName;

  this.globalService.setSpin(true);

  this.inscricaoEmail = this.emailService
    .sendEmailV2(par)
    .subscribe(
      (data: any) => {
        this.globalService.setSpin(false);
        this.appSnackBar.openSuccessSnackBar(
          `E-Mail Enviado Com Sucesso!`,
          'OK'
        );
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.appSnackBar.openFailureSnackBar(
          `Pesquisa Nos Produtos De Inventário ${messageError(error)}`,
          'OK'
        );
      }
    );
    */
}

setValues() {
  this.enable_filter = false;
  console.log("parametros", this.parametro.getParametro());
  this.parametros.setValue({
    data:GetValueJsonString(this.parametro.getParametro(), 'data'),
    orderby:GetValueJsonString(this.parametro.getParametro(), 'orderby'),
    ano: GetValueJsonNumber(this.parametro.getParametro(), 'ano'),
    mes: GetValueJsonNumber(this.parametro.getParametro(), 'mes'),
    grupo: GetValueJsonString(this.parametro.getParametro(), 'grupo'),
    usuario: GetValueJsonNumber(this.parametro.getParametro(), 'usuario'),
    atividade: GetValueJsonString(this.parametro.getParametro(), 'atividade'),
    tipo: GetValueJsonNumber(this.parametro.getParametro(), 'tipo'),
    descricao: GetValueJsonString(this.parametro.getParametro(), 'descricao'),
  });
  this.enable_filter = true;
}

setValuesNoParam() {
  this.enable_filter = false;
  this.parametros.setValue({
    data:"",
    ano: "",
    mes: "",
    usuario: "",
    grupo:"",
    atividade:"",
    tipo: "",
    descricao: "",
    orderby:"001"
  });
  this.enable_filter = true;
}



onGetExcelToEmailOrDownLoad(destino:string) {

  if (destino.toUpperCase() == "E-MAIL"){
    this.openEmailDialog();
  } else {
    this.openDownLoadDialog();
  }
}


hasValue(campo: string): boolean {
  if (this.parametros.get(campo)?.value == "") {
    return false;
  }
  return true;
}

onclearValue(campo: string){
  this.parametros.get(campo)?.reset(""); // Limpa o valor do campo
  this.onChangeParametros();
}

onclearValueGrupo(){
  this.parametros.get("grupo")?.reset("");
  this.parametros.get("atividade")?.reset("");
  this.onChangeParametros();
}

onclearValueCombo(campo: string){
  this.parametros.get(campo)?.reset(""); // Limpa o valor do campo
  this.onChangeParametros();
}

onClear(matSelectRef: MatSelect, controlName: string, event: MouseEvent): void {
  event.stopPropagation(); // Impede que o clique se propague
  this.parametros.get(controlName)?.reset(); // Limpa o valor do campo
  matSelectRef.close(); // Fecha o menu suspenso (apenas por garantia)
}

ChangeValue(campo: string, value:string){
  if (campo == 'descricao')
  this.parametros.patchValue({
    descricao: value
  })
  if (campo == 'observacao')
    this.parametros.patchValue({
      observacao: value
  })
}

setHide(){
  this.hide = !this.hide;
  this.hideAcao = this.hide ? "Mostrar" : "Ocultar";
}

loadParametros() {
  this.parametro = new ParametroModel();
  this.parametro.id_empresa = this.globalService.getIdEmpresa();
  this.parametro.modulo = this.paramName;
  this.parametro.assinatura = 'V1.00 21/03/2025';
  this.parametro.id_usuario = this.globalService.usuario.id;
  this.parametro.parametro = `
     {
        "usuario": 0,
        "tipo": 0,
        "nivel": 0,
        "conta": "90    ",
        "versao": "0101",
        "subconta": "",
        "atividade": "",
        "data": "",
        "descricao": "",
        "ano": "",
        "mes": "",
        "orderby":"001",
        "page": 1,
        "new": false,
        "id_retorno":0
     }`;

     const param = this.localStorageService.getParametroModel(this.paramName);

     if (param !== null){

         this.parametro.load(param);

         this.getUsuarios();



     } else {
        this.getParametro();
    }
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
        this.parametro.id_empresa  = data[0].id_empresa;
        this.parametro.modulo      = data[0].modulo;
        this.parametro.id_usuario  = data[0].id_usuario;
        this.parametro.assinatura  = data[0].assinatura;
        this.parametro.parametro   = data[0].parametro;
        this.parametro.user_insert = data[0].user_insert;
        this.parametro.user_update = data[0].user_update;
        console.log("data parametro ",data[0]);
        this.setValues();
        this.getUsuarios();
        this.onChangeParametros(false);
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.setValuesNoParam()
        this.getProjeto();
        this.onChangeParametros();
      }
    );
}

updateParametros() {
  this.globalService.setSpin(true);
  this.parametro.user_insert = this.globalService.usuario.id;
  this.parametro.user_update = this.globalService.usuario.id;
  this.refreshParametro();
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

refreshParametro(start: boolean = true){
  let config                         = this.parametro.getParametro();

  Object(config).data  = this.parametros.value.data;
  Object(config).ano           = this.parametros.value.ano;
  Object(config).mes           = this.parametros.value.mes;
  Object(config).usuario       = this.parametros.value.usuario;
  Object(config).grupo         = this.parametros.value.grupo;
  Object(config).atividade     = this.parametros.value.atividade;
  Object(config).tipo          = this.parametros.value.tipo;
  Object(config).descricao     = this.parametros.value.descricao.toUpperCase();
  Object(config).orderby       = this.parametros.value.orderby;

  this.parametro.parametro  = JSON.stringify(config);
}

onChangeGrupo(){

  this.loadAtividadesByGrupo();

  this.parametros.patchValue({atividade:''});

}

onChangeParametros(start: boolean = true){
  this.refreshParametro(start);
  if (this.enable_filter){
    console.log("Parametro Enviado: ",this.parametro)
     this.change.emit(this.parametro);
  }
}

onSaveConfig(){
  this.updateParametros();
}

onHide(){
  this.setHide();
  this.changeHide.emit(this.hide)
}


NoValidtouchedOrDirty(campo: string): boolean {
  if (
    !this.parametros.get(campo)?.valid &&
    (this.parametros.get(campo)?.touched || this.parametros.get(campo)?.dirty)
  ) {
    return true;
  }
  return false;
}

getMensafield(field: string): string {
  return this.parametros.get(field)?.errors?.message;
}


}
