import { Component, input } from '@angular/core';
import { Registro } from '../registro.model';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  informacion = input.required<Registro>({});
}
