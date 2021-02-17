import { Component, OnInit } from '@angular/core';
import { InfoEquipo } from 'src/app/interface/info-equipo.interface';
import { InforPaginaService } from '../../services/infor-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  InfoEquipo: Array<InfoEquipo> = new Array<InfoEquipo>();
  constructor(public peticionService: InforPaginaService) {
    this.obtenerDataEquipo()
  }

  ngOnInit(): void {
  }

  obtenerDataEquipo(){
    this.peticionService.obtenerDataEquipo().subscribe(
      (res)=>{
        this.InfoEquipo = res
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
