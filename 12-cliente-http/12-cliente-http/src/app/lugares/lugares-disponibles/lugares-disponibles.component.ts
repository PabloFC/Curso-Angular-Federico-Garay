import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Lugar } from '../lugar.model';
import { LugaresComponent } from '../lugares.component';
import { ContenedorLugaresComponent } from '../contenedor-lugares/contenedor-lugares.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-lugares-disponibles',
  standalone: true,
  templateUrl: './lugares-disponibles.component.html',
  styleUrl: './lugares-disponibles.component.css',
  imports: [LugaresComponent, ContenedorLugaresComponent],
})
export class LugaresDisponiblesComponent implements OnInit {
  lugares = signal<Lugar[] | undefined>(undefined);
  estaRecibiendo = signal(false);
  error = signal('');
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.estaRecibiendo.set(true);
    const subscripcion = this.httpClient
      .get<{ lugares: Lugar[] }>('http://localhost:3000/lugares')
      .pipe(
        map((datosrespuesta) => datosrespuesta.lugares),
        catchError((error) => {
          console.log(error.message);
          return throwError(
            () =>
              new Error('Algo salió mal al obtener los lugares disponibles'),
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
  alSeleccionarlugar(lugarSeleccionado: Lugar) {
    this.httpClient
      .put('http://localhost:3000/lugares-usuario', {
        lugarId: lugarSeleccionado.id,
      })
      .subscribe({
        next: (datosRespuesta) => console.log(datosRespuesta),
      });
  }
}
