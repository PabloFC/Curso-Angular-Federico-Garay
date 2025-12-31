import { IngresoInversion } from './../ingreso-inversion.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingreso-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ingreso-usuario.component.html',
  styleUrl: './ingreso-usuario.component.css',
})
export class IngresoUsuarioComponent {
  @Output() calcular = new EventEmitter<IngresoInversion>();

  inversionInicialIngresada = '0';
  inversionAnualIngresada = '0';
  rendimientoEsperadoIngresado = '5';
  duracionIngresada = '10';

  alEnviar() {
    this.calcular.emit({
      inversionInicial: +this.inversionInicialIngresada,
      duracion: +this.duracionIngresada,
      rendimientoEsperado: +this.rendimientoEsperadoIngresado,
      inversionAnual: +this.inversionAnualIngresada,
    });
  }
}
