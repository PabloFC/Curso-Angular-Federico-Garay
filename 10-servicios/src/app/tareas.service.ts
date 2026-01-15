import { Injectable, signal } from '@angular/core';
import { EstadoTarea, Tarea } from './tareas/tarea.model';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private tareas = signal<Tarea[]>([]);
  todasLasTareas = this.tareas.asReadonly();

  agregarTarea(datosDeTarea: { titulo: string; descripcion: string }) {
    const nuevaTarea: Tarea = {
      ...datosDeTarea,
      id: Math.random().toString(),
      estado: 'ABIERTA',
    };
    this.tareas.update((tareasViejas) => [...tareasViejas, nuevaTarea]);
  }

  actualizarEstadoTarea(tareaId: string, nuevoEstado: EstadoTarea) {
    this.tareas.update((tareasViejas) =>
      tareasViejas.map((tarea) =>
        tarea.id === tareaId ? { ...tarea, estado: nuevoEstado } : tarea
      )
    );
  }
}
