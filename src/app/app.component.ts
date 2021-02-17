import { Component } from '@angular/core';
import { error } from 'protractor';
import { infoPagina } from './interface/info-pagina.interface';
import { Producto } from './interface/productos.interface';
import { InforPaginaService } from './services/infor-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  carga = false
  dataInfo: infoPagina = {}
  
  constructor(public infoPaginaService:InforPaginaService, 
    public productoService:ProductosService){
    this.obtenerInfoPagina();
  }

  obtenerInfoPagina(){
    this.infoPaginaService.obtenerDatos()
    .subscribe(
      (res)=>{
        this.carga = true
        this.dataInfo = res
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
