import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private _error = signal('');

  error = this._error.asReadonly();

  mostrarerror(mensaje: string) {
    console.log(mensaje);
    this._error.set(mensaje);
  }

  limpiarError() {
    this._error.set('');
  }
}
