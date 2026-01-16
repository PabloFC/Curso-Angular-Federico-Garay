import { Component, signal } from '@angular/core';

import { ListaMensajesComponent } from './lista-mensajes/lista-mensajes.component';
import { NuevoMensajeComponent } from './nuevo-mensaje/nuevo-mensaje.component';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css',
  imports: [ListaMensajesComponent, NuevoMensajeComponent],
})
export class MensajesComponent {
  mensajes = signal<string[]>([]);

  get salidaDepuracion() {
    console.log('[Mensajes] Enlace "salidaDepuracion" re-evaluado.');
    return 'Salida de Depuración del Componente Mensajes';
  }

  alAgregarMensaje(mensaje: string) {
    this.mensajes.update((mensajesAnteriores) => [...mensajesAnteriores, mensaje]);
  }
}
