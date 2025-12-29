import { NuevaTareaInfo } from './../tarea/tarea.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nueva-tarea.component.html',
  styleUrl: './nueva-tarea.component.css',
})
export class NuevaTareaComponent {
  @Output() cancelar = new EventEmitter<void>();
  @Output() agregar = new EventEmitter<NuevaTareaInfo>();
  tituloIngresado = '';
  resumenIngresado = '';
  fechaIngresada = '';

  alCancelar() {
    this.cancelar.emit();
  }

  alEnviar() {
    this.agregar.emit({
      titulo: this.tituloIngresado,
      resumen: this.resumenIngresado,
      fecha: this.fechaIngresada,
    });
  }
}
