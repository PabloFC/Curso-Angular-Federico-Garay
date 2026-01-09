export interface Registro {
  id: string;
  titulo: string;
  textoPedido: string;
  estado: 'abierto' | 'cerrado';
}
