import { Injectable } from '@angular/core';
import { NuevaTareaInfo } from './tarea/tarea.model';

@Injectable({ providedIn: 'root' })
export class TareasService {
  private tareas = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen:
        'Apreder todas las características básicas y avanzasAngular cómo apicarlas.',
      expira: '2025-01-01',
    },
    {
      id: 't2',
      idUsuario: 'u3',
      titulo: 'Crear el primer prototipo',
      resumen: 'Crear el primer prototipo del sitio web de la tienda',
      expira: '2025-11-05',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen:
        'Preparar y describir una plantilla de carrito de compras de la tienda online',
      expira: '2025-05-16',
    },
  ];

  obtenerTareasDeUsuario(idUsuario: string) {
    return this.tareas.filter((tarea) => tarea.idUsuario === idUsuario);
  }

  agregarTarea(infoDeTarea: NuevaTareaInfo, idUsuario: string) {
    this.tareas.push({
      id: new Date().getTime().toString(),
      idUsuario: idUsuario,
      titulo: infoDeTarea.titulo,
      resumen: infoDeTarea.resumen,
      expira: infoDeTarea.fecha,
    });
  }

  eliminarTarea(id: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }
}
