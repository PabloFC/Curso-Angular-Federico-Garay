import { Component } from '@angular/core';
import { BotonComponent } from '../compartida/boton/boton.component';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [BotonComponent],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css',
})
export class EncabezadoComponent {}
