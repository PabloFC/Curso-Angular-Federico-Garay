import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultados-inversion',
  standalone: true,
  imports: [],
  templateUrl: './resultados-inversion.component.html',
  styleUrl: './resultados-inversion.component.css',
})
export class ResultadosInversionComponent {
  @Input() resultados?: {
    anio: number;
    interes: number;
    valorFinalAnio: number;
    inversionAnual: number;
    interesTotal: number;
    montoTotalInvertido: number;
  }[];
}
