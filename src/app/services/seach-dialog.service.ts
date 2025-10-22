import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SeachDialogComponent } from '../shared/components/seach-dialog/seach-dialog.component';
import { SeachDialogData } from '../shared/components/seach-dialog/seach-dialog-data';
import { CadastroEnum } from '../shared/enum/cadastro-enum.enum';
import { SeachDialogProjetoData } from '../shared/components/seach-dialog-projeto/seach-dialog-projeto-data';
import { SeachDialogProjetoComponent } from '../shared/components/seach-dialog-projeto/seach-dialog-projeto.component';

@Injectable({
  providedIn: 'root'
})
export class SeachDialogService {

  constructor(private searchDialog:MatDialog) { }

  openSearchDialog(cadastro:CadastroEnum) {
    const data: SeachDialogData = new SeachDialogData();
    data.cadastro      = cadastro;
    data.opcaoTodos    = true;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id    = 'Pesquisa';
    dialogConfig.width = '1200px';
    dialogConfig.height = '650px';
    dialogConfig.data  =  data;
    return  this.searchDialog.open(SeachDialogComponent, dialogConfig);
  }

  openSearchDialogProjetos() {
    const data: SeachDialogProjetoData = new SeachDialogProjetoData();
    data.cadastro      = CadastroEnum.Projeto;
    data.opcaoTodos    = true;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id    = 'Pesquisa';
    dialogConfig.width = '1200px';
    dialogConfig.height = '650px';
    dialogConfig.data  =  data;
    return  this.searchDialog.open(SeachDialogProjetoComponent, dialogConfig);
  }


}
