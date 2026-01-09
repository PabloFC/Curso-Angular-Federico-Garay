import { Component } from '@angular/core';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';
import { Registro } from './registro.model';
import { RegistroComponent } from './registro/registro.component';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [NuevoRegistroComponent, RegistroComponent],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css',
})
export class RegistrosComponent {
  registros: Registro[] = [];

  alAgregar(informacionRegistro: { titulo: string; texto: string }) {
    const registro: Registro = {
      titulo: informacionRegistro.titulo,
      textoPedido: informacionRegistro.texto,
      id: Math.random().toString(),
      estado: 'abierto',
    };

    this.registros.push(registro);
  }
}
