import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  
  constructor(public productoService:ProductosService) { 

  }

  ngOnInit(): void {
  }


}
