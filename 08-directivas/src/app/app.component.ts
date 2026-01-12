import { AutenticacionService } from './autenticacion/autenticacion.service';
import { Component, computed, inject } from '@angular/core';

import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { RecursosAprendizajeComponent } from './recursos-aprendizaje/recursos-aprendizaje.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AutenticacionComponent, RecursosAprendizajeComponent, NgIf],
})
export class AppComponent {
  private autenticacionService = inject(AutenticacionService);

  esAdmin = computed(
    () => this.autenticacionService.permisoActivo() === 'admin'
  );
}
