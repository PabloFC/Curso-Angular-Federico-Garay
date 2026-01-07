import { Component } from '@angular/core';
import { BotonComponent } from '../../../compartida/boton/boton.component';
import { ControlComponent } from '../../../compartida/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-registro',
  standalone: true,
  imports: [BotonComponent, ControlComponent, FormsModule],
  templateUrl: './nuevo-registro.component.html',
  styleUrl: './nuevo-registro.component.css',
})
export class NuevoRegistroComponent {
  alEnviar(elementoTitulo: HTMLInputElement) {
    const tituloIngresado = elementoTitulo.value;
    console.log(tituloIngresado);
  }
}
