import { Component } from '@angular/core';
import { BotonComponent } from '../../../compartida/boton/boton.component';

@Component({
  selector: 'app-nuevo-registro',
  standalone: true,
  imports: [BotonComponent],
  templateUrl: './nuevo-registro.component.html',
  styleUrl: './nuevo-registro.component.css',
})
export class NuevoRegistroComponent {}
