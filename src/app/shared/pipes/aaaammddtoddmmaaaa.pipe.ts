import { Pipe, PipeTransform } from '@angular/core';
import { aaaammddddmmaaaa } from '../classes/util';

@Pipe({
  name: 'aaaammddtoddmmaaaa_pipe'
})
export class AaaammddtoddmmaaaaPipe implements PipeTransform {

  transform(value:string): string  {

    if (value === undefined || value.length === 0) {
    return '';
  }

  return aaaammddddmmaaaa(value);

}

}
