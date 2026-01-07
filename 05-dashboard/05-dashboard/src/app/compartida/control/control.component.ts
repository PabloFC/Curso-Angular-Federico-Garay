import {
  Component,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'alClickear()',
  },
})
export class ControlComponent {
  // @HostBinding('class') nombreClase = 'control';
  etiqueta = input.required<string>();
  private el = inject(ElementRef);

  alClickear() {
    console.log('clickeado');
    console.log(this.el);
  }
}
