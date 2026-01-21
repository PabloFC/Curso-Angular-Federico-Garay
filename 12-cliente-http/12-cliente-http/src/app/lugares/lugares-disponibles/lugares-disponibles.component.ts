import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Lugar } from '../lugar.model';
import { LugaresComponent } from '../lugares.component';
import { ContenedorLugaresComponent } from '../contenedor-lugares/contenedor-lugares.component';
import { ServicioLugares } from '../lugares.service';

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
  // private httpClient = inject(HttpClient);
  private servicioLugares = inject(ServicioLugares);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.estaRecibiendo.set(true);
    const subscripcion = this.servicioLugares
      .cargarLugaresDisponibles()
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
    const subscripcion =
      this.servicioLugares.agregarLugarALugaresUsuario(lugarSeleccionado);

    this.destroyRef.onDestroy(() => {
      subscripcion.unsubscribe();
    });
  }
}
