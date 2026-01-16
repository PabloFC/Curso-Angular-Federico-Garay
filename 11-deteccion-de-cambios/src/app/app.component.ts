import { Component } from '@angular/core';

import { ContadorComponent } from './contador/contador.component';
import { MensajesComponent } from './mensajes/mensajes.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ContadorComponent, MensajesComponent],
})
export class AppComponent {
  get salidaDepuracion() {
    console.log('[AppComponent] Enlace "salidaDepuracion" re-evaluado.');
    return 'Salida de Depuración del Componente AppComponent';
  }
}
