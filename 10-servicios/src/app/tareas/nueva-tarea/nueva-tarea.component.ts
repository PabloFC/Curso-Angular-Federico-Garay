import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nueva-tarea.component.html',
  styleUrl: './nueva-tarea.component.css',
})
export class NuevaTareaComponent {
  private formularioEl = viewChild<ElementRef<HTMLFormElement>>('formulario');

  onAgregarTarea(titulo: string, descripcion: string) {
    this.formularioEl()?.nativeElement.reset();
  }
} 