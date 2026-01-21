import { Component, DestroyRef, inject, signal, OnInit } from '@angular/core';

import { Lugar } from '../lugar.model';
import { ContenedorLugaresComponent } from '../contenedor-lugares/contenedor-lugares.component';
import { LugaresComponent } from '../lugares.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-lugares-usuario',
  standalone: true,
  templateUrl: './lugares-usuario.component.html',
  styleUrl: './lugares-usuario.component.css',
  imports: [ContenedorLugaresComponent, LugaresComponent],
})
export class LugaresUsuarioComponent implements OnInit {
  lugares = signal<Lugar[] | undefined>(undefined);
  estaRecibiendo = signal(false);
  error = signal('');
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.estaRecibiendo.set(true);
    const subscripcion = this.httpClient
      .get<{ lugares: Lugar[] }>('http://localhost:3000/lugares-usuario')
      .pipe(
        map((datosrespuesta) => datosrespuesta.lugares),
        catchError((error) => {
          console.log(error.message);
          return throwError(
            () => new Error('Algo salió mal al obtener tus sitios favoritos'),
          );
        }),
      )
      .subscribe({
        next: (lugares) => {
          this.lugares.set(lugares);
        },
        complete: () => {
          this.estaRecibiendo.set(false);
        },
        error: (error: Error) => {
          this.error.set(error.message);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscripcion.unsubscribe();
    });
  }
}
