import { Component, inject } from '@angular/core';

import { LugaresDisponiblesComponent } from './lugares/lugares-disponibles/lugares-disponibles.component';
import { LugaresUsuarioComponent } from './lugares/lugares-usuario/lugares-usuario.component';
import { ErrorService } from './compartido/error.service';
import { ErrorModalComponent } from './compartido/modal/error-modal/error-modal.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    LugaresDisponiblesComponent,
    LugaresUsuarioComponent,
    ErrorModalComponent,
  ],
})
export class ComponenteApp {
  private errorService = inject(ErrorService);
  error = this.errorService.error;
}
