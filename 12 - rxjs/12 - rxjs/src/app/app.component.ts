import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
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
