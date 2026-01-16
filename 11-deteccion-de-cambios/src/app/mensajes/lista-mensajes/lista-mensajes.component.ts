import { Component, input } from '@angular/core';

@Component({
  selector: 'app-lista-mensajes',
  standalone: true,
  templateUrl: './lista-mensajes.component.html',
  styleUrl: './lista-mensajes.component.css',
})
export class ListaMensajesComponent {
  mensajes = input.required<string[]>();

  get salidaDepuracion() {
    console.log('[ListaMensajes] Enlace "salidaDepuracion" re-evaluado.');
    return 'Salida de Depuración del Componente ListaMensajes';
  }
}
