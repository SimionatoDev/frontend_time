"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[379],{379:(ee,A,i)=>{i.r(A),i.d(A,{GruUserModule:()=>X});var v=i(8583),h=i(4655),l=i(7117),c=i(3032);class O{constructor(){this.id_empresa=0,this.id=0,this.grupo=0,this.pagina=1,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}var b=i(3430),S=i(1441),q=i(5062),g=i(9243),e=i(7716),u=i(3679),P=i(6748),T=i(9189),U=i(789),E=i(5626),G=i(2522),N=i(3968),_=i(1095),j=i(1436),I=i(6627),d=i(8295),F=i(7441),x=i(9983),J=i(2458),k=i(7234);function B(a,n){if(1&a&&(e.TgZ(0,"mat-option",19),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function V(a,n){if(1&a&&(e.TgZ(0,"mat-option",19),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function w(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"div"),e.TgZ(3,"mat-label",20),e._uU(4),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"td"),e.TgZ(6,"div"),e.TgZ(7,"mat-label",20),e._uU(8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"td",21),e.TgZ(10,"barra-acoes",22),e.NdJ("changeOpcao",function(r){const p=e.CHM(t).$implicit;return e.oxw().escolha(r,p)}),e.qZA(),e.qZA(),e.qZA()}if(2&a){const t=n.$implicit;e.xp6(4),e.Oqu(t.id),e.xp6(4),e.Oqu(t.grupo),e.xp6(2),e.Q6J("BARRA_VERTICAL",!0)("BARRA_ATIVIDADES",!1)("EXCLUIR",!1)}}let y=(()=>{class a{constructor(t,o,r,s,p,f,m){this.formBuilder=t,this.globalService=o,this.grupoUserService=r,this.router=s,this.appSnackBar=p,this.parametrosService=f,this.route=m,this.grupos=[],this.opcoesOrdenacao=[],this.opcoesCampo=[],this.tamPagina=50,this.controlePaginas=new b.e(this.tamPagina,0),this.retorno=!1,this.parametro=new S.M,this.parametros=t.group({ordenacao:[null],campo:[null],filtro:[null]}),this.inscricaoRota=m.params.subscribe(W=>{void 0===W.retorno?this.retorno=!1:(this.retorno=!0,this.globalService.estadoFind("grupo-user"))}),this.loadParametros()}ngOnInit(){this.getGruposContador()}ngOnDestroy(){var t,o,r,s;null===(t=this.inscricaoGetAll)||void 0===t||t.unsubscribe(),null===(o=this.inscricaoGetFiltro)||void 0===o||o.unsubscribe(),null===(r=this.inscricaoRota)||void 0===r||r.unsubscribe(),null===(s=this.inscricaoParametro)||void 0===s||s.unsubscribe()}escolha(t,o){if(void 0!==o){let r=this.parametro.getParametro();Object(r).new=!1,Object(r).id_retorno=o.id,Object(r).page=this.controlePaginas.getPaginalAtual(),Object(r).op_ordenacao=this.opcoesOrdenacao.findIndex(s=>this.parametros.value.ordenacao==s),Object(r).op_pesquisar=this.opcoesCampo.findIndex(s=>this.parametros.value.campo==s),Object(r).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(r),this.globalService.estadoSave(this.parametro),this.router.navigate(["users/user",o.id_empresa,o.id,t])}else{let r=this.parametro.getParametro();Object(r).new=!1,Object(r).id_retorno=0,Object(r).page=this.controlePaginas.getPaginalAtual(),Object(r).op_ordenacao=this.opcoesOrdenacao.findIndex(s=>this.parametros.value.ordenacao==s),Object(r).op_pesquisar=this.opcoesCampo.findIndex(s=>this.parametros.value.campo==s),Object(r).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(r),this.globalService.estadoSave(this.parametro),this.router.navigate(["users/user",1,0,t])}}getAcoes(){return c.I}getGrupos(){let t=new O;if(t.id_empresa=this.globalService.getIdEmpresa(),"C\xf3digo"==this.parametros.value.campo){let o=parseInt(this.parametros.value.filtro,10);console.log("key",o),t.id=isNaN(o)?0:o}"Grupo"==this.parametros.value.campo&&(t.grupo=this.parametros.value.filtro.toUpperCase()),t.orderby=this.parametros.value.ordenacao,t.contador="N",t.tamPagina=this.tamPagina,this.globalService.setSpin(!0),this.inscricaoGetFiltro=this.grupoUserService.getGrupoUsers_01(t).subscribe(o=>{this.globalService.setSpin(!1),this.grupos=o,console.log("Grupos",o);const r=this.grupos.findIndex(p=>p.id==(0,l.P0)(this.parametro.getParametro(),"id_retorno"));setTimeout(()=>this.viewPort.scrollToIndex(r),10),this.retorno=!1;let s=this.parametro.getParametro();Object(s).id_retorno=0,Object(s).new=!1,this.parametro.parametro=JSON.stringify(s)},o=>{let r=this.parametro.getParametro();Object(r).id_retorno=0,Object(r).new=!1,this.retorno=!1,this.globalService.setSpin(!1),this.grupos=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Grupos ${(0,l.bZ)(o)}`,"OK")})}getGruposContador(){let t=new O;if(t.id_empresa=this.globalService.getIdEmpresa(),"C\xf3digo"==this.parametros.value.campo){let o=parseInt(this.parametros.value.filtro,10);console.log("key",o),t.id=isNaN(o)?0:o}"Grupo"==this.parametros.value.campo&&(t.grupo=this.parametros.value.filtro.toUpperCase()),t.orderby=this.parametros.value.ordenacao,t.contador="S",t.tamPagina=this.tamPagina,this.globalService.setSpin(!0),this.inscricaoGetFiltro=this.grupoUserService.getGrupoUsers_01(t).subscribe(o=>{if(this.globalService.setSpin(!1),this.controlePaginas=new b.e(this.tamPagina,0==o.total?1:o.total),this.retorno)if((0,l.xc)(this.parametro.getParametro(),"new"))this.controlePaginas.goLast();else{let r=this.parametro.getParametro();this.controlePaginas.setPaginaAtual(Object(r).page)}this.getGrupos()},o=>{this.globalService.setSpin(!1),this.grupos=[],this.controlePaginas=new b.e(this.tamPagina,0),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Grupos de Usu\xe1rios ${(0,l.bZ)(o)}`,"OK")})}setValues(){this.parametros.setValue({ordenacao:this.opcoesOrdenacao[(0,l.P0)(this.parametro.getParametro(),"op_ordenacao")],campo:this.opcoesCampo[(0,l.P0)(this.parametro.getParametro(),"op_pesquisar")],filtro:(0,l.SL)(this.parametro.getParametro(),"descricao")})}getTexto(){return l.fd}onHome(){this.router.navigate([""])}onChangePage(){this.getGrupos()}onChangeParametros(){this.getGruposContador()}onSaveConfig(){this.updateParametros()}loadParametros(){if(this.parametro=new S.M,this.parametro.id_empresa=this.globalService.getIdEmpresa(),this.parametro.modulo="grupo-user",this.parametro.assinatura="V1.00 26/08/23",this.parametro.id_usuario=this.globalService.usuario.id,this.parametro.parametro='\n    {\n      "op_ordenacao": 0,\n      "ordenacao": ["C\xf3digo", "Grupo"],\n      "op_pesquisar": 1,\n      "pesquisar": ["C\xf3digo", "Grupo"],\n      "descricao": "",\n      "page": 1,\n      "new": false,\n      "id_retorno":0\n    }',this.opcoesOrdenacao=(0,l.FO)(this.parametro.getParametro(),"ordenacao"),this.opcoesCampo=(0,l.FO)(this.parametro.getParametro(),"pesquisar"),this.retorno&&null!==this.globalService.estadoFind("grupo-user")){const t=this.globalService.estadoFind("grupo-user");if(null!=t){if((0,l.xc)(t.getParametro(),"new")){let o=this.parametro.getParametro();Object(o).id_retorno=(0,l.P0)(t.getParametro(),"id_retorno"),this.parametro.parametro=JSON.stringify(o),this.setPosicaoInclusao()}else this.controlePaginas.setPaginaAtual((0,l.P0)(t.getParametro(),"page")),this.parametro.setParametro(t.getParametro());this.globalService.estadoDelete(t),this.setValues()}}else this.getParametro()}setPosicaoInclusao(){const t=this.parametro.getParametro();Object(t).op_ordenacao=0,Object(t).op_pesquisar=0,Object(t).descricao="",Object(t).new=!0,this.parametro.setParametro(t)}getParametro(){this.globalService.setSpin(!0);let t=new q.E;t.id_empresa=this.parametro.id_empresa,t.modulo=this.parametro.modulo,t.assinatura=this.parametro.assinatura,t.id_usuario=this.parametro.id_usuario,t.orderby="Usu\xe1rio",this.inscricaoParametro=this.parametrosService.getParametrosParametro01(t).subscribe(o=>{this.globalService.setSpin(!1),this.parametro=new S.M,this.parametro.id_empresa=o[0].id_empresa,this.parametro.modulo=o[0].modulo,this.parametro.id_usuario=o[0].id_usuario,this.parametro.assinatura=o[0].assinatura,this.parametro.parametro=o[0].parametro,this.parametro.user_insert=o[0].user_insert,this.parametro.user_update=o[0].user_update,this.opcoesOrdenacao=(0,l.FO)(this.parametro.getParametro(),"ordenacao"),this.opcoesCampo=(0,l.FO)(this.parametro.getParametro(),"pesquisar"),this.setValues()},o=>{this.globalService.setSpin(!1),this.setValues()})}updateParametros(){this.globalService.setSpin(!0),this.parametro.user_insert=this.globalService.usuario.id,this.parametro.user_update=this.globalService.usuario.id;let t=this.parametro.getParametro();Object(t).op_ordenacao=this.opcoesOrdenacao.findIndex(o=>this.parametros.value.ordenacao==o),Object(t).op_pesquisar=this.opcoesCampo.findIndex(o=>this.parametros.value.campo==o),Object(t).descricao=this.parametros.value.filtro,Object(t).page=0,Object(t).new=!1,this.parametro.parametro=JSON.stringify(t),this.inscricaoParametro=this.parametrosService.ParametroAtualiza(this.parametro).subscribe(o=>{this.globalService.setSpin(!1),this.appSnackBar.openSuccessSnackBar("Par\xe2metros Atualizados","OK")},o=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Grava\xe7\xe3o Dos Parametros ${(0,l.bZ)(o)}`,"OK")})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(u.qu),e.Y36(P.U),e.Y36(T.c),e.Y36(h.F0),e.Y36(U.W),e.Y36(E.u),e.Y36(h.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-crud-grupo-user"]],viewQuery:function(t,o){if(1&t&&e.Gf(g.N7,5),2&t){let r;e.iGM(r=e.CRH())&&(o.viewPort=r.first)}},decls:43,vars:7,consts:[[1,"div-barra"],[1,"example-spacer"],[3,"controle","changePage"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Atualizar","matTooltipPosition","above",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Salvar Par\xe2metros","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Retorno","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above",3,"matTooltip","click"],[1,"parametros"],["autocomplete","off",1,"col-med-4",3,"formGroup"],["field","","appearance","outline",1,"col-max"],["formControlName","ordenacao"],[3,"value",4,"ngFor","ngForOf"],["formControlName","campo"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","filtro","oninput","this.value = this.value.toUpperCase()"],[1,"content",3,"itemSize"],[1,"Browse-Scroll"],[1,"coluna-cabec"],[4,"cdkVirtualFor","cdkVirtualForOf"],[3,"value"],[1,"Browse_Lanc_td"],[1,"acoes"],[3,"BARRA_VERTICAL","BARRA_ATIVIDADES","EXCLUIR","changeOpcao"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"mat-toolbar"),e.TgZ(2,"span",1),e._uU(3,"Grp de Usu\xe1rios: "),e.qZA(),e.TgZ(4,"app-navegator",2),e.NdJ("changePage",function(){return o.onChangePage()}),e.qZA(),e.TgZ(5,"button",3),e.NdJ("click",function(){return o.getGrupos()}),e.TgZ(6,"mat-icon"),e._uU(7,"rotate_right"),e.qZA(),e.qZA(),e.TgZ(8,"button",4),e.NdJ("click",function(){return o.onSaveConfig()}),e.TgZ(9,"mat-icon"),e._uU(10,"brightness_high"),e.qZA(),e.qZA(),e.TgZ(11,"button",5),e.NdJ("click",function(){return o.onHome()}),e.TgZ(12,"mat-icon"),e._uU(13,"home"),e.qZA(),e.qZA(),e.TgZ(14,"button",6),e.NdJ("click",function(){return o.escolha(o.getAcoes().Inclusao)}),e.TgZ(15,"mat-icon"),e._uU(16,"add_circle_outline"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",7),e.TgZ(18,"form",8),e.TgZ(19,"mat-form-field",9),e.TgZ(20,"mat-label"),e._uU(21,"Ordena\xe7\xe3o"),e.qZA(),e.TgZ(22,"mat-select",10),e.YNc(23,B,2,2,"mat-option",11),e.qZA(),e.qZA(),e.TgZ(24,"mat-form-field",9),e.TgZ(25,"mat-label"),e._uU(26,"Pesquisar Por"),e.qZA(),e.TgZ(27,"mat-select",12),e.YNc(28,V,2,2,"mat-option",11),e.qZA(),e.qZA(),e.TgZ(29,"mat-form-field",13),e.TgZ(30,"mat-label"),e._uU(31,"Descri\xe7\xe3o"),e.qZA(),e._UZ(32,"input",14),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"cdk-virtual-scroll-viewport",15),e.TgZ(34,"table",16),e.TgZ(35,"tr",17),e.TgZ(36,"th"),e._uU(37,"Cod."),e.qZA(),e.TgZ(38,"th"),e._uU(39,"Descri\xe7\xe3o"),e.qZA(),e.TgZ(40,"th"),e._uU(41,"A\xc7\xd5ES"),e.qZA(),e.qZA(),e.YNc(42,w,11,5,"tr",18),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("controle",o.controlePaginas),e.xp6(10),e.Q6J("matTooltip",o.getTexto().incluir),e.xp6(4),e.Q6J("formGroup",o.parametros),e.xp6(5),e.Q6J("ngForOf",o.opcoesOrdenacao),e.xp6(5),e.Q6J("ngForOf",o.opcoesCampo),e.xp6(5),e.Q6J("itemSize",50),e.xp6(9),e.Q6J("cdkVirtualForOf",o.grupos))},directives:[G.Ye,N.J,_.lW,j.gM,I.Hw,u._Y,u.JL,u.sg,d.KE,d.hX,F.gD,u.JJ,u.u,v.sg,x.Nt,u.Fj,g.N7,g.xd,g.x0,J.ey,k.C],styles:['.content[_ngcontent-%COMP%]{height:60%;overflow:auto}td[_ngcontent-%COMP%]{font-size:small;color:#00f;font-family:"Times New Roman",Times,serif}tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2aa}tr[_ngcontent-%COMP%]:hover{background-color:#caa99d}.acoes[_ngcontent-%COMP%]{color:#8b0000;width:100px}.go-up[_ngcontent-%COMP%]{margin-top:-10px}']}),a})();var Z=i(4553);class C{constructor(){this.id_empresa=0,this.id=0,this.grupo="",this.user_insert=0,this.user_update=0}}var D=i(9267);function R(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){return e.CHM(t),e.oxw().onSubmit()}),e.TgZ(1,"mat-icon"),e._uU(2,"check"),e.qZA(),e._uU(3),e.qZA()}if(2&a){const t=e.oxw();e.xp6(3),e.hij(" ",t.acao," ")}}function M(a,n){if(1&a&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&a){const t=e.oxw();let o;e.xp6(1),e.Oqu(null==(o=t.formulario.get("grupo"))||null==o.errors?null:o.errors.message)}}const Q=[{path:"",redirectTo:"users",pathMatch:"full"},{path:"users",component:y},{path:"users:/retorno",component:y},{path:"user/:id_empresa/:id/:acao",component:(()=>{class a{constructor(t,o,r,s,p,f){this.formBuilder=t,this.grupoEconomicoService=o,this.globalService=r,this.route=s,this.router=p,this.appSnackBar=f,this.grupo=new C,this.acao="Sem Defini\xe7\xe3o",this.idAcao=c.I.Inclusao,this.readOnly=!0,this.durationInSeconds=2,this.labelCadastro="Agenda Do Auditor",this.formulario=t.group({id:[{value:"",disabled:!0}],grupo:[{value:""},[(0,D.S)(3,20,!0)]]}),this.grupo=new C,this.inscricaoRota=s.params.subscribe(m=>{this.grupo.id_empresa=m.id_empresa,this.grupo.id=m.id,this.idAcao=m.acao,this.setAcao(m.acao)})}ngOnInit(){this.idAcao==c.I.Inclusao?(this.grupo=new C,this.grupo.id_empresa=1):this.getGrupo(),this.setValue()}ngOnDestroy(){var t,o,r;null===(t=this.inscricaoGetGrupo)||void 0===t||t.unsubscribe(),null===(o=this.inscricaoRota)||void 0===o||o.unsubscribe(),null===(r=this.inscricaoAcao)||void 0===r||r.unsubscribe()}onSubmit(){this.formulario.valid?this.executaAcao():this.appSnackBar.openFailureSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK")}setValue(){this.formulario.setValue({id:this.grupo.id,grupo:this.grupo.grupo})}getLabelCancel(){return this.idAcao==c.I.Consulta?"Voltar":"Cancelar"}onRetorno(){const t=this.globalService.estadoFind("grupo-user");if(null!=t){let o=t.getParametro();Object(o).new=this.idAcao==c.I.Inclusao,Object(o).id_retorno=this.grupo.id,t.parametro=JSON.stringify(o),this.globalService.estadoSave(t)}this.router.navigate(["/users/users","SIM"])}onCancel(){const t=this.globalService.estadoFind("grupo-user");if(null!=t){let o=t.getParametro();Object(o).new=!1,Object(o).id_retorno=this.idAcao==c.I.Consulta?this.grupo.id:0,t.parametro=JSON.stringify(o),this.globalService.estadoSave(t)}this.router.navigate(["/users/users","SIM"])}getGrupo(){this.globalService.setSpin(!0),this.inscricaoGetGrupo=this.grupoEconomicoService.getGrupoUser(this.grupo.id_empresa,this.grupo.id).subscribe(t=>{this.globalService.setSpin(!1),this.grupo=t,this.setValue()},t=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Grupos De Usu\xe1rios ${t.error.tabela} - ${t.error.erro} - ${t.error.message}`,"OK")})}setAcao(t){switch(+t){case c.I.Inclusao:this.acao="Gravar",this.labelCadastro="Grupos De Usu\xe1rios - Inclus\xe3o.",this.readOnly=!1;break;case c.I.Edicao:this.acao="Gravar",this.labelCadastro="Grupos De Usu\xe1rios - Altera\xe7\xe3o.",this.readOnly=!1;break;case c.I.Consulta:this.acao="Voltar",this.labelCadastro="Grupos De Usu\xe1rios - Consulta.",this.readOnly=!0;break;case c.I.Exclusao:this.acao="Excluir",this.labelCadastro="Grupos De Usu\xe1rios - Exclus\xe3o.",this.readOnly=!0}}executaAcao(){var t=this;switch(this.grupo.grupo=this.formulario.value.grupo,+this.idAcao){case c.I.Inclusao:this.globalService.setSpin(!1),this.grupo.user_insert=this.globalService.getUsuario().id,this.inscricaoAcao=this.grupoEconomicoService.GrupoUserInsert(this.grupo).subscribe(function(){var o=(0,Z.Z)(function*(r){t.grupo.id=r.id,t.globalService.setSpin(!1),t.onRetorno()});return function(r){return o.apply(this,arguments)}}(),o=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na INclus\xe3o ${o.error.tabela} - ${o.error.erro} - ${o.error.message}`,"OK")});break;case c.I.Edicao:this.globalService.setSpin(!0),this.grupo.user_update=this.globalService.getUsuario().id,this.inscricaoAcao=this.grupoEconomicoService.GrupoUserUpdate(this.grupo).subscribe(function(){var o=(0,Z.Z)(function*(r){t.globalService.setSpin(!1),t.onRetorno()});return function(r){return o.apply(this,arguments)}}(),o=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Altera\xe7\xe3o ${o.error.tabela} - ${o.error.erro} - ${o.error.message}`,"OK")});break;case c.I.Exclusao:this.globalService.setSpin(!0),this.inscricaoAcao=this.grupoEconomicoService.GrupoUserDelete(this.grupo.id_empresa,this.grupo.id).subscribe(function(){var o=(0,Z.Z)(function*(r){t.globalService.setSpin(!1),t.onRetorno()});return function(r){return o.apply(this,arguments)}}(),o=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Exclusao ${o.error.tabela} - ${o.error.erro} - ${o.error.message}`,"OK")})}}getAcoes(){return c.I}touchedOrDirty(t){var o,r;return!(!(null===(o=this.formulario.get(t))||void 0===o?void 0:o.touched)&&!(null===(r=this.formulario.get(t))||void 0===r?void 0:r.dirty))}getValidfield(t){var o,r;return(null===(r=null===(o=this.formulario.get(t))||void 0===o?void 0:o.errors)||void 0===r?void 0:r.ValidatorStringLen)&&this.touchedOrDirty(t)}getMensafield(t){var o,r;return null===(r=null===(o=this.formulario.get(t))||void 0===o?void 0:o.errors)||void 0===r?void 0:r.message}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(u.qu),e.Y36(T.c),e.Y36(P.U),e.Y36(h.gz),e.Y36(h.F0),e.Y36(U.W))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-gru-user-view"]],decls:22,vars:6,consts:[[1,"div-barra"],[1,"example-spacer"],[1,"button-container-right"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["autocomplete","off",3,"formGroup"],[1,"col-med-3"],["appearance","outline",1,"col-max"],["matInput","","formControlName","id"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","grupo","oninput","this.value = this.value.toUpperCase()","autofocus","",3,"readonly"],[4,"ngIf"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"mat-toolbar"),e.TgZ(2,"span",1),e.TgZ(3,"mat-label"),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"div",2),e.YNc(6,R,4,1,"button",3),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.onCancel()}),e.TgZ(8,"mat-icon"),e._uU(9,"cancel"),e.qZA(),e._uU(10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"form",5),e.TgZ(12,"div",6),e.TgZ(13,"mat-form-field",7),e.TgZ(14,"mat-label"),e._uU(15,"C\xd3DIGO"),e.qZA(),e._UZ(16,"input",8),e.qZA(),e.TgZ(17,"mat-form-field",9),e.TgZ(18,"mat-label"),e._uU(19,"Descri\xe7\xe3o Do Grupo"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,M,2,1,"mat-error",11),e.qZA(),e.qZA(),e.qZA()),2&t){let r;e.xp6(4),e.Oqu(o.labelCadastro),e.xp6(2),e.Q6J("ngIf",3!=o.idAcao),e.xp6(4),e.hij(" ",o.getLabelCancel()," "),e.xp6(1),e.Q6J("formGroup",o.formulario),e.xp6(9),e.Q6J("readonly",o.readOnly),e.xp6(1),e.Q6J("ngIf",(null==(r=o.formulario.get("grupo"))||null==r.errors?null:r.errors.ValidatorStringLen)&&o.touchedOrDirty("grupo"))}},directives:[G.Ye,d.hX,v.O5,_.lW,I.Hw,u._Y,u.JL,u.sg,d.KE,x.Nt,u.Fj,u.JJ,u.u,d.TO],styles:[""]}),a})(),canActivate:[i(1759).C]}];let L=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[h.Bz.forChild(Q)],h.Bz]}),a})();var z=i(932),K=i(5426),H=i(4466);let X=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[v.ez,L,K.q,u.u5,g.Cl,u.UX,H.m,z.yI.forChild()]]}),a})()}}]);