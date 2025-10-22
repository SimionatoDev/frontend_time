import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/global.service';
import { Subscription } from 'rxjs';
import { map,filter,tap,take, distinctUntilChanged, debounceTime} from   'rxjs/operators';
import { ControlePaginas } from '../../classes/controle-paginas';
import { AppSnackbar } from '../../classes/app-snackbar';
import { CadastroEnum } from '../../enum/cadastro-enum.enum';
import { SerachModel } from 'src/app/Models/serachModel';
import { SeachDialogData } from './seach-dialog-data';
import { GrupoUserService } from 'src/app/services/grupo-user.service';
import { GruUserModel } from 'src/app/Models/gru-user-model';
import { ParametroGrupoEco01 } from 'src/app/parametros/parametro-grupo-eco01';
import { GrupoEcoModel } from 'src/app/Models/gru-eco-models';
import { GrupoEconomicoService } from 'src/app/services/grupo-economico.service';
import { ParametroPesquisaPadrao } from 'src/app/parametros/parametro-pesquisa-padrao';
import { ParametroModel } from 'src/app/Models/parametro-model';
import { ParametroParametro01 } from 'src/app/parametros/parametro-parametro01';
import { ParametrosService } from 'src/app/services/parametros.service';
import { messageError } from '../../classes/util';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-seach-dialog',
  templateUrl: './seach-dialog.component.html',
  styleUrls: ['./seach-dialog.component.css']
})
export class SeachDialogComponent implements OnInit {

  inscricaoGetDados!: Subscription;
  inscricaoParametros!:Subscription;
  formulario: FormGroup;
  lsLista:SerachModel[] = [];

  tamPagina = 50;

  controlePaginas: ControlePaginas = new ControlePaginas(this.tamPagina, 0);

  grupos:GruUserModel[] = [];

  gruposEconomicos:GrupoEcoModel[] = [];

  erro: any;

  email:boolean = false;

  download:boolean = false;

  parametroGrupoEco01:ParametroGrupoEco01 = new ParametroGrupoEco01();

  parametro:ParametroModel = new ParametroModel();

  paramName:string = "Pesquisa_Genérica";

  constructor(
      private formBuilder: FormBuilder,
      public dialogRef: MatDialogRef<SeachDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: SeachDialogData,
      private globalService:GlobalService,
      private grupoUserService:GrupoUserService,
      private grupoEconomicoService:GrupoEconomicoService,
      private localStorageService:LocalStorageService,
      private parametroService:ParametrosService,
      private appSnackBar: AppSnackbar,
    ) {
      this.formulario = formBuilder.group({
      codigo: [{ value: ''}],
      descricao: [{ value: '' }],
    });}


    ngOnInit() {
      this.setValueNoParam();
      this.setarDono();
      this.loadParametros();
    }

    ngOnDestroy() {
      this.inscricaoGetDados?.unsubscribe();
      this.inscricaoParametros?.unsubscribe();
    }


    setValue() {
      var config = this.parametro.getParametro();
      this.formulario.setValue({
        codigo   :  Object(config).codigo,
        descricao:  Object(config).descricao
      });
    }

    setValueNoParam() {
      this.formulario.setValue({
        codigo   : "",
        descricao: "",
      });
    }

    patchValue(campo: string, value : string){

      if (campo == 'codigo'){
        this.formulario.patchValue({
          codigo: value
        })
      }
      if (campo == 'descricao')
      this.formulario.patchValue({
        descricao: value
      })
  }

   clearValueRefresh(campo: string){
    if (campo == 'codigo'){
      this.formulario.patchValue({
        codigo: ""
      })
      this.data.pesquisarPor = 0;
     }
    if (campo == 'descricao'){
      this.formulario.patchValue({
        descricao: ''
      })
      this.data.pesquisarPor = 1;
     }
     this.refreshParametro(false);
     this.buscarDados("S");
    }

    hasValue(campo: string): boolean {
      if (this.formulario.get(campo)?.value == "") {
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
        this.formulario.get(campo)?.touched ||
        this.formulario.get(campo)?.dirty
      )
        return true;
      return false;
    }

    getValidfield(field: string): boolean {
      return (
        this.formulario.get(field)?.errors?.ValidatorStringLen &&
        this.touchedOrDirty(field)
      );
    }

    getMensafield(field: string): string {
      return this.formulario.get(field)?.errors?.message;
    }


   inicializar(){
    this.buscarDados("S");
    }

  setarDono(){
      switch (this.data.cadastro){
      case CadastroEnum.Empresa:
          this.data.dono = "Empresas";
          break;
      case CadastroEnum.Usuario:
            this.data.dono = "Usuários";
          break;
      case CadastroEnum.Cliente:
            this.data.dono = "Clientes";
            break;
      case CadastroEnum.Projeto:
            this.data.dono = "Projetos";
            break;
      case CadastroEnum.Atividade:
            this.data.dono = "Atividades";
            break;
      case CadastroEnum.GrupoUsuario:
            this.data.dono = "Grupos De Usuários";
            break;
      case CadastroEnum.GrupoEconomico:
            this.data.dono = "Grupos Econômico";
            break;
      }
 }


  buscarDados(contador:string = "N"){
    switch (this.data.cadastro){
      case CadastroEnum.Empresa:
          this.getEmpresas();
          break;
      case CadastroEnum.Usuario:
          this.getUsuários();
          break;
      case CadastroEnum.GrupoUsuario:
          this.getGruposUsuarios("S")
          break;
      case CadastroEnum.GrupoEconomico:
        this.getGruposEconomicos(contador);
        break;
      case CadastroEnum.Projeto:
            //this.getLocais();
            break;
      case CadastroEnum.Atividade:
            //this.getProdutos();
            break;
    }
  }



  onChangePage() {
    this.buscarDados("N");
  }


  getGruposEconomicos(contador: string = "N") {

    let par = new ParametroGrupoEco01();

    par = this.AtualizaParametroParametroGrupoEco01(par , this.parametro.getParametro());

    par.pagina = this.controlePaginas.getPaginalAtual();

    par.contador = contador;

    if (contador == 'S'){

      par.tamPagina = this.tamPagina;

      par.pagina = this.controlePaginas.getPaginalAtual();
    }

    console.log("Contador,Parametro",contador,par);

    this.globalService.setSpin(true);
    this.inscricaoGetDados = this.grupoEconomicoService
      .getGrupoEcos_01(par)
      .subscribe(
        (data: any) => {
          this.globalService.setSpin(false);
          this.lsLista = [];
          if (contador == "N") {
                this.gruposEconomicos = data;
                this.gruposEconomicos.forEach(grupo =>{
                this.lsLista.push(new SerachModel(grupo.id.toString(),grupo.razao));
            });
          } else {
              this.controlePaginas = new ControlePaginas(
              this.tamPagina,
              data.total == 0 ? 1 : data.total
            );
            this.getGruposEconomicos();
          }
        },
        (error: any) => {
          let config = this.parametro.getParametro();
          Object(config).id_retorno = 0;
          Object(config).new = false;
          this.globalService.setSpin(false);
          this.grupos = [];
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nos Grupos Econômicos ${messageError(error)}`,
            'OK'
          );
        }
      );
    }

  getGruposUsuarios(contador: string = "N") {
    this.globalService.setSpin(true);
    this.inscricaoGetDados = this.grupoUserService.getGrupoUsers().subscribe(
      (data: GruUserModel[]) => {
        this.globalService.setSpin(false);
        this.grupos = data;
      },
      (error: any) => {
        this.globalService.setSpin(false);
        this.erro = error;
        this.grupos = [];
        console.log('this.erro', this.erro);
      }
    );
  }

  AtualizaParametroParametroGrupoEco01(par : ParametroGrupoEco01 , config : JSON):ParametroGrupoEco01 {

    try {

        let key:number = 0;

        par.id_empresa = this.globalService.getIdEmpresa();

        key = parseInt(Object(config).codigo, 10);

        if (isNaN(key)) {
          par.id = 0;
        } else {
          par.id = key;
        }

        if (Object(config).descricao?.trim() !== '') {
          par.razao= Object(config).descricao;
        }

        return par;

    } catch(error){
        throw error
    }
  }


  loadParametros() {
    this.parametro = new ParametroModel();
    this.parametro.id_empresa = this.globalService.getIdEmpresa();
    this.parametro.modulo = this.paramName;
    this.parametro.assinatura = 'V1.00 17/12/2024';
    this.parametro.id_usuario = this.globalService.usuario.id;
    this.parametro.parametro = `
      {
        "codigo":"",
        "descricao":"",
        "orderby":"001",
        "page": 1,
        "new": false,
        "id_retorno":0
      }`;
      const param = this.localStorageService.getParametroModel(this.paramName);

      if (param !== null){
          this.parametro.load(param);
          this.getParametro();
      } else {
          this.getParametro();
      }
  }

  pesquisaReativa(){
    this.formulario.get("codigo")?.valueChanges.pipe(
      map(value => value.trim().toUpperCase()),
      filter(value => value.length > 0),
      debounceTime(350),
      distinctUntilChanged(),
    ).subscribe((_) => {
      this.refreshParametro(false);
      this.data.pesquisarPor = 1;
      this.buscarDados("S");
    });
    this.formulario.get("descricao")?.valueChanges.pipe(
      map(value => value.trim().toUpperCase()),
      filter(value => value.length > 0),
      debounceTime(350),
      distinctUntilChanged(),
    ).subscribe((_) => {
      this.refreshParametro(false);
      this.data.pesquisarPor = 0;
      this.buscarDados("S");
    });
  }

  getParametro() {
    this.globalService.setSpin(true);
    let par = new ParametroParametro01();
    par.id_empresa = this.parametro.id_empresa;
    par.modulo = this.parametro.modulo;
    par.assinatura = this.parametro.assinatura;
    par.id_usuario = this.parametro.id_usuario;
    par.orderby = 'Usuário';
    this.inscricaoParametros = this.parametroService
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
          this.setValue();
          this.pesquisaReativa();
          this.inicializar();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.setValueNoParam();
          this.pesquisaReativa();
          this.inicializar();
        }
      );
  }

  updateParametros() {
    this.globalService.setSpin(true);
    this.parametro.user_insert = this.globalService.usuario.id;
    this.parametro.user_update = this.globalService.usuario.id;
    this.refreshParametro();
    this.inscricaoParametros = this.parametroService
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
    let config                  = this.parametro.getParametro();
    Object(config).codigo       = this.formulario.value.codigo;
    Object(config).descricao    = this.formulario.value.descricao.trim().toUpperCase();
    this.parametro.parametro    = JSON.stringify(config);
  }

  onChangeParametros(start: boolean = true){
    this.refreshParametro(start);
  }

  onSaveConfig(){
    this.updateParametros();
  }


 onGetExcelToEmailOrDownLoad(tipo:string){}

 onHide(){}


/*
    getInventarios() {
      throw new Error('Method not implemented.');
    }
    getValores() {
      throw new Error('Method not implemented.');
    }
    getNfes() {
      throw new Error('Method not implemented.');
    }
    getImobilizados() {
      throw new Error('Method not implemented.');
    }
    getProdutos() {
      throw new Error('Method not implemented.');
    }
    getLocais() {
      throw new Error('Method not implemented.');
    }
    */
    Clientes() {
      throw new Error('Method not implemented.');
    }
    getUsuários() {
      throw new Error('Method not implemented.');
    }
    getEmpresas() {
      throw new Error('Method not implemented.');
    }


}
