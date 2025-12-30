import { Component, Input } from '@angular/core';
import { TareaComponent } from './tarea/tarea.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { type NuevaTareaInfo } from './tarea/tarea.model';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css',
})
export class TareasComponent {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) nombre!: string;
  estaAgregandoTareaNueva = false;

  constructor(private tareasService: TareasService) {}

  get tareasUsuarioSeleccionado() {
    const tareas = this.tareasService.obtenerTareasDeUsuario(this.idUsuario);
    console.log('ID Usuario:', this.idUsuario);
    console.log('Tareas encontradas:', tareas);
    return tareas;
  }

  alIniciarNuevaTarea() {
    this.estaAgregandoTareaNueva = true;
  }

  alCerrarTareaNueva() {
    this.estaAgregandoTareaNueva = false;
  }
}
