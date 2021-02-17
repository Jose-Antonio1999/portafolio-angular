import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  
  producto: Array<Producto> = new Array<Producto>();
  cargando =  true

  constructor(public productoService:ProductosService) { 
    this.obtenerProductos();
  }

  ngOnInit(): void {
  }

  obtenerProductos(){

    this.productoService.cargarProductos().subscribe(
      (res)=>{
        this.producto = res
        this.cargando = false
        console.log(this.producto)
      },
      (error)=>{
        console.log(error)
      }
    )

  }

}
