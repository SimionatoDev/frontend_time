export class OpcaoGenerica {
  public indice:number = 0;
  public sigla: string = '';
  public descricao: string = '';

  constructor(indice:number,sigla : string,descricao:string){
    this.indice = indice;
    this.sigla = sigla;
    this.descricao = descricao;
  }

}
