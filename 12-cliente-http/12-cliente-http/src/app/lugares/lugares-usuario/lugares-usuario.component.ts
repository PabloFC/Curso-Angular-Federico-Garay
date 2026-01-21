import { ServicioLugares } from './../lugares.service';
import { Component, DestroyRef, inject, signal, OnInit } from '@angular/core';

import { Lugar } from '../lugar.model';
import { ContenedorLugaresComponent } from '../contenedor-lugares/contenedor-lugares.component';
import { LugaresComponent } from '../lugares.component';

@Component({
  selector: 'app-lugares-usuario',
  standalone: true,
  templateUrl: './lugares-usuario.component.html',
  styleUrl: './lugares-usuario.component.css',
  imports: [ContenedorLugaresComponent, LugaresComponent],
})
export class LugaresUsuarioComponent implements OnInit {
  estaRecibiendo = signal(false);
  error = signal('');
  private servicioLugares = inject(ServicioLugares);
  lugares = this.servicioLugares.lugaresUsuarioCargados;
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.estaRecibiendo.set(true);
    const subscripcion = this.servicioLugares.cargarLugaresUsuario().subscribe({
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
