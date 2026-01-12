import { Component } from '@angular/core';

import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { RecursosAprendizajeComponent } from './recursos-aprendizaje/recursos-aprendizaje.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AutenticacionComponent, RecursosAprendizajeComponent],
})
export class AppComponent {}
