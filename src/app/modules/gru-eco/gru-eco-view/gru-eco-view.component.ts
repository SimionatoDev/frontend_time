import { GrupoEconomicoService } from './../../../services/grupo-economico.service';
import { GrupoEcoModel } from './../../../Models/gru-eco-models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroAcoes } from 'src/app/shared/classes/cadastro-acoes';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidatorStringLen } from 'src/app/shared/Validators/validator-string-len';
import { GlobalService } from 'src/app/services/global.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';

@Component({
  selector: 'app-gru-eco-view',
  templateUrl: './gru-eco-view.component.html',
  styleUrls: ['./gru-eco-view.component.css'],
})
export class GruEcoViewComponent implements OnInit {
  formulario: FormGroup;

  grupo: GrupoEcoModel = new GrupoEcoModel();

  erro: any;

  acao: string = 'Sem Definição';

  idAcao: number = CadastroAcoes.Inclusao;

  readOnly: boolean = true;

  inscricaoGetEmpresa!: Subscription;
  inscricaoRota!: Subscription;
  inscricaoAcao!: Subscription;

  durationInSeconds = 2;

  labelCadastro: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private grupoEconomicoService: GrupoEconomicoService,
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private appSnackBar: AppSnackbar
  ) {
    this.formulario = formBuilder.group({
      id: [{ value: '', disabled: true }],
      razao: [{ value: '' }, [ValidatorStringLen(3, 20, true)]],
    });
    this.grupo = new GrupoEcoModel();
    this.inscricaoRota = route.params.subscribe((params: any) => {
      this.grupo.id_empresa = params.id_empresa;
      this.grupo.id = params.id;
      this.idAcao = params.acao;
      this.setAcao(params.acao);
    });
  }

  ngOnInit(): void {
    if (this.idAcao == CadastroAcoes.Inclusao) {
      this.grupo = new GrupoEcoModel();
      this.grupo.id_empresa = 1;
    } else {
      this.getGrupo();
    }

    this.setValue();
  }

  ngOnDestroy(): void {
    this.inscricaoGetEmpresa?.unsubscribe();
    this.inscricaoRota?.unsubscribe();
    this.inscricaoAcao?.unsubscribe();
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.executaAcao();
    } else {
      this.appSnackBar.openFailureSnackBar(
        `Formulário Com Campos Inválidos.`,
        'OK'
      );
    }
  }

  setValue() {
    this.formulario.setValue({
      id: this.grupo.id,
      razao: this.grupo.razao,
    });
  }

  getLabelCancel() {
    if (this.idAcao == CadastroAcoes.Consulta) {
      return 'Voltar';
    } else {
      return 'Cancelar';
    }
  }

  onCancel() {
    this.router.navigate(['/economicos/economicos']);
  }

  getGrupo() {
    this.globalService.setSpin(true);
    this.inscricaoGetEmpresa = this.grupoEconomicoService
      .getGrupoEco(this.grupo.id_empresa, this.grupo.id)
      .subscribe(
        (data: GrupoEcoModel) => {
          this.globalService.setSpin(false);
          this.grupo = data;
          this.setValue();
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Pesquisa Nas Empresas ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
  }

  setAcao(op: number) {
    switch (+op) {
      case CadastroAcoes.Inclusao:
        this.acao = 'Gravar';
        this.labelCadastro = 'Grupos Econômicos - Inclusão.';
        this.readOnly = false;
        break;
      case CadastroAcoes.Edicao:
        this.acao = 'Gravar';
        this.labelCadastro = 'Grupos Econômicos - Alteração.';
        this.readOnly = false;
        break;
      case CadastroAcoes.Consulta:
        this.acao = 'Voltar';
        this.labelCadastro = 'Grupos Econômicos - Consulta.';
        this.readOnly = true;
        break;
      case CadastroAcoes.Exclusao:
        this.acao = 'Excluir';
        this.labelCadastro = 'Grupos Econômicos - Exclusão.';
        this.readOnly = true;
        break;
      default:
        break;
    }
  }

  executaAcao() {
    this.grupo.razao = this.formulario.value.razao;
    switch (+this.idAcao) {
      case CadastroAcoes.Inclusao:
        this.grupo.user_insert = this.globalService.getUsuario().id;
        this.globalService.setSpin(true);
        this.inscricaoAcao = this.grupoEconomicoService
          .GrupoEcoInsert(this.grupo)
          .subscribe(
            async (data: GrupoEcoModel) => {
              this.globalService.setSpin(false);
              this.onCancel();
            },
            (error: any) => {
              this.globalService.setSpin(false);
              this.appSnackBar.openFailureSnackBar(
                `Erro Na INclusão ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                'OK'
              );
            }
          );
        break;
      case CadastroAcoes.Edicao:
        this.grupo.user_update = this.globalService.getUsuario().id;
        this.inscricaoAcao = this.grupoEconomicoService
          .GrupoEcoUpdate(this.grupo)
          .subscribe(
            async (data: any) => {
              this.globalService.setSpin(false);
              this.onCancel();
            },
            (error: any) => {
              this.globalService.setSpin(false);
              this.appSnackBar.openFailureSnackBar(
                `Erro Na Alteração ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
                'OK'
              );
            }
          );
        break;
      case CadastroAcoes.Exclusao:
        this.globalService.setSpin(true);
        this.inscricaoAcao = this.grupoEconomicoService
          .GrupoEcoDelete(this.grupo.id_empresa, this.grupo.id)
          .subscribe(
            async (data: any) => {
              this.globalService.setSpin(false);
              this.onCancel();
            },
            (error: any) => {
              this.globalService.setSpin(false);
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
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  getAcoes() {
    return CadastroAcoes;
  }

  touchedOrDirty(campo: string): boolean {
    if (
      this.formulario.get(campo)?.touched ||
      this.formulario.get(campo)?.dirty
    ) {
      return true;
    }
    return false;
  }
}
