import { NgSwitchCase } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feriadoTipo',
})
export class FeriadoTipoPipe implements PipeTransform {
  transform(value: number): string {
    let retorno = '';
    switch (value) {
      case 1:
        retorno = 'FERIADO';
        break;
      case 2:
        retorno = 'ESPECIAL';
        break;
      default:
        retorno = 'ESPECIAL';
        break;
    }
    return retorno;
  }
}
