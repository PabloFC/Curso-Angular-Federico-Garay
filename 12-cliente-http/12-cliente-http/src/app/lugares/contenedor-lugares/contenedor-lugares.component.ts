import { Component, input } from '@angular/core';

@Component({
  selector: 'app-contenedor-lugares',
  standalone: true,
  imports: [],
  templateUrl: './contenedor-lugares.component.html',
  styleUrl: './contenedor-lugares.component.css'
})
export class ContenedorLugaresComponent {
  titulo = input.required<string>();
}
