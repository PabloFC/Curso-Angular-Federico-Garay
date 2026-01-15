import { Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Tarea, EstadoTarea } from '../../tarea.model';
import { TareaService } from '../../../tareas.service';

@Component({
  selector: 'app-item-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-tarea.component.html',
  styleUrl: './item-tarea.component.css',
})
export class ItemTareaComponent {
  private tareaService = inject(TareaService);
  tarea = input.required<Tarea>();
  estadoTarea = computed(() => {
    switch (this.tarea().estado) {
      case 'ABIERTA':
        return 'Abierta';
      case 'EN_PROGRESO':
        return 'En Progreso';
      case 'COMPLETADA':
        return 'Completada';
      default:
        return 'Abierta';
    }
  });

  onCambiarEstadoTarea(idTarea: string, estado: string) {
    let nuevoEstado: EstadoTarea = 'ABIERTA';

    switch (estado) {
      case 'abierta':
        nuevoEstado = 'ABIERTA';
        break;
      case 'en-progreso':
        nuevoEstado = 'EN_PROGRESO';
        break;
      case 'completada':
        nuevoEstado = 'COMPLETADA';
        break;
      default:
        break;
    }

    this.tareaService.actualizarEstadoTarea(idTarea, nuevoEstado);
  }
}
