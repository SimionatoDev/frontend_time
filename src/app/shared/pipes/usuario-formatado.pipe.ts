import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuarioformatado'
})
export class UsuarioFormatadoPipe implements PipeTransform {

  transform(id_usuario: number, nome_usuario: string): string {
    if (id_usuario === 0) {
      return '';
    }
    return `${id_usuario}-${nome_usuario}=> Deu Certo ?`;
  }

}
