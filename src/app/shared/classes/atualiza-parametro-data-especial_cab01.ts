import { ParametroData_Especial_Cab01 } from "src/app/parametros/parametro-data_especial_cab01";


export function AtualizaParametroDataEspecial_cab01(par : ParametroData_Especial_Cab01 , config : JSON):ParametroData_Especial_Cab01
{
  try {
    let key:number = 0;

    par.id_empresa = 1;

    key = parseInt(Object(config).id, 10);

    if (isNaN(key)) {
      par.id= 0;
    } else {
      par.id = key;
    }


    if (Object(config).data?.trim() !== '') {
      par.dt_inicial = Object(config).data;
    }


    if (Object(config).descricao?.trim() !== '') {
      par.descricao = Object(config).descricao;
    }

    if (Object(config).OrderBy?.trim() !== '') {
      par.orderby = Object(config).orderby;
    }

    return par;

} catch(error){
    throw error;
}

}
