import { CadastroEnum } from "../../enum/cadastro-enum.enum";

export class SeachDialogProjetoData {
  public dono:String = "";
  public cadastro: CadastroEnum = CadastroEnum.Projeto;
  public pesquisarPor:Number = 0;
  public ativo:string = "S";
  public opcaoTodos:Boolean = false;
  public retorno?: any = null;
  public retornoTodos:boolean = false;
  public cancelar:Boolean = false;
}
