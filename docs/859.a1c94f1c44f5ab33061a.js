"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[859],{141:(A,c,e)=>{e.d(c,{n:()=>o});class o{constructor(){this.dia=0,this.horas_plan=0,this.horas_exec=0}}},61:(A,c,e)=>{e.d(c,{o:()=>o});class o{constructor(){this.id_empresa=0,this.id=0,this.id_projeto=0,this.id_conta="",this.id_conta_versao="0101",this.id_subconta="",this.id_subcliente=0,this.id_resp=0,this.id_exec=0,this.id_motivo="",this.produtivo="",this.inicial="",this.final="",this.obs="",this.horasapon=0,this.encerramento="N",this.nlanc=0,this.user_insert=0,this.user_update=0,this.conta_descricao="",this.grupo_descricao="",this.estru_descricao="",this.resp_razao="",this.exec_razao="",this.proj_descricao="",this.motivo_descricao="",this.motivo_produtivo="",this.ativ_inicial="",this.ativ_final="",this.cli_razao=""}}},3563:(A,c,e)=>{e.d(c,{t:()=>o});class o{constructor(){this.id_empresa=0,this.id=0,this.id_projeto=0,this.id_conta="",this.id_subconta="",this.id_resp=0,this.id_exec=0,this.id_dir=0,this.mes="",this.ano="",this.orderby="",this.sharp=!0}}},9648:(A,c,e)=>{e.d(c,{W:()=>o});class o{constructor(){this.id_empresa=0,this.id="",this.id_projeto=0,this.id_conta="",this.id_subconta="",this.id_resp=0,this.id_exec=0,this.id_dir=0,this.data="",this.controle="N",this.orderby="",this.sharp=!0}}},3914:(A,c,e)=>{e.d(c,{V:()=>o});class o{constructor(){this.id_empresa=0,this.codigo="",this.motivo="",this.sintetico="",this.analitico="",this.controle="N",this.pagina=1,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},6468:(A,c,e)=>{e.d(c,{w:()=>o});class o{constructor(){this.id_empresa=0,this.id=0,this.ativo="",this.razao="",this.cnpj_cpf="",this.grupo=[],this.timer="",this.ticket="",this.flag_ponte="",this.data="",this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},4307:(A,c,e)=>{e.d(c,{s:()=>d});var o=e(2340),_=e(7716),h=e(1841);let d=(()=>{class g{constructor(l){this.http=l,this.apiURL=o.N.apiURL}getMotivoApos(){return this.http.get(`${this.apiURL}motivoapos`)}getMotivoApos_01(l){return this.http.post(`${this.apiURL}motivoapos`,l)}getMotivoApo(l,f){return this.http.get(`${this.apiURL}motivoapo/${l}/${f}`)}MotivoApoInsert(l){return this.http.post(`${this.apiURL}motivoapo`,l)}MotivoApoUpdate(l){return this.http.put(`${this.apiURL}motivoapo`,l)}MotivoApoDelete(l,f){return this.http.delete(`${this.apiURL}motivoapo/${l}/${f}`)}}return g.\u0275fac=function(l){return new(l||g)(_.LFG(h.eN))},g.\u0275prov=_.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},8673:(A,c,e)=>{e.d(c,{u:()=>o});class o{constructor(){this.line=[]}}},4453:(A,c,e)=>{e.d(c,{N:()=>o});class o{constructor(){this.dia=0,this.data=new Date,this.semana=0,this.tipo=0,this.horasplanejadas=0,this.horasexecutadas=0,this.descricao="",this.id_projeto=0,this.id_exec=0,this.id_resp=0,this.id_diretor=0}}},2225:(A,c,e)=>{e.d(c,{T:()=>ot});var o=e(9648),_=e(4453),h=e(8583),d=e(7117),g=e(61);class x{constructor(){this.processar=!1,this.opcao=0,this.apontamento=new g.o}}var l=e(2238),f=e(4553),p=e(3679),r=e(3032),v=e(3914),t=e(7716),Z=e(6748),b=e(4307),I=e(789),S=e(8059),U=e(2522),T=e(8295),y=e(9983),D=e(932),N=e(9930),P=e(7539),O=e(1095),q=e(6627);function k(n,u){if(1&n){const a=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onManha()}),t._uU(1,"Manh\xe3"),t.qZA()}}function L(n,u){if(1&n){const a=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onAlmoco()}),t._uU(1,"Almo\xe7o"),t.qZA()}}function H(n,u){if(1&n){const a=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onTarde()}),t._uU(1,"Tarde"),t.qZA()}}function B(n,u){if(1&n){const a=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"mat-toolbar"),t.TgZ(3,"span",3),t._uU(4),t.qZA(),t.TgZ(5,"div"),t.YNc(6,k,2,0,"button",4),t.YNc(7,L,2,0,"button",4),t.YNc(8,H,2,0,"button",4),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",1),t.TgZ(10,"form",5),t.TgZ(11,"div",6),t.TgZ(12,"mat-form-field",7),t.TgZ(13,"mat-label"),t._uU(14,"Entrada"),t.qZA(),t._UZ(15,"input",8),t.qZA(),t.TgZ(16,"mat-form-field",7),t.TgZ(17,"mat-label"),t._uU(18,"Sa\xedda"),t.qZA(),t._UZ(19,"input",9),t.qZA(),t.TgZ(20,"mat-form-field",10),t.TgZ(21,"mat-label"),t._uU(22,"Atividade"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"div",12),t.TgZ(25,"mat-checkbox",13),t._uU(26,"Encerrar Atividade "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"div",14),t.TgZ(28,"mat-form-field",7),t.TgZ(29,"mat-label"),t._uU(30,"Cliente"),t.qZA(),t._UZ(31,"input",15),t.qZA(),t.qZA(),t.TgZ(32,"div",14),t.TgZ(33,"mat-form-field",7),t.TgZ(34,"mat-label"),t._uU(35,"Motivo Apontamento"),t.qZA(),t._UZ(36,"input",16),t.qZA(),t.qZA(),t.TgZ(37,"div",14),t.TgZ(38,"mat-form-field",7),t.TgZ(39,"mat-label"),t._uU(40,"Observa\xe7\xe3o"),t.qZA(),t._UZ(41,"input",17),t.qZA(),t.qZA(),t.TgZ(42,"div",18),t.TgZ(43,"button",19),t.NdJ("click",function(){return t.CHM(a),t.oxw().closeModal()}),t.TgZ(44,"mat-icon"),t._uU(45,"cancel"),t.qZA(),t.TgZ(46,"span"),t._uU(47),t.qZA(),t.qZA(),t.TgZ(48,"button",20),t.NdJ("click",function(){return t.CHM(a),t.oxw().actionFunction()}),t.TgZ(49,"mat-icon"),t._uU(50,"check"),t.qZA(),t.TgZ(51,"span"),t._uU(52),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const a=t.oxw();t.xp6(4),t.Oqu(a.labelCadastro),t.xp6(2),t.Q6J("ngIf",a.idAcao==a.getAcoes().Inclusao||a.idAcao==a.getAcoes().Edicao),t.xp6(1),t.Q6J("ngIf",a.idAcao==a.getAcoes().Inclusao||a.idAcao==a.getAcoes().Edicao),t.xp6(1),t.Q6J("ngIf",a.idAcao==a.getAcoes().Inclusao||a.idAcao==a.getAcoes().Edicao),t.xp6(2),t.Q6J("formGroup",a.formulario),t.xp6(5),t.Q6J("readonly",a.readOnly)("Setfocus",a.focusEntrada),t.xp6(4),t.Q6J("readonly",a.readOnly),t.xp6(6),t.Q6J("disableRipple",!1),t.xp6(11),t.Q6J("readonly",a.readOnly),t.xp6(5),t.Q6J("readonly",a.readOnly),t.xp6(2),t.Q6J("Setfocus",a.focusCancelar),t.xp6(4),t.Oqu(a.getLabelCancel()),t.xp6(1),t.Q6J("disabled",a.gravando),t.xp6(4),t.Oqu(a.acao)}}let w=(()=>{class n{constructor(a,i,s,m,C,M,et){this.formBuilder=a,this.dialogRef=i,this.data=s,this.globalService=m,this.motivoApoService=C,this.appSnackBar=M,this.aponExecucaoService=et,this.idAcao=0,this.acao="",this.labelCadastro="",this.readOnly=!1,this.motivos=[],this.gravando=!1,this.focusEntrada=!1,this.focusCancelar=!1,this.formulario=a.group({entrada:[{value:""},[p.kI.required]],saida:[{value:""},[p.kI.required]],atividade:[{value:""},[p.kI.required]],cliente:[{value:""},[p.kI.required]],motivo:[{value:""},[p.kI.required]],encerra:[{value:""},[p.kI.required]],obs:[{value:""},[p.kI.required,p.kI.maxLength(150)]]})}ngOnInit(){this.getMotivos(),this.idAcao=this.data.opcao,this.setAcao(this.idAcao)}ngOnDestroy(){var a,i;null===(a=this.inscricaoMotivos)||void 0===a||a.unsubscribe(),null===(i=this.inscricaoAcao)||void 0===i||i.unsubscribe()}actionFunction(){this.formulario.valid||this.idAcao==r.I.Exclusao?this.executaAcao():(this.formulario.markAllAsTouched(),this.appSnackBar.openSuccessSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK"))}closeModal(){this.dialogRef.close()}getAcoes(){return r.I}setAcao(a){switch(this.focusEntrada=!1,this.focusCancelar=!1,+a){case r.I.Edicao:this.acao="Gravar",this.labelCadastro=`Altera\xe7\xe3o - ${(0,d.qS)(this.data.apontamento.inicial)}`,this.readOnly=!1,this.focusEntrada=!0;break;case r.I.Consulta:this.acao="Voltar",this.labelCadastro=`Consulta - ${(0,d.qS)(this.data.apontamento.inicial)}`,this.readOnly=!0,this.focusCancelar=!0;break;case r.I.Exclusao:this.acao="Excluir",this.labelCadastro=`Exclus\xe3o - ${(0,d.qS)(this.data.apontamento.inicial)}`,this.focusEntrada=!1,this.readOnly=!0;break;default:this.acao="",this.labelCadastro=""}}executaAcao(){var a=this;this.data.processar=!0;let i=new Date;switch(i.setTime(Date.parse(this.data.apontamento.inicial)),this.data.apontamento.inicial=(0,d.B9)(i,(0,d.Lv)(this.formulario.value.entrada),(0,d.lj)(this.formulario.value.entrada)),this.data.apontamento.final=(0,d.B9)(i,(0,d.Lv)(this.formulario.value.saida),(0,d.lj)(this.formulario.value.saida)),this.data.apontamento.horasapon=(0,d.KB)((0,d.Hh)(this.data.apontamento.inicial,this.data.apontamento.final)),this.data.apontamento.id_motivo=this.formulario.value.id_motivo,this.data.apontamento.obs=this.formulario.value.obs,this.data.apontamento.encerramento=this.formulario.value.encerra?"S":"N",+this.idAcao){case r.I.Edicao:this.data.apontamento.user_update=this.globalService.getUsuario().id,this.inscricaoAcao=this.aponExecucaoService.ApoExecucaoUpdate(this.data.apontamento).subscribe(function(){var s=(0,f.Z)(function*(m){a.closeModal()});return function(m){return s.apply(this,arguments)}}(),s=>{this.gravando=!1,console.log("Error",s.error),this.appSnackBar.openFailureSnackBar(`${s.error.tabela} - ${s.error.erro} - ${s.error.message}`,"OK")});break;case r.I.Exclusao:this.inscricaoAcao=this.aponExecucaoService.ApoExecucaoDelete(this.data.apontamento.id_empresa,this.data.apontamento.id).subscribe(function(){var s=(0,f.Z)(function*(m){a.closeModal()});return function(m){return s.apply(this,arguments)}}(),s=>{this.gravando=!1,this.appSnackBar.openFailureSnackBar(`Erro Na Exclusao ${s.error.tabela} - ${s.error.erro} - ${s.error.message}`,"OK")})}}getLabelCancel(){return this.idAcao==r.I.Consulta?"Voltar":"Cancelar"}setValue(){let a="";const i=this.motivos.filter(s=>s.codigo==this.data.apontamento.id_motivo);i.length>0&&(a=i[0].motivo),this.formulario.setValue({entrada:this.data.apontamento.inicial.substring(this.data.apontamento.inicial.indexOf(" ")+1,16),saida:this.data.apontamento.final.substring(this.data.apontamento.final.indexOf(" ")+1,16),atividade:this.data.apontamento.estru_descricao,cliente:this.data.apontamento.cli_razao,motivo:a,encerra:"S"==this.data.apontamento.encerramento,obs:this.data.apontamento.obs})}getMotivos(){let a=new v.V;a.id_empresa=1,a.analitico="S",a.orderby="C\xf3digo",a.controle="",this.globalService.setSpin(!0),this.inscricaoMotivos=this.motivoApoService.getMotivoApos_01(a).subscribe(i=>{this.globalService.setSpin(!1),this.motivos=i,this.setValue()},i=>{this.globalService.setSpin(!1),this.motivos=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Motivos Apontamentos ${(0,d.bZ)(i)}`,"OK")})}onManha(){this.data.apontamento.inicial=this.data.apontamento.inicial.substring(0,this.data.apontamento.final.indexOf(" ")+1)+this.globalService.getUsuario().man_hora_entrada,this.data.apontamento.final=this.data.apontamento.final.substring(0,this.data.apontamento.final.indexOf(" ")+1)+this.globalService.getUsuario().man_hora_saida,this.formulario.patchValue({entrada:this.data.apontamento.inicial.substring(this.data.apontamento.inicial.indexOf(" ")+1,16),saida:this.data.apontamento.final.substring(this.data.apontamento.final.indexOf(" ")+1,16)})}onTarde(){let a="";a=5==new Date(this.data.apontamento.inicial).getDay()?"16:33":this.globalService.getUsuario().tard_hora_saida,this.data.apontamento.inicial=this.data.apontamento.inicial.substring(0,this.data.apontamento.inicial.indexOf(" ")+1)+this.globalService.getUsuario().tard_hora_entrada,this.data.apontamento.final=this.data.apontamento.final.substring(0,this.data.apontamento.final.indexOf(" ")+1)+a,this.formulario.patchValue({entrada:this.data.apontamento.inicial.substring(this.data.apontamento.inicial.indexOf(" ")+1,16),saida:this.data.apontamento.final.substring(this.data.apontamento.final.indexOf(" ")+1,16)})}onAlmoco(){this.data.apontamento.inicial=this.data.apontamento.inicial.substring(0,this.data.apontamento.inicial.indexOf(" ")+1)+"12:00",this.data.apontamento.final=this.data.apontamento.final.substring(0,this.data.apontamento.final.indexOf(" ")+1)+"13:00",this.formulario.patchValue({entrada:this.data.apontamento.inicial.substring(this.data.apontamento.inicial.indexOf(" ")+1,16),saida:this.data.apontamento.final.substring(this.data.apontamento.final.indexOf(" ")+1,16)})}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(p.qu),t.Y36(l.so),t.Y36(l.WI),t.Y36(Z.U),t.Y36(b.s),t.Y36(I.W),t.Y36(S.A))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-apo-exec-dialog"]],decls:1,vars:1,consts:[["class","padrao",4,"ngIf"],[1,"padrao"],[1,"div-barra"],[1,"example-spacer"],["mat-button","","class","green-icon",3,"click",4,"ngIf"],["autocomplete","off",3,"formGroup"],[1,"col-med-5"],["appearance","outline",1,"col-max"],["matInput","","formControlName","entrada","placeholder","HH:MM","mask","00:00",3,"readonly","Setfocus"],["matInput","","formControlName","saida","placeholder","HH:MM","mask","00:00",3,"readonly"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","atividade","readonly","true","tabindex","-1"],[1,"col-max"],["formControlName","encerra",1,"encerramento",3,"disableRipple"],[1,"col-med-1"],["matInput","","formControlName","cliente","readonly","true","tabindex","-1"],["matInput","","formControlName","motivo","oninput","this.value = this.value.toUpperCase()",3,"readonly"],["matInput","","formControlName","obs","oninput","this.value = this.value.toUpperCase()",3,"readonly"],[1,"button-container-right"],["mat-raised-button","","color","accent",3,"Setfocus","click"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-button","",1,"green-icon",3,"click"]],template:function(a,i){1&a&&t.YNc(0,B,53,15,"div",0),2&a&&t.Q6J("ngIf",99!==i.idAcao)},directives:[h.O5,U.Ye,p._Y,p.JL,p.sg,T.KE,T.hX,y.Nt,p.Fj,D.Z6,p.JJ,p.u,N.b,P.oG,O.lW,q.Hw],styles:[".padrao[_ngcontent-%COMP%]{font-size:14px;padding:5px}"]}),n})();var E=e(5939),J=e(2178);function Y(n,u){1&n&&t._UZ(0,"mat-progress-bar",1)}let j=(()=>{class n{constructor(a){this.globalService=a,this.showSpin=!1,this.globalService.showSpinApontamentosEmitter.subscribe(i=>{this.showSpin=i})}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(Z.U))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-spin-apontamentos"]],decls:1,vars:1,consts:[["mode","indeterminate",4,"ngIf"],["mode","indeterminate"]],template:function(a,i){1&a&&t.YNc(0,Y,1,0,"mat-progress-bar",0),2&a&&t.Q6J("ngIf",i.showSpin)},directives:[h.O5,J.pW],styles:[""]}),n})();var R=e(1436),F=e(1790),$=e(980);function Q(n,u){if(1&n&&(t.TgZ(0,"mat-icon",5),t._uU(1,"border_color"),t.qZA(),t.TgZ(2,"h3"),t._uU(3),t.ALo(4,"horaSexagenal"),t.qZA()),2&n){const a=t.oxw();t.xp6(3),t.hij("Lan\xe7amentos Produtivos (",t.lcZ(4,1,a.totalHoras),")")}}function W(n,u){if(1&n&&(t.TgZ(0,"mat-label"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij("APONTAMENTOS - ",t.xi3(2,1,a.cel.data,"dd/MM/yyyy"),"")}}function K(n,u){1&n&&(t.TgZ(0,"mat-label"),t._uU(1,"Nenhum Apontamento Para Este Dia!"),t.qZA())}function z(n,u){if(1&n&&(t.TgZ(0,"div",6),t.TgZ(1,"mat-toolbar"),t.TgZ(2,"span"),t.YNc(3,W,3,4,"mat-label",7),t.YNc(4,K,2,0,"mat-label",7),t.qZA(),t.qZA(),t.qZA()),2&n){const a=t.oxw();t.xp6(3),t.Q6J("ngIf",a.apontamentos.length>0),t.xp6(1),t.Q6J("ngIf",0==a.apontamentos.length)}}function G(n,u){1&n&&(t.TgZ(0,"th",14),t._uU(1,"ACOES"),t.qZA())}function V(n,u){if(1&n){const a=t.EpF();t.TgZ(0,"td",14),t.TgZ(1,"div"),t.TgZ(2,"button",16),t.NdJ("click",function(){t.CHM(a);const s=t.oxw().$implicit,m=t.oxw(2);return m.onGoLancamento(m.getAcoes().Edicao,s)}),t.TgZ(3,"mat-icon"),t._uU(4,"edit"),t.qZA(),t.qZA(),t.TgZ(5,"button",17),t.NdJ("click",function(){t.CHM(a);const s=t.oxw().$implicit,m=t.oxw(2);return m.onGoLancamento(m.getAcoes().Exclusao,s)}),t.TgZ(6,"mat-icon"),t._uU(7,"delete"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}function X(n,u){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t.TgZ(2,"div"),t.TgZ(3,"mat-label",15),t._uU(4),t.ALo(5,"date"),t.ALo(6,"date"),t.qZA(),t.TgZ(7,"mat-label",15),t._uU(8),t.ALo(9,"horaSexagenal"),t.qZA(),t.qZA(),t.TgZ(10,"div"),t.TgZ(11,"mat-label",15),t._uU(12),t.ALo(13,"firstName"),t.qZA(),t.qZA(),t.TgZ(14,"div"),t.TgZ(15,"mat-label",15),t._uU(16),t.ALo(17,"firstName"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"td"),t.TgZ(19,"div"),t.TgZ(20,"mat-label",15),t._uU(21),t.qZA(),t.qZA(),t.TgZ(22,"div"),t.TgZ(23,"mat-label",15),t._uU(24),t.qZA(),t.qZA(),t.TgZ(25,"div"),t.TgZ(26,"mat-label",15),t._uU(27),t.qZA(),t.qZA(),t.TgZ(28,"div"),t.TgZ(29,"mat-label",15),t._uU(30),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"td"),t.TgZ(32,"div"),t.TgZ(33,"mat-label",15),t._uU(34),t.qZA(),t.qZA(),t.TgZ(35,"div"),t.TgZ(36,"mat-label",15),t._uU(37),t.qZA(),t.qZA(),t.qZA(),t.YNc(38,V,8,0,"td",11),t.qZA()),2&n){const a=u.$implicit,i=t.oxw(2);t.xp6(4),t.AsE("",t.xi3(5,14,a.inicial,"HH:mm")," as ",t.xi3(6,17,a.final,"HH:mm")," "),t.xp6(4),t.Oqu(t.lcZ(9,20,a.horasapon)),t.xp6(4),t.hij("Resp:",t.lcZ(13,22,a.resp_razao),""),t.xp6(4),t.hij("Exec:",t.lcZ(17,24,a.exec_razao),""),t.xp6(5),t.AsE("Contr:(",a.id_projeto,") ",a.cli_razao,""),t.xp6(3),t.Oqu(a.proj_descricao),t.xp6(3),t.AsE("",a.conta_descricao,"/",a.grupo_descricao,""),t.xp6(3),t.Oqu(a.estru_descricao),t.xp6(4),t.Oqu(a.motivo_descricao),t.xp6(3),t.Oqu(a.obs),t.xp6(1),t.Q6J("ngIf",i.Unico)}}function tt(n,u){if(1&n&&(t.TgZ(0,"div",8),t.TgZ(1,"table",9),t.TgZ(2,"tr",10),t.TgZ(3,"th"),t._uU(4,"HOR\xc1RIO"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"CLIENTE/DESCRI\xc7\xc3O/ATIVIDADE"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"MOTIVO/OBS"),t.qZA(),t.YNc(9,G,2,0,"th",11),t.qZA(),t.YNc(10,X,39,26,"tr",12),t.qZA(),t._UZ(11,"div",13),t.qZA()),2&n){const a=t.oxw();t.xp6(9),t.Q6J("ngIf",a.Unico),t.xp6(1),t.Q6J("ngForOf",a.apontamentos)}}function at(n,u){if(1&n&&(t.TgZ(0,"mat-icon",18),t._uU(1," attach_money"),t.qZA(),t.TgZ(2,"h3"),t._uU(3),t.ALo(4,"horaSexagenal"),t.qZA()),2&n){const a=t.oxw();t.xp6(3),t.hij("Lan\xe7amentos Banco e F\xe9rias (",t.lcZ(4,1,a.totalHorasBanco),")")}}let ot=(()=>{class n{constructor(a,i,s,m){this.datePipe=a,this.aponExecucaoService=i,this.globslService=s,this.apoExecDialogComponent=m,this.Unico=!1,this.cel=new _.N,this.apontamentos=[],this.apontamentosBanco=[],this.totalHoras=0,this.totalHorasBanco=0,this.globslService.refreshLan\u00e7amentos.subscribe(C=>{this.cel=C,3==this.cel.tipo||0==this.cel.semana?this.apontamentos=[]:(this.getExecutados(),this.getApontamentosBancoHoras())})}ngOnInit(){}ngOnDestroy(){var a,i;null===(a=this.inscricaoExecutadas)||void 0===a||a.unsubscribe(),null===(i=this.inscricaoBancoHoras)||void 0===i||i.unsubscribe()}showDadosProjetoApontamento(a){let i="";return i=`Projeto: ${a.id_projeto} Descricao: ${a.proj_descricao} Resp.: ${a.resp_razao}`,i}getExecutados(){const a=new o.W;let i=this.datePipe.transform(this.cel.data,"yyyy-MM-dd");i||(i=""),a.id_empresa=this.globslService.getIdEmpresa(),a.id_resp=this.cel.id_resp,a.id_exec=this.cel.id_exec,a.id_dir=this.cel.id_diretor,a.data=i,a.orderby="Executor",a.controle="N",this.globslService.setSpinApontamentos(!0),this.inscricaoExecutadas=this.aponExecucaoService.getApoExecucoes_01(a).subscribe(s=>{this.globslService.setSpinApontamentos(!1),this.apontamentos=s,this.totalHoras=0,this.apontamentos.forEach(m=>{this.totalHoras=this.totalHoras+Number(m.horasapon)})},s=>{this.globslService.setSpinApontamentos(!1),this.apontamentos=[]})}getApontamentosBancoHoras(){const a=new o.W;let i=this.datePipe.transform(this.cel.data,"yyyy-MM-dd");i||(i=""),a.id_empresa=this.globslService.getIdEmpresa(),a.id_resp=this.cel.id_resp,a.id_exec=this.cel.id_exec,a.id_dir=this.cel.id_diretor,a.data=i,a.orderby="Executor",a.controle="S",this.globslService.setSpinApontamentos(!0),this.inscricaoExecutadas=this.aponExecucaoService.getApoExecucoes_01(a).subscribe(s=>{this.globslService.setSpinApontamentos(!1),this.apontamentosBanco=s,this.totalHorasBanco=0,this.apontamentosBanco.forEach(m=>{this.totalHorasBanco=this.totalHorasBanco+Number(m.horasapon)})},s=>{this.globslService.setSpinApontamentos(!1),this.apontamentosBanco=[],this.totalHorasBanco=0})}getfirstName(a){return(0,d.S4)(a)}onGoLancamento(a,i){this.openApoExecDialog(a,i)}getAcoes(){return r.I}openApoExecDialog(a,i){const s=new x;s.apontamento=i,s.opcao=a;const m=new l.vA;m.disableClose=!0,m.id="apontamento",m.width="900px",m.data=s,this.apoExecDialogComponent.open(w,m).beforeClosed().subscribe(M=>{this.getExecutados(),this.globslService.setRefreshCabec(this.cel)})}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(h.uU),t.Y36(S.A),t.Y36(Z.U),t.Y36(l.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cel-apontamentos-execucao"]],inputs:{Unico:["UNICO","Unico"]},features:[t._Bn([h.uU])],decls:12,vars:2,consts:[["mat-tab-label",""],[1,"moldura"],["class","div-barra",4,"ngIf"],[1,"spin"],["class","box",4,"ngIf"],[1,"example-tab-icon","red-icon"],[1,"div-barra"],[4,"ngIf"],[1,"box"],[1,"Browse_Lanc"],[1,"coluna-cabec"],["class","acoes",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"rodape"],[1,"acoes"],[1,"Browse_Lanc_td"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Alterar Apontamento","matTooltipPosition","above",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Excluir Apontamento","matTooltipPosition","above",1,"example-icon",3,"click"],[1,"example-tab-icon","blue-icon"]],template:function(a,i){1&a&&(t.TgZ(0,"mat-tab-group"),t.TgZ(1,"mat-tab"),t.YNc(2,Q,5,3,"ng-template",0),t.TgZ(3,"div",1),t.YNc(4,z,5,2,"div",2),t.TgZ(5,"div",3),t._UZ(6,"app-spin-apontamentos"),t.qZA(),t.TgZ(7,"div"),t.YNc(8,tt,12,2,"div",4),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"mat-tab"),t.YNc(10,at,5,3,"ng-template",0),t._UZ(11,"div",1),t.qZA(),t.qZA()),2&a&&(t.xp6(4),t.Q6J("ngIf",i.cel.dia>0),t.xp6(4),t.Q6J("ngIf",i.apontamentos.length>0))},directives:[E.SP,E.uX,E.uD,h.O5,j,q.Hw,U.Ye,T.hX,h.sg,O.lW,R.gM],pipes:[F.X,h.uU,$.z],styles:["tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2aa}tr[_ngcontent-%COMP%]:hover{background-color:#caa99d}"]}),n})()},7094:(A,c,e)=>{e.d(c,{H:()=>p});var o=e(7716),_=e(8583),h=e(1769),d=e(8295),g=e(1436),x=e(1790);function l(r,v){1&r&&o._UZ(0,"mat-divider")}function f(r,v){if(1&r){const t=o.EpF();o.TgZ(0,"div",3),o.TgZ(1,"mat-label",4),o.NdJ("click",function(){return o.CHM(t),o.oxw().onClickPlanejado()}),o._uU(2),o.ALo(3,"horaSexagenal"),o.qZA(),o.TgZ(4,"mat-label",5),o.NdJ("click",function(){return o.CHM(t),o.oxw().onClickExecutado()}),o._uU(5),o.ALo(6,"horaSexagenal"),o.qZA(),o.qZA()}if(2&r){const t=o.oxw();o.xp6(2),o.Oqu(o.lcZ(3,2,t.Celula.horasplanejadas)),o.xp6(3),o.Oqu(o.lcZ(6,4,t.Celula.horasexecutadas))}}let p=(()=>{class r{constructor(){this.changeDay=new o.vpe}ngOnInit(){}getClasse(){return 3==this.Celula.tipo?"formata-dia-semana_3":"formata-dia-semana_1"}onClickDia(){this.changeDay.emit(this.Celula)}onClickPlanejado(){}onClickExecutado(){}show(){return!0}showHoras(){return 1==this.Celula.tipo&&this.Celula.horasexecutadas+this.Celula.horasplanejadas>0}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-cel-calendar"]],inputs:{Celula:["celula","Celula"]},outputs:{changeDay:"onClickDay"},decls:6,vars:4,consts:[[3,"ngClass","click"],[4,"ngIf"],["div","","class","col-med-2",4,"ngIf"],["div","",1,"col-med-2"],["matTooltip","Horas Planejadas","matTooltipPosition","above",1,"cor-planejada",3,"click"],["matTooltip","Horas Executadas","matTooltipPosition","above",1,"cor-executada",3,"click"]],template:function(t,Z){1&t&&(o.TgZ(0,"div"),o.TgZ(1,"div"),o.TgZ(2,"label",0),o.NdJ("click",function(){return Z.onClickDia()}),o._uU(3),o.qZA(),o.qZA(),o.YNc(4,l,1,0,"mat-divider",1),o.YNc(5,f,7,6,"div",2),o.qZA()),2&t&&(o.xp6(2),o.Q6J("ngClass",Z.getClasse()),o.xp6(1),o.Oqu(Z.Celula.dia),o.xp6(1),o.Q6J("ngIf",1==Z.Celula.tipo),o.xp6(1),o.Q6J("ngIf",Z.showHoras()))},directives:[_.mk,_.O5,h.d,d.hX,g.gM],pipes:[x.X],styles:[".format-dia-semana[_ngcontent-%COMP%]{color:#000;cursor:pointer}.formata-dia-semana_1[_ngcontent-%COMP%]{color:#000;cursor:pointer}.formata-dia-semana_2[_ngcontent-%COMP%]{color:#ff0;cursor:pointer}.formata-dia-semana_3[_ngcontent-%COMP%]{color:gray;cursor:pointer}.cor-planejada[_ngcontent-%COMP%]{color:green;cursor:pointer}.cor-executada[_ngcontent-%COMP%]{color:red;cursor:pointer}"]}),r})()},9930:(A,c,e)=>{e.d(c,{b:()=>_});var o=e(7716);let _=(()=>{class h{constructor(g,x){this.hostElement=g,this.renderer=x,this.isFocused=!1}ngOnInit(){this.isFocused&&this.renderer.selectRootElement(this.hostElement.nativeElement).focus()}}return h.\u0275fac=function(g){return new(g||h)(o.Y36(o.SBq),o.Y36(o.Qsj))},h.\u0275dir=o.lG2({type:h,selectors:[["","Setfocus",""]],inputs:{isFocused:["Setfocus","isFocused"]}}),h})()},4553:(A,c,e)=>{function o(h,d,g,x,l,f,p){try{var r=h[f](p),v=r.value}catch(t){return void g(t)}r.done?d(v):Promise.resolve(v).then(x,l)}function _(h){return function(){var d=this,g=arguments;return new Promise(function(x,l){var f=h.apply(d,g);function p(v){o(f,x,l,p,r,"next",v)}function r(v){o(f,x,l,p,r,"throw",v)}p(void 0)})}}e.d(c,{Z:()=>_})}}]);