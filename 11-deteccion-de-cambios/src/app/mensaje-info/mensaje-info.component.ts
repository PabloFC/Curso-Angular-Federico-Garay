import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje-info',
  standalone: true,
  templateUrl: './mensaje-info.component.html',
  styleUrl: './mensaje-info.component.css',
})
export class MensajeInfoComponent {
  get salidaDepuracion() {
    console.log('[MensajeInfo] Enlace "salidaDepuracion" re-evaluado.');
    return 'Salida de Depuración del Componente MensajeInfo';
  }

    alRegistrar() {
    console.log('Clickeado!');
  }
} 