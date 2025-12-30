import { Component, inject, Input } from '@angular/core';
import { type Tarea } from './tarea.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css',
})
export class TareaComponent {
  @Input({ required: true }) tarea!: Tarea;
  private tareasService = inject(TareasService);

  alCompletarTarea() {
    this.tareasService.eliminarTarea(this.tarea.id);
  }
}
