import { Component } from '@angular/core';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { USUARIOS_FALSOS } from './usuarios-falsos';
import { TareasComponent } from './tareas/tareas.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [EncabezadoComponent, UsuarioComponent, TareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usuarios = USUARIOS_FALSOS;
  idusuarioSeleccionado?: string;

  get usarioSeleccionado() {
    return this.usuarios.find(
      (usuario) => usuario.id === this.idusuarioSeleccionado
    )!;
  }

  alSeleccionarUsuario(nombre: string) {
    this.idusuarioSeleccionado = nombre;
  }
}
