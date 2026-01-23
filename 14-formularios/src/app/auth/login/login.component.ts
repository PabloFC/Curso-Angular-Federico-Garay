import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private destroyref = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const subscripcion = this.form()
        .valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (valor) =>
            window.localStorage.setItem(
              'form-login-guardado',
              JSON.stringify({ email: valor.email }),
            ),
        });
      this.destroyref.onDestroy(() => subscripcion?.unsubscribe());
    });
  }

  alEnviar(datosForm: NgForm) {
    if (datosForm.form.invalid) {
      return;
    }
    const emailIngresado = datosForm.form.value.email;
    const contrasenaIngresado = datosForm.form.value.contrasena;
    console.log(datosForm);

    datosForm.form.reset();
  }
}
