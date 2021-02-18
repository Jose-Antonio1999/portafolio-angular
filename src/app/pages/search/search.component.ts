import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  terminoBuscar:String = ""

  constructor(private termino:ActivatedRoute,
              public productoService:ProductosService) {
    this.termino.params.subscribe(
      (res)=>{
        this.terminoBuscar = res['termino']
        this.productoService.buscarProducto(this.terminoBuscar)
      },
      (error)=>{
        console.log(error)
      }
    )
   }

  ngOnInit(): void {
  }

}
