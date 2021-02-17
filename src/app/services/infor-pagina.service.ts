import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoEquipo } from '../interface/info-equipo.interface';
import { infoPagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InforPaginaService {

  constructor(public http:HttpClient) { 
  }

  obtenerDatos():Observable<infoPagina>{
    return this.http.get<infoPagina>('assets/Data/data-pagina.json')
    // ejecucción de tipo any -- return this.http.get('assets/Data/data-pagina.json')
  }

  obtenerDataEquipo():Observable<Array<InfoEquipo>>{
    return this.http.get<Array<InfoEquipo>>('https://portafolio-bd637-default-rtdb.firebaseio.com/equipo.json')
  }

}
