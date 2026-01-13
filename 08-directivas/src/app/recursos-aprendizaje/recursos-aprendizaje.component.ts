import { Component } from '@angular/core';
import { EnlaceSeguroDirective } from '../enlace-seguro.directive';
import { MonitorDirective } from '../monitor.directive';

@Component({
  selector: 'app-recursos-aprendizaje',
  templateUrl: './recursos-aprendizaje.component.html',
  styleUrl: './recursos-aprendizaje.component.css',
  standalone: true,
  imports: [EnlaceSeguroDirective, MonitorDirective],
})
export class RecursosAprendizajeComponent {}
