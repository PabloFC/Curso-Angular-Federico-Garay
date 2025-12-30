import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Usuario } from './usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  @Input({ required: true }) usuario!: Usuario;
  @Input({ required: true }) seleccionado!: boolean;
  @Output() seleccion = new EventEmitter<string>();

  get rutaImagen() {
    return 'assets/usuarios/' + this.usuario.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}
