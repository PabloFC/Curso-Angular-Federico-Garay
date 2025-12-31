import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingreso-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ingreso-usuario.component.html',
  styleUrl: './ingreso-usuario.component.css',
})
export class IngresoUsuarioComponent {
  inversionInicialIngresada = '0';
  inversionAnualIngresada = '0';
  rendimientoEsperadoIngresado = '5';
  duracionIngresada = '10';

  alEnviar() {
    console.log('enviado');
    console.log(this.inversionInicialIngresada);
    console.log(this.inversionAnualIngresada);
    console.log(this.rendimientoEsperadoIngresado);
    console.log(this.duracionIngresada);
  }
}
