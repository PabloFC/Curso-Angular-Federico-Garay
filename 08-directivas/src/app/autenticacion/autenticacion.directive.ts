import { Directive, effect, inject, input } from '@angular/core';
import { Permiso } from './autenticacion.model';
import { AutenticacionService } from './autenticacion.service';

@Directive({
  selector: '[appAutenticacion]',
  standalone: true,
})
export class AutenticacionDirective {
  tipoDeUsuario = input.required<Permiso>({ alias: 'appAutenticacion' });
  private autenticacionService = inject(AutenticacionService);

  constructor() {
    effect(() => {
      if (this.autenticacionService.permisoActivo() == this.tipoDeUsuario()) {
        console.log('Mostrar elemento');
      } else {
        console.log('No mostrar elemento');
      }
    });
  }
}
