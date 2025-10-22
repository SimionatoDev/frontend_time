import { Data_Especial_CabModel } from "src/app/models/data_especial_cab-model";

export class DataEspecialData {
    public processar: boolean = false;
    public opcao: number = 0;
    public projeto:number = 900000;
    public especial: Data_Especial_CabModel = new Data_Especial_CabModel();
}
