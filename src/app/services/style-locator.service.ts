import { Injectable } from '@angular/core';

import { VideoStyleProps } from '../Model/VideoStyleProps';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class StyleLocatorService {

  constructor(private http: Http) { }

  obtenerPropiedadesEstiloVideo(variabilidad:string): Observable<VideoStyleProps> {
    return this.http.get('../../assets/metadata/'+variabilidad+'.json')
    .map(response => response.json().video);
  }

}
