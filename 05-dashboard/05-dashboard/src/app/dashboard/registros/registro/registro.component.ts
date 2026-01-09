import { Component, input, output, signal } from '@angular/core';
import { Registro } from '../registro.model';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  informacion = input.required<Registro>({});
  detallesVisibles = signal(false);
  cerrado = output();

  alAlternarDetalles() {
    this.detallesVisibles.set(!this.detallesVisibles());
  }

  AlMarcarComoCopletado() {
    this.cerrado.emit();
  }
}
