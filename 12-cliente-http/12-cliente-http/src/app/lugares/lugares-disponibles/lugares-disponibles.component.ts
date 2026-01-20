import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Lugar } from '../lugar.model';
import { LugaresComponent } from '../lugares.component';
import { ContenedorLugaresComponent } from '../contenedor-lugares/contenedor-lugares.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lugares-disponibles',
  standalone: true,
  templateUrl: './lugares-disponibles.component.html',
  styleUrl: './lugares-disponibles.component.css',
  imports: [LugaresComponent, ContenedorLugaresComponent],
})
export class LugaresDisponiblesComponent implements OnInit {
  lugares = signal<Lugar[] | undefined>(undefined);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscripcion = this.httpClient
      .get<{ lugares: Lugar[] }>('http://localhost:3000/lugares')
      .subscribe({
        next: (datosrespuesta) => {
          console.log(datosrespuesta);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscripcion.unsubscribe();
    });
  }
}
