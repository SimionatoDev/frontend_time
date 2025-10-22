import { Data_Especial_CabModel } from "src/app/models/data_especial_cab-model";

export class ViewDataEspecialData
{
    public processar: boolean = false;
    public opcao: number = 0;
    public projeto:number = 900000;
    public id_usuario:number = 0;
    public razao_usuario:string = "";
    public especial: Data_Especial_CabModel = new Data_Especial_CabModel();

}
