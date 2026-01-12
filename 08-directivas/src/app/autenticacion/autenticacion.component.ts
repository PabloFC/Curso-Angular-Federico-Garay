import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AutenticacionService } from './autenticacion.service';

@Component({
  selector: 'app-autenticacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.css',
})
export class AutenticacionComponent {
  email = signal('');
  clave = signal('');
  private autenticacionService = inject(AutenticacionService);

  alEnviar() {
    this.autenticacionService.autenticar(this.email(), this.clave());
  }
}
