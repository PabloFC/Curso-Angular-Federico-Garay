import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturaPipe implements PipeTransform {
  transform(value: string | number) {
    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    const temperaturaSalida = val + 9 / 5 + 32;
    return `${temperaturaSalida}º F`;
  }
}
