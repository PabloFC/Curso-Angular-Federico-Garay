import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponent],
})
export class AppComponent {}
