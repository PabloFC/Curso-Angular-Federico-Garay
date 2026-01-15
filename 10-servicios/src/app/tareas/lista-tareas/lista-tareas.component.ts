import { Component, inject, signal } from '@angular/core';

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
  filtroSeleccionado = signal<string>('todas');

  private tareasService = inject(TareaService);
  tareas = this.tareasService.todasLasTareas;

  onCambiarFiltroTareas(filtro: string) {
    this.filtroSeleccionado.set(filtro);
  }
}
