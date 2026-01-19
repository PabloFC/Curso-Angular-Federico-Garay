import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  intervaloPersonal$ = new Observable((subscriptor) => {
    let contador = 0;
    const intervalo = setInterval(() => {
      if (contador > 3) {
        clearInterval(intervalo);
        subscriptor.complete();
        return;
      }
      console.log('emitiendo nuevo valor');
      subscriptor.next({
        mensaje: 'Nuevo Valor',
      });
      contador++;
    }, 2000);
  });
  private destroyRef = inject(DestroyRef);
  constructor() {
    // effect(() => {
    //   console.log(`Boton clickeado ${this.cuentaClicks()} veces`);
    // });
  }
  cuentaClicks = signal(0);
  cuentaClicks$ = toObservable(this.cuentaClicks);
  intervalo$ = interval(1000);
  signalIntevalo = toSignal(this.intervalo$, {
    initialValue: 0,
    manualCleanup: true,
  });

  ngOnInit(): void {
    this.intervaloPersonal$.subscribe({
      next: (valor) => console.log(valor),
      complete: () => console.log('completada!'),
    });
    const subscripcion = this.cuentaClicks$.subscribe({
      next: (valor) =>
        console.log(`Boton clickeado ${this.cuentaClicks()} veces`),
    });
    this.destroyRef.onDestroy(() => {
      subscripcion.unsubscribe();
    });
    // const subscripcion = interval(1000)
    //   .pipe(map((valor) => valor * 2))
    //   .subscribe({
    //     next: (valor) => console.log(valor),
    //   });
    // this.destroyRef.onDestroy(() => {
    //   subscripcion.unsubscribe();
    // });
  }

  alClickear() {
    this.cuentaClicks.update((cuentaAnterior) => cuentaAnterior + 1);
  }
}
