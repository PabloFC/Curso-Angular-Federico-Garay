import { Injectable, signal } from '@angular/core';

import { Lugar } from './lugar.model';

@Injectable({
  providedIn: 'root',
})
export class ServicioLugares {
  private lugaresUsuario = signal<Lugar[]>([]);

  lugaresUsuarioCargados = this.lugaresUsuario.asReadonly();

  cargarLugaresDisponibles() {}

  cargarLugaresUsuario() {}

  agregarLugarALugaresUsuario(lugar: Lugar) {}

  eliminarLugarUsuario(lugar: Lugar) {}
}
