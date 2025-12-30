import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID } from '@angular/core';

import { CompartidaModule } from './compartida/compartida.module';
import { TareasModule } from './tareas/tareas.module';

@NgModule({
  declarations: [AppComponent, EncabezadoComponent, UsuarioComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CompartidaModule, TareasModule],

  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
})
export class AppModule {}
