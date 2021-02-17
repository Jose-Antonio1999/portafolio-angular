import { Component, OnInit } from '@angular/core';
import { infoPagina } from 'src/app/interface/info-pagina.interface';
import { InforPaginaService } from '../../services/infor-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataInfo: infoPagina = {}
  constructor(public peticion:InforPaginaService) {

    peticion.obtenerDatos().subscribe(
      (res)=>{
        this.dataInfo = res
      },
      (error)=>{
        console.log(error)
      }
    )

  }

  ngOnInit(): void {
  
  }

}
