import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, DecimalPipe],
})
export class AppComponent {
  fechaActual = new Date();
  temperaturasActuales = {
    berlin: 4.2749812,
    nuevaYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  temperaturasHistoricas = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  reiniciarTemperatura(indice: number) {
    this.temperaturasHistoricas[indice] = 18;
  }
}
