
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs';


import { VideoStyleProps } from '../Model/Video/VideoStyleProps';
import { TranscripcionStyleProps } from '../Model/Video/Transcripcion/TranscripcionStyleProps';
import { PresentacionStyleProps } from '../Model/Presentacion/presentacionStyleProps';
import { RepositorioStyleProps } from '../Model/Repositorio/RepositorioStyleProps';
import { IndiceStyleProps } from '../Model/Indice/IndiceStyleProps';

@Injectable()
export class StyleLocatorService {

  constructor(private http: Http) { }

  /**
   * Método encargado de localizar y obtener los estilos definidos del componente
   * video en una determinada variabilidad
   * @param variabilidad nombre de la variabilidad
   */  
  obtenerPropiedadesEstiloVideo(variabilidad:string): Observable<VideoStyleProps> {
    return this.http.get('../../../assets/metadata/'+variabilidad+'.json').pipe(
    map(response => response.json().video));
  }
  
  /**
   * Método encargado de localizar y obtener los estilos definidos del componete trasncipcion
   * en una determinada variabilidad
   * @param variabilidad  nombre de la variabilidad
   */
  obtenerPropiedadesEstiloTranscripcion(variabilidad: string): Observable<TranscripcionStyleProps>{
    return this.http.get('../../../assets/metadata/'+variabilidad+'.json').pipe(
    map(response => response.json().video.transcipcion));
  }

  /**
   * Método encargado de localizar y obtener los estilos definidos del componente
   * presentacion en una determinada variabilidad
   * @param variabilidad nombre de la variabilidad
   */
  obtenerPropiedadesEstiloPDF(variabilidad: string): Observable<PresentacionStyleProps> {
    return this.http.get('../../../assets/metadata/'+variabilidad+'.json').pipe(
    map(response => response.json().presentacion));
  }

  /**
   * Método encargado de localizar y obtener los estilos definidos para el componente
   * de repositorio en una determinada variabilidad
   * @param variabilidad nombre de la variabilidad
   */
  obtenerPropiedadesRepositorio(variabilidad: string): Observable<RepositorioStyleProps> {
    return this.http.get('../../../assets/metadata/'+variabilidad+'.json').pipe(
    map(response => response.json().repositorio));
  }

  /**
   * Método encargado de localizar y obtener los estilos definidos para el componente
   * de indice en una determinada variabilidad
   * @param variabilidad nombre de la variabilidad
   */
  obtenerPropiedadesIndiceContenido(variabilidad: string): Observable<IndiceStyleProps> {
    return this.http.get('../../../assets'+variabilidad+'.json').pipe(
    map(response => response.json().indiceContenido));
  }


}
