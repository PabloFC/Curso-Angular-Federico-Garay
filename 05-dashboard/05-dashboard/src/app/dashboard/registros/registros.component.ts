import { Component } from '@angular/core';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';
import { Registro } from './registro.model';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [NuevoRegistroComponent],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css',
})
export class RegistrosComponent {
  registros: Registro[] = [];
}
