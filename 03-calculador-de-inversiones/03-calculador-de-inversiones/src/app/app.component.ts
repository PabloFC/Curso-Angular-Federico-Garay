import { Component } from '@angular/core';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IngresoUsuarioComponent } from './ingreso-usuario/ingreso-usuario.component';
import { IngresoInversion } from './ingreso-inversion.model';
import { ResultadosInversionComponent } from './resultados-inversion/resultados-inversion.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    EncabezadoComponent,
    IngresoUsuarioComponent,
    ResultadosInversionComponent,
  ],
})
export class AppComponent {
  infoResultados?: {
    anio: number;
    interes: number;
    valorFinalAnio: number;
    inversionAnual: number;
    interesTotal: number;
    montoTotalInvertido: number;
  }[];

  alCalcularResultadosInversion(info: IngresoInversion) {
    const { inversionInicial, inversionAnual, duracion, rendimientoEsperado } =
      info;
    const datosAnuales = [];
    let valorInversion = inversionInicial;

    for (let i = 0; i < duracion; i++) {
      const anio = i + 1;
      const interesGanadoEnAnio = valorInversion * (rendimientoEsperado / 100);
      valorInversion += interesGanadoEnAnio + inversionAnual;
      const interesTotal =
        valorInversion - inversionAnual * anio - inversionInicial;
      datosAnuales.push({
        anio: anio,
        interes: interesGanadoEnAnio,
        valorFinalAnio: valorInversion,
        inversionAnual: inversionAnual,
        interesTotal: interesTotal,
        montoTotalInvertido: inversionInicial + inversionAnual * anio,
      });
    }

    this.infoResultados = datosAnuales;
  }
}
