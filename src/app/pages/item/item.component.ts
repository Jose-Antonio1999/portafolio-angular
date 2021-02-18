import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Descripcion } from '../../interface/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  descripcionProducto: Descripcion = {}
  idProducto:String = "";
  constructor(public route: ActivatedRoute, public iproductoService:ProductosService) { 

    // obtener los valores enviados
    this.route.params.subscribe(
      (parametro)=>{
        // ejecutar el observable 
        this.idProducto = parametro['id']
        this.iproductoService.getProductos(parametro['id']).subscribe(
          (descripcion)=>{
            this.descripcionProducto = descripcion
          },
          (error)=>{
            console.log(error)
          }
        )

      },
      (error)=>{
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }

}
