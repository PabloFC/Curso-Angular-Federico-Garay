import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-estado-servidor',
  standalone: true,
  imports: [],
  templateUrl: './estado-servidor.component.html',
  styleUrl: './estado-servidor.component.css',
})
export class EstadoServidorComponent implements OnInit, OnDestroy {
  estadoActual = signal<'online' | 'offline' | 'unknown'>('offline');
  private intervalo?: any;

  ngOnInit() {
    this.intervalo = setInterval(() => {
      const rnd = Math.random();
      if (rnd > 0.5) {
        this.estadoActual.set('online');
      } else if (rnd > 0.1) {
        this.estadoActual.set('offline');
      } else {
        this.estadoActual.set('unknown');
      }
    }, 3000);
  }
  constructor() {
    effect(() => {
      console.log(this.estadoActual());
    });
  }

  ngAfterViewInit() {
    console.log('After view Init');
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }
}
