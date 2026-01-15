import { Component } from '@angular/core';

import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-tareas',
  standalone: true,
  templateUrl: './tareas.component.html',
  imports: [NuevaTareaComponent, ListaTareasComponent],
})
export class TareasComponent {} 