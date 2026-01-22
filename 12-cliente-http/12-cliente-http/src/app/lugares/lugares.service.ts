import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';

import { Lugar } from './lugar.model';
import { ErrorService } from '../compartido/error.service';

@Injectable({
  providedIn: 'root',
})
export class ServicioLugares {
  private httpClient = inject(HttpClient);
  private lugaresUsuario = signal<Lugar[]>([]);
  private errorService = inject(ErrorService);

  lugaresUsuarioCargados = this.lugaresUsuario.asReadonly();

  private traerLugares(url: string, mensajeError: string) {
    return this.httpClient.get<{ lugares: Lugar[] }>(url).pipe(
      map((datosrespuesta) => datosrespuesta.lugares),
      catchError((error) => {
        console.log(error.message);
        return throwError(() => new Error(mensajeError));
      }),
    );
  }

  cargarLugaresDisponibles() {
    return this.traerLugares(
      'http://localhost:3000/lugares',
      'Algo salio mal al obtener los lugares',
    );
  }

  cargarLugaresUsuario() {
    return this.traerLugares(
      'http://localhost:3000/lugares-usuario',
      'Algo salio mal al obtener los lugares favoritos',
    ).pipe(
      tap({
        next: (lugaresUsuario) => this.lugaresUsuario.set(lugaresUsuario),
      }),
    );
  }

  agregarLugarALugaresUsuario(lugar: Lugar) {
    const lugaresAntiguos = this.lugaresUsuario();
    if (!lugaresAntiguos.some((l) => l.id === lugar.id)) {
      this.lugaresUsuario.set([...lugaresAntiguos, lugar]);
    }
    return this.httpClient
      .put('http://localhost:3000/lugares-usuario', {
        lugarId: lugar.id,
      })
      .pipe(
        catchError((error) => {
          this.lugaresUsuario.set(lugaresAntiguos);
          this.errorService.mostrarerror(
            'No se pudo guardar el lugar seleccionado',
          );
          return throwError(
            () => new Error('No se pudo guardar el lugar seleccionado'),
          );
        }),
      )
      .subscribe({
        next: (datosRespuesta) => console.log(datosRespuesta),
      });
  }

  eliminarLugarUsuario(lugar: Lugar) {
    const lugaresAntiguos = this.lugaresUsuario();
    if (lugaresAntiguos.some((l) => l.id === lugar.id)) {
      this.lugaresUsuario.set(lugaresAntiguos.filter((l) => l.id !== lugar.id));
    }
    return this.httpClient
      .delete('http://localhost:3000/lugares-usuario/' + lugar.id)
      .pipe(
        catchError((error) => {
          this.lugaresUsuario.set(lugaresAntiguos);
          this.errorService.mostrarerror(
            'No se pudo eliminar el lugar seleccionado',
          );
          return throwError(
            () => new Error('No se pudo eliminar el lugar seleccionado'),
          );
        }),
      );
  }
}
