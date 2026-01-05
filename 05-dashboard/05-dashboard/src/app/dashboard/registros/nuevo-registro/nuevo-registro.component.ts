import { Component } from '@angular/core';
import { BotonComponent } from '../../../compartida/boton/boton.component';
import { ControlComponent } from '../../../compartida/control/control.component';

@Component({
  selector: 'app-nuevo-registro',
  standalone: true,
  imports: [BotonComponent, ControlComponent],
  templateUrl: './nuevo-registro.component.html',
  styleUrl: './nuevo-registro.component.css',
})
export class NuevoRegistroComponent {}
