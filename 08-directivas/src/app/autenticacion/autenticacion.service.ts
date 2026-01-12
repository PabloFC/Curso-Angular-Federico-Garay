import { Injectable, signal } from '@angular/core';

import { Permiso } from './autenticacion.model';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  permisoActivo = signal<Permiso>('invitado');

  autenticar(email: string, clave: string) {
    console.log(email, clave);
    if (email === 'admin@ejemplo.com' && clave === 'admin') {
      this.permisoActivo.set('admin');
    } else if (email === 'usuario@ejemplo.com' && clave === 'usuario') {
      this.permisoActivo.set('usuario');
    } else {
      this.permisoActivo.set('invitado');
    }
  }

  salir() {
    this.permisoActivo.set('invitado');
  }
}
