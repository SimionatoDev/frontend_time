import { ParametroComparativoRh } from "src/app/parametros/parametro-comparativo-rh";
import { ddmmaaaatoaaaammdd } from "./util";

export function AtualizaParametroComparativoRH(par : ParametroComparativoRh , config : JSON):ParametroComparativoRh
{
  try {
    let key:number = 0;

    par.id_empresa = 1;

    key = parseInt(Object(config).id_usuario, 10);

    if (isNaN(key)) {
      par.id_usuario= 0;
    } else {
      par.id_usuario = key;
    }


    if (Object(config).apontamento1?.trim() !== '') {
      par.apontamento1 = ddmmaaaatoaaaammdd(Object(config).apontamento1);
    }


    if (Object(config).apontamento2?.trim() !== '') {
      par.apontamento2 = ddmmaaaatoaaaammdd(Object(config).apontamento2);
    }



    return par;

} catch(error){
    throw error;
}

}
