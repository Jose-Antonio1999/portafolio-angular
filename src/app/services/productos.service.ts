import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interface/productos.interface';
import { error } from 'protractor';
import { Descripcion } from '../interface/producto-descripcion.interface';
import { resolve } from 'path';
import { rejects } from 'assert';
import { TreeError } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Array<Producto> = new Array<Producto>();
  productosFiltrado: Array<Producto> = new Array<Producto>();
  cargando =  true

  constructor(public productoService:HttpClient) { 
    this.cargarProductos()
  }


  cargarProductos(){
    // promesa es de tipo asincrono
    return new Promise( (resolve,reject) =>{
      this.productoService.get<Array<Producto>>('https://portafolio-bd637-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe(
        (res)=>{
          this.cargando = false
          this.productos = res
          //resolve();
        },
        (error)=>{
          console.log(error)
        }
      )
    });
  
  }

  getProductos(id:String){
    return this.productoService.get<Descripcion>(`https://portafolio-bd637-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  buscarProducto( termino: String){
    if (this.productos.length==0){
      // cargar productos
      this.cargarProductos().then( ()=>{
        // ejecutar depues de tener los productos
        // Aplicar filtro
        this.filtrarProductos(termino);
      });

    } else {
      // aplicar filtro
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos( buscar:any) {
    // pugra el arreglo
    this.productosFiltrado = []
    // convertir a minusculas
    buscar = buscar.toLocaleLowerCase()
   
    this.productos.forEach( prod =>{
      const tituloLower = prod.titulo.toLocaleLowerCase()
      if (prod.categoria.indexOf(buscar)>=0 || tituloLower.indexOf(buscar)>=0){
        this.productosFiltrado.push(prod)
      }
    })
  }

}
