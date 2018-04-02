import { Injectable } from '@angular/core';

import { VideoSource } from '../Model/VideoSource';
import { VideoOptions } from '../Model/VideoOptions';
import { VideoSubtitulosSource } from '../Model/VideoSubtitulosSource';
import { PresentacionSource } from '../Model/PresentacionSource';
import { PresentacionOptions } from '../Model/PresentacionOptions';

@Injectable()
export class ActivityDataService {

  constructor() { }
 
  /**
  * Método encargado de obtner la lista con la informacion de los recursos de video que se
  * le asignaron al componente para cada una de las resoluciones.
  * @param idComponente Identificador del componente
  */
  obtenerSoucesVideo(idComponente: string): VideoSource[] {
     var sources =  [
       {
          src : "../assets/144.mp4",
          type : "video/webm",
          label : "144",
          dataRes : "144"
       },
       {
          src : "../assets/360.mp4",
          type : "video/mp4",
          label : "480",
          dataRes : "480"
       }
     ]
     return sources;
  }

  /**
   * Método encargado de localizar los subtitulos asignados al componente de video
   * @param idComponente Identificador del componente
   */
  obtenerSubtitulosVideo(idComponente: string): VideoSubtitulosSource[] {
    var subtitulos = [
      {
        src : "../assets/subs_en.vtt",
        type : "text/vtt",
        label : "English",
        srcLang : "en"
      },
      {
        src : "../assets/subs_es.vtt",
        type : "es",
        label : "Spanish",
        srcLang : "text/vtt"
      }
    ]
    return subtitulos;
  }

  /**
   * Método encarga de consultar y obtener las opciones habilitadas para el componente de video
   * @param idComponente Identificador del componente
   */
  obtenerOpcionesVideo(idComponente: string): VideoOptions {

    var opciones  = new VideoOptions();
    opciones.tiempo = true;
    opciones.calidad = true;
    opciones.volumen = true;
    opciones.playPause = true;
    opciones.velocidad = true;
    opciones.fullscreen = true;
    opciones.subtitulos = true;
    opciones.barraProgreso = true;
    
    return opciones;
  }

  /**
   * Método encargado de consultar y obtener el archivo pdf que se renderizara en el
   * componente de presentación
   * @param idComponente Identificador del componente
   */
  obtenerSourcePresentacion(idComponente: string): PresentacionSource {
     var presentacionSource =  new PresentacionSource;
     presentacionSource.src = "../../assets/identidades.pdf";
     presentacionSource.nombre = "Identidades Trigonometricas";
     return presentacionSource;
  }

  /**
   * Método encargado de consultar y obtener las opciones definidas para el componente
   * de presentación
   * @param idComponente Identificador del componente
   */
  obtenerOpcionesPresentacion(idComponente: string): PresentacionOptions {
     var opcionesPresentacion =  new PresentacionOptions;
     opcionesPresentacion.navegarPaginas =  true;
     opcionesPresentacion.zoom =  true;
     return opcionesPresentacion;
  }
}
