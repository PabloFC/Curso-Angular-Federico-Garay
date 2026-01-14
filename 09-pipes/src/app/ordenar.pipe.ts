import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar',
  standalone: true,
})
export class OrdenarPipe implements PipeTransform {
  transform(value: string[] | number[], direccion: 'asc' | 'desc' = 'asc') {
    const arrayOrdenado = [...value];

    arrayOrdenado.sort((a, b) => {
      if (direccion === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return a > b ? -1 : 1;
      }
    });

    return arrayOrdenado;
  }
}
