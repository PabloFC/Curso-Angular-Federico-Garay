import { Component } from '@angular/core';

import { LugaresDisponiblesComponent } from './lugares/lugares-disponibles/lugares-disponibles.component';
import { LugaresUsuarioComponent } from './lugares/lugares-usuario/lugares-usuario.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [LugaresDisponiblesComponent, LugaresUsuarioComponent],
})
export class ComponenteApp {}
