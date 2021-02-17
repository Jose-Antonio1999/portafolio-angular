import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interface/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public productoService:HttpClient) { }

  cargarProductos():Observable<Array<Producto>>{
    return this.productoService.get<Array<Producto>>('https://portafolio-bd637-default-rtdb.firebaseio.com/productos_idx.json');
  }
}
