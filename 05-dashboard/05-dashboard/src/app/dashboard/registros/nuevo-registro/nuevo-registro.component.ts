import {
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { BotonComponent } from '../../../compartida/boton/boton.component';
import { ControlComponent } from '../../../compartida/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-registro',
  standalone: true,
  imports: [BotonComponent, ControlComponent, FormsModule],
  templateUrl: './nuevo-registro.component.html',
  styleUrl: './nuevo-registro.component.css',
})
export class NuevoRegistroComponent {
  // @ViewChild('miFormulario') private miFormulario?: ElementRef<HTMLFormElement>;
  private miFormulario = viewChild<ElementRef<HTMLFormElement>>('miFormulario');

  // @Output() agregar = new EventEmitter<{ titulo: string; texto: string }>();
  agregar = output<{ titulo: string; texto: string }>();

  alEnviar(titulo: string, textoRegistro: string) {
    this.agregar.emit({ titulo: titulo, texto: textoRegistro });
    this.miFormulario()?.nativeElement.reset();
  }
}
