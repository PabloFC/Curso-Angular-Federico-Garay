import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TareasComponent } from './tareas/tareas.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    EncabezadoComponent,
    UsuarioComponent,
    TareasComponent,
  ],
})
export class AppModule {}
