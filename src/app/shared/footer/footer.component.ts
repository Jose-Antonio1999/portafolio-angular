import { Component, OnInit } from '@angular/core';
import { InforPaginaService } from '../../services/infor-pagina.service';
import { infoPagina } from '../../interface/info-pagina.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio =  new Date().getFullYear();
  dataInfo: infoPagina = {}

  constructor(public peticion:InforPaginaService) { 

    this.peticion.obtenerDatos().subscribe(
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
