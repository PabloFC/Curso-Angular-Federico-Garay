import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturaPipe implements PipeTransform {
  transform(
    value: string | number | null,
    tipoEntrada: 'cel' | 'fah',
    tipoSalida?: 'cel' | 'fah'
  ) {
    if (!value) {
      return value;
    }
    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let temperaturaSalida: number;
    if (tipoEntrada === 'cel' && tipoSalida === 'fah') {
      // prettier-ignore
      temperaturaSalida = (val * 9 / 5) + 32;
    } else if (tipoEntrada === 'fah' && tipoSalida === 'cel') {
      temperaturaSalida = (val - 32) * (5 / 9);
    } else {
      temperaturaSalida = val;
    }

    let simbolo: 'ºF' | 'ºC';
    if (!tipoSalida) {
      simbolo = tipoEntrada === 'cel' ? 'ºC' : 'ºF';
    } else {
      simbolo = tipoSalida === 'cel' ? 'ºC' : 'ºF';
    }
    return `${temperaturaSalida.toFixed(2)} ${simbolo}`;
  }
}
