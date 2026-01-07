import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-elemento',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-elemento.component.html',
  styleUrl: './dashboard-elemento.component.css',
  // encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'dashboard-elemento',

  // },
})
export class DashboardElementoComponent {
  // @Input({ required: true }) imagen!: {
  //   src: string;
  //   alt: string;
  // };
  // @Input({ required: true }) titulo!: string;
  imagen = input.required<{ src: string; alt: string }>();
  titulo = input.required<string>();
}
