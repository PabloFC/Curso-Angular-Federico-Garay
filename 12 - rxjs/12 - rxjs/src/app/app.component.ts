import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscripcion = interval(1000).subscribe({
      next: (valor) => console.log(valor),
    });

    this.destroyRef.onDestroy(() => {
      subscripcion.unsubscribe();
    });
  }
}
