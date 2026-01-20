import { Component, input, output } from '@angular/core';

import { Lugar } from './lugar.model';

@Component({
  selector: 'app-lugares',
  standalone: true,
  imports: [],
  templateUrl: './lugares.component.html',
  styleUrl: './lugares.component.css',
})
export class LugaresComponent {
  lugares = input.required<Lugar[]>();
  seleccionarLugar = output<Lugar>();

  alSeleccionarLugar(lugar: Lugar) {
    this.seleccionarLugar.emit(lugar);
  }
}
