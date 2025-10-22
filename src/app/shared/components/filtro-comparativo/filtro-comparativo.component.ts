import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ParametroModel } from 'src/app/Models/parametro-model';
import { GlobalService } from 'src/app/services/global.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AppSnackbar } from '../../classes/app-snackbar';
import { ParametrosService } from 'src/app/services/parametros.service';
import { map,filter,tap,take, distinctUntilChanged, debounceTime} from   'rxjs/operators';
import { GetValueJsonNumber, GetValueJsonString, messageError } from '../../classes/util';
import { UsuarioQuery01Model } from 'src/app/Models/usuario-query_01-model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ParametroParametro01 } from 'src/app/parametros/parametro-parametro01';
import { ParametroUsuario01 } from 'src/app/parametros/parametro-usuario01';
import { ValidatorStringLen } from '../../Validators/validator-string-len';
import { ValidatorDate } from '../../Validators/validator-date';

@Component({
  selector: 'app-filtro-comparativo',
  templateUrl: './filtro-comparativo.component.html',
  styleUrls: ['./filtro-comparativo.component.css']
})
export class FiltroComparativoComponent implements OnInit {

    @Input('PARAMNAME') paramName :string = ""
    @Input('RETORNO')   retorno:boolean = false;
    @Input('EMAIL')     email:boolean = false;
    @Input('DOWNLOAD')  download:boolean = false;
    @Input('HIDE') hide: boolean = true;
    @Output('changeParametro') change = new EventEmitter<ParametroModel>();
    @Output('changeHide') changeHide = new EventEmitter<boolean>();


    inscricaoParametro!: Subscription;
    inscricaoUsuarios!: Subscription;
    inscricaoExcel!: Subscription;
    inscricaoEmail!: Subscription;

    parametros: FormGroup;

    showFiltro: boolean = true;

    hideAcao:string = "Ocultar";



    parametro:  ParametroModel = new ParametroModel();

    usuarios: UsuarioQuery01Model[] = [];

    enable_filter:boolean = true;


  constructor(
      private formBuilder: FormBuilder,
      private globalService: GlobalService,
      private usuarioSrv: UsuariosService,
      private appSnackBar: AppSnackbar,
      private EmailDialog: MatDialog,
      private DownLoadDialog: MatDialog,
      private parametrosService: ParametrosService,
      private localStorageService:LocalStorageService,
  ){
    this.parametros = formBuilder.group({
    apontamento1:  [{ value: '' }, [ValidatorDate(true)]],
    apontamento2:  [{ value: '' }, [ValidatorDate(true)]],
    id_usuario: [{ value: '' } , [Validators.required, ValidatorStringLen(1, 15, true)],],
    });

  this.setHide();
  this.setValuesNoParam();
  this.getUsuarios();
}

  ngOnInit(): void
   {

     this.parametros.get("apontamento1")?.valueChanges.pipe(
       map(value => value.trim()),
       filter(value => value.length >= 10 ),
       debounceTime(350),
       distinctUntilChanged(),
      ).subscribe((_) => this.onChangeParametros());

      this.parametros.get("apontamento2")?.valueChanges.pipe(
        map(value => value.trim()),
        filter(value => value.length >= 10 ),
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
   }

    getUsuarios() {
       let par = new ParametroUsuario01();

       par.id_empresa = this.globalService.getIdEmpresa();
       par.ativo    = "S";
       par.timer    = "S";
       par.orderby  = "Razão";

       this.globalService.setSpin(true);
       this.inscricaoUsuarios = this.usuarioSrv
         .getusuarios_01(par)
         .subscribe(
           (data:UsuarioQuery01Model[]) => {
             this.globalService.setSpin(false);
             this.usuarios = data;
             console.log("Usuarios: ",this.usuarios);
           },
           (error: any) => {
             this.globalService.setSpin(false);
             this.usuarios = [];
           }
         );
     }

   setHide(){
    this.hide = !this.hide;
    this.hideAcao = this.hide ? "Mostrar" : "Ocultar";
  }

   setValues() {
     this.enable_filter = false;
     this.parametros.setValue({
      apontamento1:GetValueJsonString(this.parametro.getParametro(), 'apontamento1'),
      apontamento2:GetValueJsonString(this.parametro.getParametro(), 'apontamento2'),
       id_usuario: GetValueJsonNumber(this.parametro.getParametro(), 'id_usuario'),
     });
     this.enable_filter = true;
   }

   setValuesNoParam() {
     this.enable_filter = false;
     this.parametros.setValue({
       apontamento1:"",
       apontamento2: "",
       id_usuario: "",
     });
     this.enable_filter = true;
   }

   onChangeParametros(start: boolean = true){
     if (this.parametros.valid){
      this.refreshParametro(start);
      if (this.enable_filter){
         this.change.emit(this.parametro);

      } else {
          this.parametros.markAllAsTouched();
      }
     }

  }

  loadParametros() {
    this.parametro = new ParametroModel();
    this.parametro.id_empresa = this.globalService.getIdEmpresa();
    this.parametro.modulo = this.paramName;
    this.parametro.assinatura = 'V1.01 22/04/2025';
    this.parametro.id_usuario = this.globalService.usuario.id;
    this.parametro.parametro = `
       {
          "id_empresa": 0,
          "id_usuario": 0,
          "apontamento1": "",
          "apontamento2": ""
       }`;

       const param = this.localStorageService.getParametroModel(this.paramName);

     if (param !== null){

         this.parametro.load(param);


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
    Object(config).apontamento1         = this.parametros.value.apontamento1;
    Object(config).apontamento2         = this.parametros.value.apontamento2;
    Object(config).id_usuario           = this.parametros.value.id_usuario;
    this.parametro.parametro  = JSON.stringify(config);
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


onSaveConfig(){
  this.updateParametros();
}


onGetExcelToEmailOrDownLoad(destino:string) {

  if (destino.toUpperCase() == "E-MAIL"){
    //this.openEmailDialog();
  } else {
    //this.openDownLoadDialog();
  }
}



onHide(){
  this.setHide();
  this.changeHide.emit(this.hide)
}



}
