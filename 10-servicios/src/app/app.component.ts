import { Component } from '@angular/core';

import { TareasComponent } from './tareas/tareas.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TareasComponent],
})
export class AppComponent {}
