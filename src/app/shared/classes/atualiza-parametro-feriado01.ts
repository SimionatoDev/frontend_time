import { ParametroFeriado01 } from "src/app/parametros/parametro-feriado01";

export function AtualizaParametroFeriado01(par : ParametroFeriado01 , config : JSON):ParametroFeriado01{

  try {
      let key:number = 0;

      par.id_empresa = 1;


      if (Object(config).data?.trim() !== '') {
        par.data = Object(config).data;
      }

      key = parseInt(Object(config).tipo, 10);

      if (isNaN(key)) {
        par.id_tipo = 0;
      } else {
        par.id_tipo = key;
      }

      key = parseInt(Object(config).nivel, 10);

      if (isNaN(key)) {
        par.id_nivel = 0;
      } else {
        par.id_nivel= key;
      }


      if (Object(config).ano?.trim() !== '') {
        par.ano = Object(config).ano;
      }

      if (Object(config).mes?.trim() !== '') {
        par.mes = Object(config).mes;
      }

      key = parseInt(Object(config).usuario, 10);

      if (isNaN(key)) {
        par.id_usuario = 0;
      } else {
        par.id_usuario= key;
      }

      if (Object(config).grupo?.trim() !== '') {
        par.subconta = Object(config).grupo;
      }

      if (Object(config).atividade?.trim() !== '') {
        par.atividade = Object(config).atividade;
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
