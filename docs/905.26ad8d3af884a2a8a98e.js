"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[905],{1441:(A,l,e)=>{e.d(l,{M:()=>t});class t{constructor(){this.id_empresa=0,this.modulo="",this.assinatura="",this.id_usuario=0,this.parametro="",this.user_insert=0,this.user_update=0}getParametro(){try{return JSON.parse(this.parametro)}catch(s){return JSON.parse('{"mensagem":"error"}')}}setParametro(s){this.parametro=JSON.stringify(s)}}},5062:(A,l,e)=>{e.d(l,{E:()=>t});class t{constructor(){this.id_empresa=0,this.modulo="",this.assinatura="",this.id_usuario=0,this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}},5626:(A,l,e)=>{e.d(l,{u:()=>g});var t=e(2340),m=e(7716),s=e(1841);let g=(()=>{class _{constructor(r){this.http=r,this.apiURL=t.N.apiURL}getParametros(){return this.http.get(`${this.apiURL}parametros`)}getParametrosParametro01(r){return this.http.post(`${this.apiURL}parametros`,r)}getParametro(r,p,u,b){return this.http.get(`${this.apiURL}parametro/${r}/${p}/${u}/${b}`)}ParametroInsert(r){return this.http.post(`${this.apiURL}parametro/`,r)}ParametroUpdate(r){return this.http.put(`${this.apiURL}parametro/`,r)}ParametroAtualiza(r){return this.http.post(`${this.apiURL}atualizarparametro/`,r)}ParametroDelete(r,p,u,b){return this.http.delete(`${this.apiURL}parametro/${r}/${p}/${u}/${b}`)}}return _.\u0275fac=function(r){return new(r||_)(m.LFG(s.eN))},_.\u0275prov=m.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},3430:(A,l,e)=>{e.d(l,{e:()=>t});class t{constructor(s,g){this.tamPagina=s,this.totalRegistros=g,this.paginaInicial=1,this.paginaFinal=1,this.totalPaginas=1,this.setTamPagina(this.tamPagina),this.paginaAtual=1}goFirst(){return this.paginaAtual=this.paginaInicial,this.paginaAtual}goLast(){return this.paginaAtual=this.paginaFinal,this.paginaAtual}nextPage(){this.paginaAtual++,this.paginaAtual>this.paginaFinal&&(this.paginaAtual=this.paginaFinal)}forwardPage(){this.paginaAtual--,this.paginaAtual<1&&(this.paginaAtual=1)}getPaginalAtual(){return this.paginaAtual}getTotalPaginas(){return this.totalPaginas}setTamPagina(s){this.tamPagina=s,this.totalPaginas=this.totalRegistros%this.tamPagina==0?Math.trunc(this.totalRegistros/this.tamPagina):Math.trunc(this.totalRegistros/this.tamPagina)+1,this.paginaFinal=this.totalPaginas}setPaginaAtual(s){this.paginaAtual=s}}},7234:(A,l,e)=>{e.d(l,{C:()=>B});var t=e(7716),m=e(7117),s=e(3032),g=e(8583),_=e(3935),h=e(1095),r=e(1436),p=e(6627);function u(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Copy_Estrutura)}),t.TgZ(1,"mat-icon",9),t._uU(2,"file_copy"),t.qZA(),t.qZA()}}function b(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Visualizar_Estrtura)}),t.TgZ(1,"mat-icon",9),t._uU(2,"fullscreen"),t.qZA(),t.qZA()}}function T(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Sub_Conta)}),t.TgZ(1,"mat-icon",9),t._uU(2,"assignment"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().sub_conta)}}function f(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Consulta)}),t.TgZ(1,"mat-icon",9),t._uU(2,"remove_red_eye"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().consultar)}}function d(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Edicao)}),t.TgZ(1,"mat-icon",9),t._uU(2,"edit"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().alterar)}}function x(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().EdicaoMultipla)}),t.TgZ(1,"mat-icon",9),t._uU(2,"add_comment"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().multi_edicao)}}function C(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Exclusao)}),t.TgZ(1,"mat-icon",9),t._uU(2,"delete"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().excluir)}}function P(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return n.onChangeOpcao(n.getAcoes().Exclusao)}),t.TgZ(1,"mat-icon",9),t._uU(2,"attach_money"),t.qZA(),t.qZA()}if(2&o){const a=t.oxw();t.Q6J("matTooltip",a.getTexto().financeiro)}}function E(o,c){if(1&o&&(t.TgZ(0,"button",13),t.TgZ(1,"mat-icon"),t._uU(2,"more_vert"),t.qZA(),t.qZA()),2&o){t.oxw();const a=t.MAs(11);t.Q6J("matMenuTriggerFor",a)}}function Z(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(a);const n=t.oxw(2);return n.onChangeOpcao(n.getAcoes().EdicaoMultipla)}),t.TgZ(1,"mat-icon"),t._uU(2,"add_comment"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.qZA()}if(2&o){const a=t.oxw(2);t.xp6(4),t.Oqu(a.getTexto().multi_edicao)}}function O(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(a);const n=t.oxw(2);return n.onChangeOpcao(n.getAcoes().Exclusao)}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.qZA()}if(2&o){const a=t.oxw(2);t.xp6(4),t.Oqu(a.getTexto().excluir)}}function v(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onChangeOpcao(99)}),t.TgZ(1,"mat-icon"),t._uU(2,"assignment"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Atividades"),t.qZA(),t.qZA()}}function M(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onChangeOpcao(98)}),t.TgZ(1,"mat-icon"),t._uU(2,"assignment"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Horas Executadas"),t.qZA(),t.qZA()}}function U(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){return t.CHM(a),t.oxw(2).onChangeOpcao(97)}),t.TgZ(1,"mat-icon"),t._uU(2,"attach_money"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Financeiro"),t.qZA(),t.qZA()}}function I(o,c){if(1&o&&(t.YNc(0,Z,5,1,"button",14),t.YNc(1,O,5,1,"button",14),t.YNc(2,v,5,0,"button",14),t.YNc(3,M,5,0,"button",14),t.YNc(4,U,5,0,"button",14)),2&o){const a=t.oxw();t.Q6J("ngIf",a.barra_mult_edicao),t.xp6(1),t.Q6J("ngIf",a.barra_excluir),t.xp6(1),t.Q6J("ngIf",a.barra_atividades),t.xp6(1),t.Q6J("ngIf",a.barra_dashboardv1),t.xp6(1),t.Q6J("ngIf",a.barra_financeiro)}}let B=(()=>{class o{constructor(){this.copy=!1,this.visualizar=!1,this.subconta=!1,this.consulta=!0,this.alterar=!0,this.excluir=!0,this.financeiro=!1,this.mult_edicao=!1,this.barra=!1,this.barra_excluir=!0,this.barra_atividades=!0,this.barra_dashboardv1=!0,this.barra_financeiro=!1,this.barra_mult_edicao=!1,this.changeOpcao=new t.vpe}ngOnInit(){}getTexto(){return m.fd}getAcoes(){return s.I}onChangeOpcao(a){this.changeOpcao.emit(a)}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["barra-acoes"]],inputs:{copy:["COPY_ESTRUTURA","copy"],visualizar:["VISUALIZAR_ESTRUTURA","visualizar"],subconta:["SUBCONTA","subconta"],consulta:["CONSULTAR","consulta"],alterar:["ALTERAR","alterar"],excluir:["EXCLUIR","excluir"],financeiro:["FINACEIRO","financeiro"],mult_edicao:["MULTEDICAO","mult_edicao"],barra:["BARRA_VERTICAL","barra"],barra_excluir:["BARRA_EXCLUIR","barra_excluir"],barra_atividades:["BARRA_ATIVIDADES","barra_atividades"],barra_dashboardv1:["BARRA_DASHBOARDV1","barra_dashboardv1"],barra_financeiro:["BARRA_FINANCEIRO","barra_financeiro"],barra_mult_edicao:["BARRA_MULTEDICAO","barra_mult_edicao"]},outputs:{changeOpcao:"changeOpcao"},decls:13,vars:9,consts:[[1,"barras2"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Copiar A Estrutura","matTooltipPosition","above",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ","class","botoes","matTooltip","Visualizar Estrtutura","matTooltipPosition","above","class","botoes",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ","class","botoes","matTooltipPosition","above",3,"matTooltip","click",4,"ngIf"],["mat-icon-button","","class","botoes","matTooltipPosition","above",3,"matTooltip","click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with share icon ",3,"matMenuTriggerFor",4,"ngIf"],["appMenu","matMenu"],["matMenuContent",""],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Copiar A Estrutura","matTooltipPosition","above",3,"click"],[1,"icon-size"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Visualizar Estrtutura","matTooltipPosition","above",1,"botoes",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above",1,"botoes",3,"matTooltip","click"],["mat-icon-button","","matTooltipPosition","above",1,"botoes",3,"matTooltip","click"],["mat-icon-button","","aria-label","Example icon-button with share icon ",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click",4,"ngIf"],["mat-menu-item","",3,"click"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0),t.YNc(1,u,3,0,"button",1),t.YNc(2,b,3,0,"button",2),t.YNc(3,T,3,1,"button",3),t.YNc(4,f,3,1,"button",3),t.YNc(5,d,3,1,"button",3),t.YNc(6,x,3,1,"button",3),t.YNc(7,C,3,1,"button",4),t.YNc(8,P,3,1,"button",4),t.YNc(9,E,3,1,"button",5),t.TgZ(10,"mat-menu",null,6),t.YNc(12,I,5,5,"ng-template",7),t.qZA(),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngIf",i.copy),t.xp6(1),t.Q6J("ngIf",i.visualizar),t.xp6(1),t.Q6J("ngIf",i.subconta),t.xp6(1),t.Q6J("ngIf",i.consulta),t.xp6(1),t.Q6J("ngIf",i.alterar),t.xp6(1),t.Q6J("ngIf",i.mult_edicao),t.xp6(1),t.Q6J("ngIf",i.excluir),t.xp6(1),t.Q6J("ngIf",i.financeiro),t.xp6(1),t.Q6J("ngIf",i.barra))},directives:[g.O5,_.VK,_.KA,h.lW,r.gM,p.Hw,_.p6,_.OP],styles:[".barras2[_ngcontent-%COMP%]{width:inherit;margin:0 auto;display:grid;grid-template-columns:20% 20% 20% 20%}mat-icon[_ngcontent-%COMP%]{font-size:20px}"]}),o})()},3968:(A,l,e)=>{e.d(l,{J:()=>_});var t=e(7716),m=e(1095),s=e(1436),g=e(6627);let _=(()=>{class h{constructor(){this.change=new t.vpe}ngOnInit(){}getAtual(){return`${this.controlePaginas.getPaginalAtual()}/${this.controlePaginas.getTotalPaginas()}`}firstPage(){this.controlePaginas.goFirst(),this.change.emit("")}lastPage(){this.controlePaginas.goLast(),this.change.emit("")}forwardPage(){this.controlePaginas.forwardPage(),this.change.emit("")}nextPage(){this.controlePaginas.nextPage(),this.change.emit("")}}return h.\u0275fac=function(p){return new(p||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-navegator"]],inputs:{controlePaginas:["controle","controlePaginas"]},outputs:{change:"changePage"},decls:15,vars:1,consts:[[1,"pagina"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","In\xedcio","matTooltipPosition","above",1,"mat-icon-button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Voltar","matTooltipPosition","above",1,"mat-icon-button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Avan\xe7ar","matTooltipPosition","above",1,"mat-icon-button",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Final","matTooltipPosition","above",1,"mat-icon-button",3,"click"]],template:function(p,u){1&p&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t.NdJ("click",function(){return u.firstPage()}),t.TgZ(2,"mat-icon"),t._uU(3,"first_page"),t.qZA(),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return u.forwardPage()}),t.TgZ(5,"mat-icon"),t._uU(6,"chevron_left"),t.qZA(),t.qZA(),t.TgZ(7,"span"),t._uU(8),t.qZA(),t.TgZ(9,"button",3),t.NdJ("click",function(){return u.nextPage()}),t.TgZ(10,"mat-icon"),t._uU(11,"chevron_right"),t.qZA(),t.qZA(),t.TgZ(12,"button",4),t.NdJ("click",function(){return u.lastPage()}),t.TgZ(13,"mat-icon"),t._uU(14,"last_page"),t.qZA(),t.qZA(),t.qZA()),2&p&&(t.xp6(8),t.Oqu(u.getAtual()))},directives:[m.lW,s.gM,g.Hw],styles:[".pagina[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-size:inherit;font-weight:inherit;font:inherit}.pagina[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:2px}"]}),h})()}}]);