import { ShowClienteDialogComponent } from './components/show-cliente-dialog/show-cliente-dialog.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SpinsComponent } from './spins/spins.component';
import { VersaoPipe } from './pipes/versao-pipe';
import { CelApontamentosComponent } from './components/cel-apontamentos/cel-apontamentos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './components/form-debug/form-debug.component';
import { HoraSexagenalPipe } from './pipes/hora-sexagenal.pipe';
import { SimNaoPipe } from './pipes/sim-nao.pipe';
import { SituacaoTarefaTrabalhoPipe } from './pipes/situacao-Atividade-Projeto.pipe';
import { SituacaoTrabalhoProjetoPipe } from './pipes/situacao-trabalho-projeto.pipe';
import { SituacaoProjetoPipe } from './pipes/situacao-projeto.pipe';
import { SubcontaPipe } from './pipes/subconta.pipe';
import { TipoContaPipe } from './pipes/tipo-conta.pipe';
import { SoHorasPipe } from './pipes/so-horas.pipe';
import { SituacaoPadraoPipe } from './pipes/situacao-padrao.pipe';
import { SharedNavegatorComponent } from './components/shared-navegator/shared-navegator.component';
import { MaterialModule } from '../material/material.module';
import { CelCalendarComponent } from './components/cel-calendar/cel-calendar.component';
import { AtivoPipe } from './pipes/ativo.pipe';
import { QuestionDialogComponent } from './components/question-dialog/question-dialog.component';
import { JustificativaPeriodoDialogComponent } from './components/justificativa-periodo-dialog/justificativa-periodo-dialog.component';
import { JustificativaRespexecDialogComponent } from './components/justificativa-respexec-dialog/justificativa-respexec-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeriodoDialogComponent } from './components/periodo-dialog/periodo-dialog.component';
import { RespExecDialogComponent } from './components/resp-exec-dialog/resp-exec-dialog.component';
import { CelApontamentosExecucaoComponent } from './components/cel-apontamentos-Execucao/cel-apontamentos-execucao.component';
import { SetfocusDirective } from './components/setfocus.directive';
import { SpinApontamentosComponent } from './spin-apontamentos/spin-apontamentos.component';
import { BarraParametrosv01Component } from './components/barra-parametrosv01/barra-parametrosv01.component';
import { CorStatusProjDirective } from './diretivas/cor-status-proj.directive';
import { BarraParametrosv02Component } from './components/barra-parametrosv02/barra-parametrosv02.component';
import { ParamAuditorComponent } from './components/param-auditor/param-auditor.component';
import { ParamCoordenadorComponent } from './components/param-coordenador/param-coordenador.component';
import { ParamDiretorComponent } from './components/param-diretor/param-diretor.component';
import { BarraAcoesComponent } from './components/barra-acoes/barra-acoes.component';
import { CnpjCpfPipe } from './pipes/cnpj-cpf.pipe';
import { FeriadoTipoPipe } from './pipes/feriado-tipo.pipe';
import { FeriadoNivelPipe } from './pipes/feriado-nivel.pipe';
import { FirstNamePipe } from './pipes/first-name.pipe';
import { ApoExecDialogComponent } from './components/apo-exec-dialog/apo-exec-dialog.component';
import { NgxMaskModule } from 'ngx-mask';
import { CadastroAcoesPipe } from './pipes/cadastro-acoes.pipe';
import { CorUltimosProjetosDirective } from './diretivas/cor-ultimos-projetos.directive';
import { SaldoComponent } from './components/saldo/saldo.component';
import { ParametroMod01Component } from './components/parametro-mod01/parametro-mod01.component';
import { SeachDialogComponent } from './components/seach-dialog/seach-dialog.component';
import { SeachDialogProjetoComponent } from './components/seach-dialog-projeto/seach-dialog-projeto.component';
import { FiltroDatasEspeciaisComponent } from './components/filtro-datas-especiais/filtro-datas-especiais.component';
import { DownloadDialogComponent } from './components/download-dialog/download-dialog.component';
import { EmailDialogComponent } from './components/email-dialog/email-dialog.component';
import { UsuarioFormatadoPipe } from './pipes/usuario-formatado.pipe';
import { LancRhPipe } from './pipes/lanc-rh.pipe';
import { AaaammddtoddmmaaaaPipe } from './pipes/aaaammddtoddmmaaaa.pipe';
import { FiltroComparativoComponent } from './components/filtro-comparativo/filtro-comparativo.component';

@NgModule({
  declarations: [
    FormDebugComponent,
    HoraSexagenalPipe,
    SimNaoPipe,
    SituacaoTarefaTrabalhoPipe,
    SituacaoTrabalhoProjetoPipe,
    SituacaoProjetoPipe,
    SubcontaPipe,
    TipoContaPipe,
    SoHorasPipe,
    VersaoPipe,
    SituacaoPadraoPipe,
    SharedNavegatorComponent,
    CelCalendarComponent,
    CelApontamentosComponent,
    CelApontamentosExecucaoComponent,
    AtivoPipe,
    CadastroAcoesPipe,
    SpinsComponent,
    SpinApontamentosComponent,
    CnpjCpfPipe,
    FeriadoNivelPipe,
    FeriadoTipoPipe,
    FirstNamePipe,
    LancRhPipe,
    AaaammddtoddmmaaaaPipe,
    UsuarioFormatadoPipe,
    ProgressBarComponent,
    QuestionDialogComponent,
    JustificativaRespexecDialogComponent,
    JustificativaPeriodoDialogComponent,
    PeriodoDialogComponent,
    RespExecDialogComponent,
    ShowClienteDialogComponent,
    SetfocusDirective,
    BarraParametrosv01Component,
    CorUltimosProjetosDirective,
    CorStatusProjDirective,
    BarraParametrosv02Component,
    ParamAuditorComponent,
    ParamCoordenadorComponent,
    ParamDiretorComponent,
    BarraAcoesComponent,
    ApoExecDialogComponent,
    SaldoComponent,
    SeachDialogComponent,
    ParametroMod01Component,
    SeachDialogProjetoComponent,
    FiltroDatasEspeciaisComponent,
    DownloadDialogComponent,
    EmailDialogComponent,
    FiltroComparativoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ],
  exports: [
    FormDebugComponent,
    HoraSexagenalPipe,
    SimNaoPipe,
    SituacaoTarefaTrabalhoPipe,
    SituacaoTrabalhoProjetoPipe,
    SituacaoProjetoPipe,
    SubcontaPipe,
    TipoContaPipe,
    VersaoPipe,
    SoHorasPipe,
    AtivoPipe,
    CnpjCpfPipe,
    LancRhPipe,
    SituacaoPadraoPipe,
    FeriadoNivelPipe,
    FeriadoTipoPipe,
    FirstNamePipe,
    CadastroAcoesPipe,
    UsuarioFormatadoPipe,
    AaaammddtoddmmaaaaPipe,
    SharedNavegatorComponent,
    CelCalendarComponent,
    CelApontamentosComponent,
    CelApontamentosExecucaoComponent,
    SpinsComponent,
    SpinApontamentosComponent,
    ProgressBarComponent,
    QuestionDialogComponent,
    JustificativaRespexecDialogComponent,
    JustificativaPeriodoDialogComponent,
    PeriodoDialogComponent,
    RespExecDialogComponent,
    ShowClienteDialogComponent,
    SetfocusDirective,
    BarraParametrosv01Component,
    BarraParametrosv02Component,
    ParamAuditorComponent,
    ParamCoordenadorComponent,
    ParamDiretorComponent,
    CorStatusProjDirective,
    CorUltimosProjetosDirective,
    BarraAcoesComponent,
    SaldoComponent,
    SeachDialogComponent,
    ParametroMod01Component,
    FiltroDatasEspeciaisComponent,
    EmailDialogComponent,
    EmailDialogComponent,
    FiltroComparativoComponent
  ],
})
export class SharedModule {}
