
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs';

import { IndiceStyleProps } from '../ComponentesDidacticos/Model/Indice/IndiceStyleProps';


@Injectable()
export class TemplateLocatorService {

  constructor(private http: Http) { }

  /**
   * Método encargado de localizar y obtener los estilos definidos para el componente
   * de indice en una determinada variabilidad
   * @param variabilidad nombre de la variabilidad
   */
  obtenerPropiedadesIndiceContenido(variabilidad: string): Observable<string> {
    var html1 = "1";
    return this.http.get('../../assets/Templates/'+variabilidad+'.html').pipe(
    map(response => response.text()));
  }
}
