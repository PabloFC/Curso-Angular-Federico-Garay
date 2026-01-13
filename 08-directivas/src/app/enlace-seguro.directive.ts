import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appEnlaceSeguro]',
  standalone: true,
  host: {
    '(click)': 'alConfirmarSalirPagina($event)',
  },
})
export class EnlaceSeguroDirective {
  parametroConsulta = input('miapp', {
    alias: 'appEnlaceSeguro',
  });

  private referenciaElementoHost =
    inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log('directiva esta activa');
  }

  alConfirmarSalirPagina(evento: MouseEvent) {
    const quiereSalir = window.confirm('sales de la aplicación?');
    if (quiereSalir == true) {
      const direccion = this.referenciaElementoHost.nativeElement.href;
      (evento.target as HTMLAnchorElement).href =
        direccion + '?from=' + this.parametroConsulta();

      return;
    }

    evento.preventDefault();
  }
}
