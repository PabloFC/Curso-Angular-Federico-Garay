import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from './tarea.model';
import { TarjetaComponent } from '../../compartida/tarjeta/tarjeta.component';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [TarjetaComponent],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css',
})
export class TareaComponent {
  @Input({ required: true }) tarea!: Tarea;

  @Output() terminada = new EventEmitter<string>();

  alCompletarTarea() {
    this.terminada.emit(this.tarea.id);
  }
}
