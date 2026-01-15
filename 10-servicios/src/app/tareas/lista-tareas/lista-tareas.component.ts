import { Component, signal } from '@angular/core';

import { ItemTareaComponent } from './item-tarea/item-tarea.component';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
  imports: [ItemTareaComponent],
})
export class ListaTareasComponent {
  filtroSeleccionado = signal<string>('todas');
  tareas = [];

  onCambiarFiltroTareas(filtro: string) {
    this.filtroSeleccionado.set(filtro);
  }
} 