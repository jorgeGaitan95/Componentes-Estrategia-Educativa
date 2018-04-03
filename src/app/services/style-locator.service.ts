import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { VideoStyleProps } from '../Model/VideoStyleProps';
import { PresentacionStyleProps } from '../Model/presentacionStyleProps';
import { RepositorioStyleProps } from '../Model/RepositorioStyleProps';

@Injectable()
export class StyleLocatorService {

  constructor(private http: Http) { }

  /**
   * Método encargado de localizar y obtener los estilos del componente video
   * definidos para una determinada variabilidad
   * @param variabilidad nombre de la variabilidad
   */  
  obtenerPropiedadesEstiloVideo(variabilidad:string): Observable<VideoStyleProps> {
    return this.http.get('../../assets/metadata/'+variabilidad+'.json')
    .map(response => response.json().video);
  }

  /**
   * Método encargado de localizar y obtener los estilos definidos del componente
   * presentacion para una determinada variabilidad
   * @param variabilidad nombre de la variabilidad
   */
  obtenerPropiedadesEstiloPDF(variabilidad: string): Observable<PresentacionStyleProps> {
    return this.http.get('../../assets/metadata/'+variabilidad+'.json')
    .map(response => response.json().presentacion);
  }

  /**
   * Método encargado de localizar y obtener los estilos definidos para el componente
   * de repositorio para una determinada variabilidad
   * @param variabilidad nombre de la variabilidad
   */
  obtenerPropiedadesRepositorio(variabilidad: string): Observable<RepositorioStyleProps> {
    return this.http.get('../../assets/metadata/'+variabilidad+'.json')
    .map(response => response.json().repositorio);
  }

}
