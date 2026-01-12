import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appEnlaceSeguro]',
  standalone: true,
  host: {
    '(click)': 'alConfirmarSalirPagina($event)',
  },
})
export class EnlaceSeguroDirective {
  constructor() {
    console.log('directiva esta activa');
  }

  alConfirmarSalirPagina(event: MouseEvent) {
    const quiereSalir = window.confirm('sales de la aplicación?');
    if (quiereSalir == true) {
      return;
    }

    event.preventDefault();
  }
}
