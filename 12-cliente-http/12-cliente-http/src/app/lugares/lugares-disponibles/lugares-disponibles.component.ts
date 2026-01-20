import { Component, inject, signal } from '@angular/core';

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
export class LugaresDisponiblesComponent {
  lugares = signal<Lugar[] | undefined>(undefined);

  private httpClient = inject(HttpClient);
}
