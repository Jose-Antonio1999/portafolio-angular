import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { infoPagina } from 'src/app/interface/info-pagina.interface';
import { InforPaginaService } from '../../services/infor-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataInfo: infoPagina = {}

  constructor(public peticion:InforPaginaService,
              private ruta:Router) {

    peticion.obtenerDatos().subscribe(
      (res)=>{
        this.dataInfo = res
      },
      (error)=>{
        console.log(error)
      }
    )

  }

  // buscar termino

  buscarTermino(termino:String) {
    if (termino.length<1){
      return;
    }
    this.ruta.navigate(['/search',termino])
  }

  ngOnInit(): void {
  
  }

}
