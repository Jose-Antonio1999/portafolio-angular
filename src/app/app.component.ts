import { Component } from '@angular/core';
import { error } from 'protractor';
import { infoPagina } from './interface/info-pagina.interface';
import { InforPaginaService } from './services/infor-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  carga = false
  dataInfo: infoPagina = {}
  constructor(public infoPaginaService:InforPaginaService){
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
