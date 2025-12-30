import { Component } from '@angular/core';
import { USUARIOS_FALSOS } from './usuarios-falsos';

@Component({
  selector: 'app-raiz',
  // standalone: false,
  // imports: [EncabezadoComponent, UsuarioComponent, TareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usuarios = USUARIOS_FALSOS;
  idUsuarioSeleccionado?: string;

  get usuarioSeleccionado() {
    return this.usuarios.find(
      (usuario) => usuario.id === this.idUsuarioSeleccionado
    )!;
  }

  alSeleccionarUsuario(id: string) {
    this.idUsuarioSeleccionado = id;
  }
}
