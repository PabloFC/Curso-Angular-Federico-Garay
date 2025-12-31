import { Component } from '@angular/core';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IngresoUsuarioComponent } from './ingreso-usuario/ingreso-usuario.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [EncabezadoComponent, IngresoUsuarioComponent],
})
export class AppComponent {}
