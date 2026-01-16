import { Component, signal } from '@angular/core';

import { MensajeInfoComponent } from '../mensaje-info/mensaje-info.component';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css',
  imports: [MensajeInfoComponent],
})
export class ContadorComponent {
  contador = signal(0);

  get salidaDepuracion() {
    console.log('[Contador] Enlace "salidaDepuracion" re-evaluado.');
    return 'Salida de Depuración del Componente Contador';
  }

  alDecrementar() {
    this.contador.update((contadorAnterior) => contadorAnterior - 1);
  }

  alIncrementar() {
    this.contador.update((contadorAnterior) => contadorAnterior + 1);
  }
} 