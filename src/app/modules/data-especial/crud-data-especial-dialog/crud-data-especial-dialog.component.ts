import { Data_Especial_DetService } from './../../../services/data_especial_det.service';
import { DataEspecialData } from './data-especial-data';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AtividadeQuery_01Model } from 'src/app/Models/atividade-query_01-model';
import { ProjetoModel } from 'src/app/Models/projeto-model';
import { ParametroAtividade01 } from 'src/app/parametros/parametro-atividade01';
import { AtividadesService } from 'src/app/services/atividades.service';
import { GlobalService } from 'src/app/services/global.service';
import { ProjetosService } from 'src/app/services/projetos.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { ddmmaaaatoaaaammdd, messageError } from 'src/app/shared/classes/util';
import { ValidatorDate } from 'src/app/shared/Validators/validator-date';
import { ValidatorStringLen } from 'src/app/shared/Validators/validator-string-len';
import { ParametroListaUsuarioBy_Especial01 } from 'src/app/parametros/Parametro-Lista-Usuario-By_Especial01';
import { Data_Especial_UsuariosModel } from 'src/app/Models/Data_Especial_Usuarios-Model';
import { SelecaoUsuarios } from '../selecao-usuarios';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ViewDataEspecialData } from '../view-data-especial-dialog/view-data-especial-data';
import { ViewDataEspecialDialogComponent } from '../view-data-especial-dialog/view-data-especial-dialog.component';

@Component({
  selector: 'app-crud-data-especial-dialog',
  templateUrl: './crud-data-especial-dialog.component.html',
  styleUrls: ['./crud-data-especial-dialog.component.css']
})
export class CrudDataEspecialDialogComponent implements OnInit {
    inscricaoAcao!: Subscription;
    inscricaoConta!: Subscription;
    inscricaoGrupo!: Subscription;
    inscricaoAtividades!: Subscription;
    inscricaoProjeto!: Subscription;
    inscricaoUsuarios!: Subscription;
    formulario: FormGroup;
    idAcao: number = 0;
    acao: string = '';
    labelCadastro: string = '';
    readOnly: boolean = false;
    gravando: boolean = false;
    focusEntrada: boolean = false;
    focusCancelar: boolean = false;


    contrato: ProjetoModel = new ProjetoModel();

    conta: AtividadeQuery_01Model = new AtividadeQuery_01Model();

    grupo: AtividadeQuery_01Model = new AtividadeQuery_01Model();
    grupos: AtividadeQuery_01Model[] = [];

    atividade: AtividadeQuery_01Model = new AtividadeQuery_01Model();
    atividades: AtividadeQuery_01Model[] = [];

    atividadesDoGrupo:AtividadeQuery_01Model[] = [];

    usuarios:SelecaoUsuarios[] = [];

  constructor(
      private formBuilder: FormBuilder,
      public dialogRef: MatDialogRef<CrudDataEspecialDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data:DataEspecialData ,
      private globalService: GlobalService,
      private appSnackBar: AppSnackbar,
      private projetosService:ProjetosService,
      private atividadesService:AtividadesService,
      private data_Especial_DetService:Data_Especial_DetService,
      private viewDialog: MatDialog,
    ) {
      this.formulario = formBuilder.group({
              id:[{ value: '' }],
              dt_inicial: [{ value: '' }, [ValidatorDate(true)]],
              dt_final:[{ value: '' }, [ValidatorDate(true)]],
              id_grupo: [{ value: '' },
                [Validators.required, ValidatorStringLen(1,15, true)]],
              id_atividade: [
                { value: '' },
                [Validators.required, ValidatorStringLen(1, 15, true)],
              ],
              allday:[{value:''}],
              entrada:[{ value: '' }],
              saida:[{ value: '' }],
              descricao: [{ value: '' }, [ValidatorStringLen(1, 50, true)]],
            });
       }

  ngOnInit(): void {
    this.idAcao = this.data.opcao;
    this.setAcao(this.idAcao);
    this.setValuesNoParam();
    this.getProjeto();
  }


  ngOnDestroy(): void {
    this.inscricaoConta?.unsubscribe();
    this.inscricaoGrupo?.unsubscribe();
    this.inscricaoAtividades?.unsubscribe();
    this.inscricaoProjeto?.unsubscribe();
    this.inscricaoUsuarios?.unsubscribe();
  }

  UsersFunction() {
    if (this.formulario.valid || this.idAcao == CadastroAcoes.Exclusao) {
      this.getUsuarios();
    } else {
      this.formulario.markAllAsTouched();
      this.appSnackBar.openSuccessSnackBar(
        `Formulário Com Campos Inválidos.`,
        'OK'
      );
    }
  }


  actionFunction() {
    if (this.formulario.valid || this.idAcao == CadastroAcoes.Exclusao) {
      this.executaAcao();
    } else {
      this.formulario.markAllAsTouched();
      this.appSnackBar.openSuccessSnackBar(
        `Formulário Com Campos Inválidos.`,
        'OK'
      );
    }
  }


  getConta() {
      let para = new ParametroAtividade01();
      para.id_empresa = this.globalService.getIdEmpresa();
      para.id_projeto = this.data.projeto;
      para.controle = 'S';
      para.orderby = 'projeto';
      para.conta = '90';
      para.nivel = 1;
      para.tipo = 'C';
      this.globalService.setSpin(true);
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
      para.id_projeto = this.data.projeto;
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

  getUsuarios() {
    let gru:string =  this.formulario.value.id_grupo;
    let atividade:string =  this.formulario.value.id_atividade;
    let para = new ParametroListaUsuarioBy_Especial01();
    para.id_empresa = this.globalService.getIdEmpresa();
    para.conta = "";
    para.conta = "";
    para.versao = ""
    para.subconta   = "";
    para.dt_inicial = ddmmaaaatoaaaammdd(this.formulario.value.dt_inicial);
    para.dt_final   = ddmmaaaatoaaaammdd(this.formulario.value.dt_final);
    this.globalService.setSpin(true);
    console.log(para);
      this.globalService.setSpin(true);
      this.inscricaoUsuarios = this.data_Especial_DetService
        .lista_usuario_by_especial(para)
        .subscribe(
          (data: Data_Especial_UsuariosModel[]) => {
            this.globalService.setSpin(false);
            this.usuarios = [];
            data.forEach(usuario =>{
              const usu : SelecaoUsuarios = new SelecaoUsuarios();
              usu.flag = false;
              usu.usuario = usuario;
              this.usuarios.push(usu);
            })
          },
          (error: any) => {
            this.globalService.setSpin(false);
            this.appSnackBar.openSuccessSnackBar(
              `Pesquisa Usuários x Data Especial ${messageError(error)}`,
              'OK'
            );
            this.contrato = new ProjetoModel();
          }
        );
    }

  loadAtividadesByGrupo(){

    let gru:string =  this.formulario.value.id_grupo;

    this.atividadesDoGrupo = this.atividades.filter(atividade => atividade.subconta.substring(0,4) == gru.substring(0,4));

  }


  closeModal() {
    this.dialogRef.close();
  }

  getAcoes() {
    return CadastroAcoes;
  }

  setAcao(op: number) {

    this.focusEntrada = false;
    this.focusCancelar = false;
    switch (+op) {
      case CadastroAcoes.Inclusao:
        this.acao = 'Incluir';
        this.labelCadastro = `Inclusão`;
        this.readOnly = false;
        this.focusEntrada = true;
        break;
      case CadastroAcoes.Edicao:
        this.acao = 'Alterar';
        this.labelCadastro = `Alteração - ${this.data.especial.descricao}`;
        this.readOnly = false;
        this.focusEntrada = true;
        break;
      case CadastroAcoes.Consulta:
        this.acao = 'Voltar';
        this.labelCadastro = `Consulta - ${this.data.especial.descricao}`;
        this.readOnly = true;
        this.focusCancelar = true;
        break;
      case CadastroAcoes.Exclusao:
        this.acao = 'Excluir';
        this.labelCadastro = `Exclusão - ${this.data.especial.descricao}`;
        this.focusEntrada = false;
        this.readOnly = true;
        break;
      default:
        this.acao = '';
        this.labelCadastro = '';
        break;
    }

  }

  executaAcao() {
    /*
    this.data.processar = true;
    let dataDia: Date = new Date();
    dataDia.setTime(Date.parse(this.data.apontamento.inicial));
    this.data.apontamento.inicial = setHorario(
      dataDia,
      getHora(this.formulario.value.entrada),
      getMinuto(this.formulario.value.entrada)
    );
    this.data.apontamento.final = setHorario(
      dataDia,
      getHora(this.formulario.value.saida),
      getMinuto(this.formulario.value.saida)
    );
    this.data.apontamento.horasapon = minutostostohorasexagenal(
      DifHoras(this.data.apontamento.inicial, this.data.apontamento.final)
    );
    this.data.apontamento.id_motivo = this.formulario.value.id_motivo;
    this.data.apontamento.obs = this.formulario.value.obs;
    this.data.apontamento.encerramento = this.formulario.value.encerra
      ? 'S'
      : 'N';
    switch (+this.idAcao) {
      case CadastroAcoes.Edicao:
        this.data.apontamento.user_update = this.globalService.getUsuario().id;
        this.inscricaoAcao = this.aponExecucaoService
          .ApoExecucaoUpdate(this.data.apontamento)
          .subscribe(
            async (data: any) => {
              this.closeModal();
            },
            (error: any) => {
              this.gravando = false;
              console.log('Error', error.error);
              this.appSnackBar.openFailureSnackBar(
                `${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                'OK'
              );
            }
          );
        break;
      case CadastroAcoes.Exclusao:
        this.inscricaoAcao = this.aponExecucaoService
          .ApoExecucaoDelete(
            this.data.apontamento.id_empresa,
            this.data.apontamento.id
          )
          .subscribe(
            async (data: any) => {
              this.closeModal();
            },
            (error: any) => {
              this.gravando = false;
              this.appSnackBar.openFailureSnackBar(
                `Erro Na Exclusao ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                'OK'
              );
            }
          );
        break;
      default:
        break;
    }
        */
  }
  getLabelCancel() {
    if (this.idAcao == CadastroAcoes.Consulta) {
      return 'Voltar';
    } else {
      return 'Cancelar';
    }
  }

setValues() {
  this.formulario.setValue({
  id: this.data.especial.id,
  dt_inicial:this.data.especial.dt_inicial,
  dt_final:this.data.especial.dt_final,
  id_grupo:this.data.especial.subconta.substring(0,4) ,
  id_atividade:this.data.especial.subconta,
  entrada:this.data.especial.entrada ,
  saida:this.data.especial.saida,
  allday:this.data.especial.allday,
  descricao: this.data.especial.descricao
  });
}

setValuesNoParam() {
  this.formulario.setValue({
      id: 0,
      dt_inicial:"",
      dt_final:"",
      id_grupo:"" ,
      id_atividade:"",
      entrada:"00:00" ,
      saida:"00:00",
      allday:false,
      descricao: ""
  });
}


  NoValidtouchedOrDirty(campo: string): boolean {
    if (
      !this.formulario.get(campo)?.valid &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    ) {
      return true;
    }
    return false;
  }


  onChangeGrupo(){

    this.loadAtividadesByGrupo();

    this.formulario.patchValue({id_atividade:''});

  }

  escolha(opcao: number, usuario: SelecaoUsuarios) {
      this.loadEspecialCab();
      this.openViewDataEspecialCabDialog(usuario);
  }

   openViewDataEspecialCabDialog(usuario: SelecaoUsuarios): void {
      const dataView: ViewDataEspecialData = new ViewDataEspecialData();
      dataView.id_usuario          = usuario.usuario.id;
      dataView.razao_usuario       = usuario.usuario.razao;
      dataView.especial.dt_inicial = this.data.especial.dt_inicial;
      dataView.especial.dt_final   = this.data.especial.dt_final;
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.id     = 'consulta-datas-especiais';
      dialogConfig.width  = '60%';
      dialogConfig.height = '60%';
      dialogConfig.data = dataView;
      dialogConfig.disableClose = true;
      const modalDialog = this.viewDialog.open(
        ViewDataEspecialDialogComponent,
        dialogConfig
      )
        .beforeClosed()
        .subscribe((data: DataEspecialData) => {
        });
     }


  inverteSelecao(){
    this.usuarios.forEach(usu => {
      if( usu.usuario.especiais == 0) usu.flag = !usu.flag;
    });
  }


  onChangeIncluir(event:MatCheckboxChange,index:number){
      this.usuarios[index].flag = event.checked;
  }


  loadEspecialCab(){
    this.data.especial.dt_inicial = this.formulario.value.dt_inicial;
    this.data.especial.dt_final   = this.formulario.value.dt_final;
    this.data.especial.subconta   = this.formulario.value.id_atividade;
    this.data.especial.descricao  = this.formulario.value.descricao;
  }



hasValue(campo: string): boolean {
  if (this.formulario.get(campo)?.value == "") {
    return false;
  }
  return true;
}

onCopyValue(){
  this.formulario.patchValue({
    dt_final: this.formulario.value.dt_inicial
  });
}

okUsuarios():boolean{
  let retorno = false;

  for (const usuario of this.usuarios) {
    if (usuario.flag) {
      retorno = true;
      break;
    }
  }

  return retorno;
}


onAllDay(event:MatCheckboxChange){

  if (event.checked){
    this.formulario.patchValue({
      entrada:"00:00" ,
      saida:"00:00",
      allday:true
    });
  }


}

}
