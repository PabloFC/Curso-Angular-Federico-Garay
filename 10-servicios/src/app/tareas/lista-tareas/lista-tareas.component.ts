import { Component, computed, inject, signal } from '@angular/core';

import { ItemTareaComponent } from './item-tarea/item-tarea.component';
import { TareaService } from '../../tareas.service';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
  imports: [ItemTareaComponent],
})
export class ListaTareasComponent {
  private filtroSeleccionado = signal<string>('todas');

  private tareasService = inject(TareaService);
  tareas = computed(() => {
    switch (this.filtroSeleccionado()) {
      case 'abierta':
        return this.tareasService
          .todasLasTareas()
          .filter((tarea) => tarea.estado === 'ABIERTA');
      case 'en-progreso':
        return this.tareasService
          .todasLasTareas()
          .filter((tarea) => tarea.estado === 'EN_PROGRESO');
      case 'completada':
        return this.tareasService
          .todasLasTareas()
          .filter((tarea) => tarea.estado === 'COMPLETADA');
      default:
        return this.tareasService.todasLasTareas();
    }
  });
  onCambiarFiltroTareas(filtro: string) {
    this.filtroSeleccionado.set(filtro);
  }
}
