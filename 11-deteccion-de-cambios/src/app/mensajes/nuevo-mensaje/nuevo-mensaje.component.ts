import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-mensaje',
  standalone: true,
  templateUrl: './nuevo-mensaje.component.html',
  styleUrl: './nuevo-mensaje.component.css',
  imports: [FormsModule],
})
export class NuevoMensajeComponent {
  agregar = output<string>();
  textoIngresado = signal('');

  get salidaDepuracion() {
    console.log('[NuevoMensaje] Enlace "salidaDepuracion" re-evaluado.');
    return 'Salida de Depuración del Componente NuevoMensaje';
  }

  alEnviar() {
    this.agregar.emit(this.textoIngresado());
    this.textoIngresado.set('');
  }
}
