import { Component } from '@angular/core';
import { EncabezadoComponent } from './encabezado/encabezado.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [EncabezadoComponent],
})
export class AppComponent {}
