import { Component, Inject, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SerachModel } from 'src/app/Models/serachModel';
import { ControlePaginas } from '../../classes/controle-paginas';
import { SeachDialogProjetoData } from './seach-dialog-projeto-data';
import { GlobalService } from 'src/app/services/global.service';
import { AppSnackbar } from '../../classes/app-snackbar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ParametroProjetoPesquisa } from 'src/app/parametros/parametro-projeto-pesquisa';
import { ParametroModel } from 'src/app/Models/parametro-model';
import { GetValueJsonNumber, GetValueJsonString, messageError } from '../../classes/util';
import { ParametroParametro01 } from 'src/app/parametros/parametro-parametro01';
import { ParametrosService } from 'src/app/services/parametros.service';
import { SeachDialogService } from 'src/app/services/seach-dialog.service';
import { SeachDialogData } from '../seach-dialog/seach-dialog-data';
import { CadastroEnum } from '../../enum/cadastro-enum.enum';
import { OrderBy } from '../../classes/Orderby';

@Component({
  selector: 'app-seach-dialog-projeto',
  templateUrl: './seach-dialog-projeto.component.html',
  styleUrls: ['./seach-dialog-projeto.component.css']
})
export class SeachDialogProjetoComponent implements OnInit {


  inscricaoGetDados!: Subscription;
  inscricaoParametro!: Subscription;

  parametros: FormGroup;
  lsLista:SerachModel[] = [];

  tamPagina = 50;

  controlePaginas: ControlePaginas = new ControlePaginas(this.tamPagina, 0);

  hideAcao:string = "Ocultar";

  enable_filter:Boolean = false;


  orderby:OrderBy[] =  [
    {sigla:"001" , descricao:"Código"},
    {sigla:"002" , descricao:"Razão"},
    {sigla:"003" , descricao:"Descrição"},
    {sigla:"004" , descricao:"CNPJ/CPF"},
    {sigla:"005" , descricao:"Fantasia"},
    {sigla:"006" , descricao:"Grupo"},
  ];

  param = new ParametroProjetoPesquisa();

  parametro : ParametroModel = new ParametroModel();

  enable : boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SeachDialogProjetoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SeachDialogProjetoData,
    private globalService:GlobalService,
    private parametrosService:ParametrosService,
    private searchDialogService:SeachDialogService,
    private appSnackBar: AppSnackbar,
) {
    this.parametros = formBuilder.group({
      orderby: [{ value: ''}],
      codigo: [{ value: ''}],
      razao: [{ value: ''}],
      descricao: [{ value: '' }],
      cnpj_cpf: [{ value: '' }],
      fantasia: [{ value: '' }],
      grupo: [{ value: '' }],
      });
    }

  ngOnInit(): void {
    this.setValuesNoParam();
    //this.loadParametros();
  }

  ngOnDestroy(): void {
    this.inscricaoGetDados?.unsubscribe();
    this.inscricaoParametro?.unsubscribe();
  }


  setValues(){
    this.enable_filter = false;
    this.parametros.setValue({
      orderby:GetValueJsonString(this.parametro.getParametro(), 'orderby'),
      codigo:GetValueJsonString(this.parametro.getParametro(), 'codigo'),
      razao:GetValueJsonString(this.parametro.getParametro(), 'razao'),
      descricao: GetValueJsonString(this.parametro.getParametro(), 'descricao'),
      cnpj_cpf: GetValueJsonString(this.parametro.getParametro(), 'cnpj_cpf'),
      fantasia: GetValueJsonString(this.parametro.getParametro(), 'fantasia')?.toString(),
      grupo: "",
    });
    this.enable = true;
  }

  setValuesNoParam(){
    this.enable_filter = false;
    this.parametros.setValue({
      orderby:"001",
      codigo:"",
      razao:"",
      descricao: "",
      cnpj_cpf: "",
      fantasia: "",
      grupo: ""
    });
    this.enable = true;
  }

  onChangeParametros(start: boolean = true){
    this.refreshParametro(start);
    if (this.enable_filter){
       //this.change.emit(this.parametro);
    }
  }


  clearValue(campo: string){

    if (campo == 'codigo'){
      this.parametros.patchValue({
        codigo: ""
      })
    };
    if (campo == 'razao')
    this.parametros.patchValue({
      razao: ''
    });
    if (campo == 'descricao')
      this.parametros.patchValue({
        descricao: ''
    });
    if (campo == 'fantasia')
      this.parametros.patchValue({
        descricao: ''
    });
    if (campo == 'cnpj_cpf')
      this.parametros.patchValue({
        cnpj_cpf: ''
    });
    if (campo == 'grupo')
      this.parametros.patchValue({
        grupo: ''
    });
}

  clearValueRefresh(campo: string){

  if (campo == 'codigo'){
    this.parametros.patchValue({
      codigo: ""
    })
    this.data.pesquisarPor = 0;
   }
  if (campo == 'descricao'){
    this.parametros.patchValue({
      descricao: ''
    })
    this.data.pesquisarPor = 1;
   }
   //this.getCCs();
  }

  hasValue(campo: string): boolean {
  if (this.parametros.get(campo)?.value == "") {
      return false;
  }
  return true;
}

  onTodos() {
    this.data.retornoTodos = true;
    this.dialogRef.close(this.data);
  }

  onEscolher(escolha:any){

    this.data.retorno = escolha;

    this.dialogRef.close(this.data);

  }

  onCancelar(){

    this.data.cancelar = true;

    this.dialogRef.close(this.data);

  }

  touchedOrDirty(campo: string): boolean {
    if (
      this.parametros.get(campo)?.touched ||
      this.parametros.get(campo)?.dirty
    )
      return true;
    return false;
  }

  getValidfield(field: string): boolean {
    return (
      this.parametros.get(field)?.errors?.ValidatorStringLen &&
      this.touchedOrDirty(field)
    );
  }

  getMensafield(field: string): string {
    return this.parametros.get(field)?.errors?.message;
  }


 inicializar(){
  }

 setarDono(){
 }


 buscarDados(){
        //this.getUsuários();
 }


 onPesquisaGrupo(){

  this.searchDialogService.openSearchDialog(CadastroEnum.GrupoEconomico)
  .beforeClosed()
  .subscribe((data: SeachDialogData) => {

    if (data){
      if (data.retornoTodos){
         /*  this.parametros.patchValue({
            cc_descricao: "Todos",
            chaves:{
              cc : ""
            }
          }) */
          return;
      }
      if (!data.cancelar){
        /*   this.parametros.patchValue({
            cc_descricao: `${data.retorno.codigo.replace("#","-")}-${data.retorno.descricao}`,
            chaves:{
              cc: data.retorno.codigo
            }
          }) */
      }

    }
  });


 }


 onChangePage() {
  //this.buscarDados();
 }


 loadParametros() {
  this.parametro = new ParametroModel();
  this.parametro.id_empresa = this.globalService.getIdEmpresa();
  this.parametro.modulo     = 'pesquisa_contrato';
  this.parametro.assinatura = 'V1.00 11/12/2024';
  this.parametro.id_usuario = this.globalService.usuario.id;
  this.parametro.parametro = `
     { "
       "orderby":"001",
       "codigo":0,
       "razao":"",
       "descricao": "",
       "cnpj_cpf":"",
       "fantasia" : "",
       "grupo": "",
       "grupo_descricao":"Todos",
       "page": 1,
       "new": false,
       "id_retorno":0
     }`;
     //const param = this.localStorageService.getParametroModel(this.paramName);

     this.getParametro()
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
        this.setValues();
        this.onChangeParametros(false);
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.setValuesNoParam()
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
  Object(config).codigo       = this.parametros.value.codigo;
  Object(config).razao        = this.parametros.value.razao;
  Object(config).descricao    = this.parametros.value.descricao;
  Object(config).cnpj_cpf     = this.parametros.value.cnpj_cpf;
  Object(config).fantasia     = this.parametros.value.fantasia;
  Object(config).grupo        = this.parametros.value.grupo;

  this.parametro.parametro  = JSON.stringify(config);
}

}
