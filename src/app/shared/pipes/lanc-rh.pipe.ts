import { Pipe, PipeTransform } from '@angular/core';
import { aaaammddddmmaaaa } from '../classes/util';

@Pipe({
  name: 'lanc_rh'
})
export class LancRhPipe implements PipeTransform {

  transform(values: string[]): string {
    let retorno = '';
    let ent_sai = "ENTRADA";

    if (values === undefined || values.length === 0) {
      return retorno;
    };

    for  (let value of values) {

       let apon = value.replace('GMT-0300', '')
       .replace('T', ' ')
       .replace('Z', '') + ' ';

       apon = ent_sai + " " +apon.substring(11, apon.length) ;

       retorno += apon;

       ent_sai = (ent_sai === "ENTRADA") ? "SAIDA" : "ENTRADA";
    };

    return retorno;
  }
}
