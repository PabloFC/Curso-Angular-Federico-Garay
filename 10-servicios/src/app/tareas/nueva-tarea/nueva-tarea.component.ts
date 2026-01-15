import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../tareas.service';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nueva-tarea.component.html',
  styleUrl: './nueva-tarea.component.css',
})
export class NuevaTareaComponent {
  private formularioEl = viewChild<ElementRef<HTMLFormElement>>('formulario');

  constructor(private tareasService: TareaService) {}

  onAgregarTarea(titulo: string, descripcion: string) {
    this.tareasService.agregarTarea({ titulo, descripcion });
    this.formularioEl()?.nativeElement.reset();
  }
}
