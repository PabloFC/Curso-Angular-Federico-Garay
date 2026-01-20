import { Component, signal } from '@angular/core';

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
export class LugaresUsuarioComponent {
  lugares = signal<Lugar[] | undefined>(undefined);
}
