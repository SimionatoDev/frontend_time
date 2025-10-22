import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParametroModel } from 'src/app/Models/parametro-model';
import { GlobalService } from 'src/app/services/global.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { AppSnackbar } from '../../classes/app-snackbar';
import { GetValueJsonString, messageError } from '../../classes/util';
import { ParametroParametro01 } from 'src/app/parametros/parametro-parametro01';
import { Subscription } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CadastroEnum } from '../../enum/cadastro-enum.enum';
import { SeachDialogData } from '../seach-dialog/seach-dialog-data';
import { SeachDialogService } from 'src/app/services/seach-dialog.service';

@Component({
  selector: 'app-parametro-mod01',
  templateUrl: './parametro-mod01.component.html',
  styleUrls: ['./parametro-mod01.component.css']
})
export class ParametroMod01Component implements OnInit {

  @Input('PARAMNAME') paramName :string = "";
  @Input('HIDE') hide: boolean = true;
  @Output('changeParametro') change = new EventEmitter<ParametroModel>();
  @Output('changeHide') changeHide = new EventEmitter<boolean>();


  inscricaoParametro!: Subscription;

  parametros: FormGroup;

  enable_filter = false;

  parametro:  ParametroModel = new ParametroModel();

  hideAcao:string = "Ocultar";

  constructor(

    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private parametrosService:ParametrosService,
    private searchDialogService:SeachDialogService,
    private appSnackBar: AppSnackbar,
  ) {
    this.parametros = formBuilder.group({
      hoje:[{ value: '' }],
      cleardate: [{ value: '' }],
      dtinicial: [{ value: '' }],
      dtfinal:   [{ value: '' }],
      contrato:  [{ value: '' }]
    }); }

  ngOnInit(): void {
    this.loadParametros();
  }

  ngOnDestroy(): void {
    this.inscricaoParametro?.unsubscribe();
  }



  setValues() {
    this.enable_filter = false;
    this.parametros.setValue({
      hoje:false,
      cleardate:false,
      dtinicial:GetValueJsonString(this.parametro.getParametro(), 'dtinicial'),
      dtfinal:GetValueJsonString(this.parametro.getParametro(), 'dtfinal'),
      contrato:GetValueJsonString(this.parametro.getParametro(), 'contrato'),
    });
    this.enable_filter = true;
  }

  setValuesNoParam() {
    this.enable_filter = false;
    this.parametros.setValue({
      hoje:false,
      cleardate:false,
      dtinicial:'',
      dtfinal:'',
      contrato:''
    });
    this.enable_filter = true;
  }

  setHide(){
    this.hide = !this.hide;
    this.hideAcao = this.hide ? "Mostrar" : "Ocultar";
  }

  loadParametros() {
    this.parametro = new ParametroModel();
    this.parametro.id_empresa = this.globalService.getIdEmpresa();
    this.parametro.modulo = this.paramName;
    this.parametro.assinatura = 'V1.00 11/12/2024';
    this.parametro.id_usuario = this.globalService.usuario.id;
    this.parametro.parametro = `
       {
         "dtinicial":"",
         "dtfinal":"",
         "contrato":"",
         "page": 1,
        }`;
      this.setValuesNoParam()
      this.getParametro();
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
    Object(config).dtinicial  = this.parametros.value.dtinicial;
    Object(config).dtfinal    = this.parametros.value.dtfinal;
    Object(config).contrato   = this.parametros.value.contrato;

    this.parametro.parametro  = JSON.stringify(config);
  }

  onChangeParametros(start: boolean = true){
    this.refreshParametro(start);
    if (this.enable_filter){
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


  hasValue(campo: string): boolean {
      if (this.parametros.get(campo)?.value == "") {
        return false;
      }
      return true;
  }

  clearValue(campo: string){
    if (campo == 'cc_descricao'){
        this.parametros.patchValue({
          cc_descricao: "Todos",
          chaves:{
            cc : ""
          }
        })
    }
    if (campo == 'ccnovo_descricao'){
      this.parametros.patchValue({
          ccnovo_descricao: "Todos",
          chaves:{
          cc_novo : ""
          }
      })
    }
    if (campo == 'descricao')
    this.parametros.patchValue({
      descricao: ''
    })
    if (campo == 'observacao')
      this.parametros.patchValue({
        observacao: ''
    })
    if (campo == 'codigo')
      this.parametros.patchValue({
        codigo: ''
    })
    if (campo == 'novo')
      this.parametros.patchValue({
        novo: ''
    })

    if (campo == 'id_principal')
      this.parametros.patchValue({
        id_principal: ''
    })
    this.onChangeParametros();
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


onHoje(event:MatCheckboxChange){

  if (event.checked){
    let hoje:string = new Date(Date.now()).toLocaleString().split(',')[0];
    this.parametros.patchValue({
      dtinicial:hoje ,
      dtfinal:hoje,
      hoje:false
    })
    this.onChangeParametros();
  }


}

onLimpar(event:MatCheckboxChange){
  if (event.checked){
    this.parametros.patchValue({
      dtinicial: '',
      dtfinal:'',
      cleardate:false
    })
  }
  this.onChangeParametros();
}


onPesquisaContrato(){
  this.searchDialogService.openSearchDialogProjetos()
  .beforeClosed()
  .subscribe((data: SeachDialogData) => {

    if (data){
      if (data.retornoTodos){
          this.parametros.patchValue({
            cc_descricao: "Todos",
            chaves:{
              cc : ""
            }
          })
          return;
      }
      if (!data.cancelar){
          this.parametros.patchValue({
            cc_descricao: `${data.retorno.codigo.replace("#","-")}-${data.retorno.descricao}`,
            chaves:{
              cc: data.retorno.codigo
            }
          })
      }

    }
  });

}

}
