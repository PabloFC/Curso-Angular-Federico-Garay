import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  alEnviar(datosForm: NgForm) {
    if (datosForm.form.invalid) {
      return;
    }
    const emailIngresado = datosForm.form.value.email;
    const contrasenaIngresado = datosForm.form.value.contrasena;
    console.log(datosForm);
  }
}
