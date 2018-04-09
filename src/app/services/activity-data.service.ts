import { Injectable } from '@angular/core';

import { VideoSource } from '../Model/Video/VideoSource';
import { VideoOptions } from '../Model/Video/VideoOptions';
import { VideoSubtitulosSource } from '../Model/Video/VideoSubtitulosSource';
import { PresentacionSource } from '../Model/Presentacion/PresentacionSource';
import { PresentacionOptions } from '../Model/Presentacion/PresentacionOptions';
import { RepositorioSource } from '../Model/Repositorio/RepositorioSource';
import { TemaContenido } from '../Model/Indice/TemaContenido'

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
     opcionesPresentacion.navegarPaginas = false;
     opcionesPresentacion.zoom = false;
     return opcionesPresentacion;
  }

  /**
  * Método encargado de obtner la lista con la informacion de los recursos de video que se
  * le asignaron al componente para cada una de las resoluciones.
  * @param idComponente Identificador del componente
  */
  obtenerSoucesRepositorio(idComponente: string): RepositorioSource[] {
    var recursos = [
      {
        "name":"identidades",
        "url": "../../assets/360.mp4",
        "fileType":"application/video",
        "imgSrc": "../../assets/mpeg-24.png"
      },
      {
        "name":"machine_learning",
        "url": "../../assets/machine_learning/machine_learning.mp4",
        "fileType":"application/video",
        "imgSrc": "../../assets/mpeg-24.png"
      },
      {
        "name":"identidades",
        "url": "../../assets/identidades.pdf",
        "fileType":"application/pdf",
        "imgSrc": "../../assets/pdf-24.png"
      },
      {
        "name":"presentaciones multimedia",
        "url": "../../assets/presentaciones_multimedia.pdf",
        "fileType":"application/pdf",
        "imgSrc": "../../assets/pdf-24.png"
      }
    ];
    return recursos;
  }

  /**
   * Método encargado de obtner los temas del indice definidos para un determinado componente
   * @param idComponente Identificador del componente
   */
  obtenerTemasIndice(idComponente: string): TemaContenido[] {
    var listaTemas = [
      {
        titulo: "Tema 1",
        nombre: "Introduccion",
        segundoVideo: 30,
        paginaPresentacion: 1
      },
      {
        titulo: "Tema 2",
        nombre: "Historia",
        segundoVideo: 60,
        paginaPresentacion: 2
      },
      {
        titulo: "Tema 3",
        nombre: "Presente",
        segundoVideo: 70,
        paginaPresentacion: 3
      },
      {
        titulo: "Tema 4",
        nombre: "Futuro",
        segundoVideo: 90,
        paginaPresentacion: 4
      },
      {
        titulo: "Tema 5",
        nombre: "Acciones siguientes",
        segundoVideo: 100,
        paginaPresentacion: 5
      },
      {
        titulo: "Tema 6",
        nombre: "Concluciones",
        segundoVideo: 120,
        paginaPresentacion: 6
      }
    ];
    return listaTemas;
  }
}
