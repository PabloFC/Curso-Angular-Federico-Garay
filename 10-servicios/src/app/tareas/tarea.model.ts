export type EstadoTarea = 'ABIERTA' | 'EN_PROGRESO' | 'COMPLETADA';

export interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  estado: EstadoTarea;
} 