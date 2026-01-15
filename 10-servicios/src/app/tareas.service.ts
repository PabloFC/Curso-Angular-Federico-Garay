import { Injectable, signal } from '@angular/core';
import { Tarea } from './tareas/tarea.model';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  tareas = signal<Tarea[]>([]);

  agregarTarea(datosDeTarea: { titulo: string; descripcion: string }) {
    const nuevaTarea: Tarea = {
      ...datosDeTarea,
      id: Math.random().toString(),
      estado: 'ABIERTA',
    };
    this.tareas.update((tareasViejas) => [...tareasViejas, nuevaTarea]);
  }
}
