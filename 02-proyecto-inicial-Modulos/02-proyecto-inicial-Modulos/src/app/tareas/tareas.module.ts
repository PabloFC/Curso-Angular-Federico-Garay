import { NgModule } from '@angular/core';
import { TareasComponent } from './tareas.component';
import { TareaComponent } from './tarea/tarea.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { CompartidaModule } from '../compartida/compartida.module';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TareasComponent, TareaComponent, NuevaTareaComponent],
  exports: [TareasComponent],
  imports: [CompartidaModule, CommonModule, FormsModule],
})
export class TareasModule {}
