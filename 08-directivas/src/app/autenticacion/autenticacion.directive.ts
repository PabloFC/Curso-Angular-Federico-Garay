import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permiso } from './autenticacion.model';
import { AutenticacionService } from './autenticacion.service';

@Directive({
  selector: '[appAutenticacion]',
  standalone: true,
})
export class AutenticacionDirective {
  tipoDeUsuario = input.required<Permiso>({ alias: 'appAutenticacion' });
  private autenticacionService = inject(AutenticacionService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.autenticacionService.permisoActivo() == this.tipoDeUsuario()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
