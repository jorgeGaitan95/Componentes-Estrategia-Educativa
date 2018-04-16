import { Injectable } from '@angular/core';

import { VideoSource } from '../Model/Video/VideoSource';
import { VideoOptions } from '../Model/Video/VideoOptions';
import { VideoSubtitulosSource } from '../Model/Video/VideoSubtitulosSource';
import { PresentacionSource } from '../Model/Presentacion/PresentacionSource';
import { PresentacionOptions } from '../Model/Presentacion/PresentacionOptions';
import { RepositorioSource } from '../Model/Repositorio/RepositorioSource';
import { TemaContenido } from '../Model/Indice/TemaContenido'
import { ItemSincronizacion } from '../Model/ItemSincronizacion';
import { Comentario } from '../Model/Comentarios/comentario';
import { MensajeChat } from '../Model/Chat/mensaje-chat';
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
     opcionesPresentacion.navegarPaginas = true;
     opcionesPresentacion.zoom = true;
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

  obtenerItemsSincronizacion(idComponente: string): ItemSincronizacion[]{
    var itemsSincronizacion = [
      {
        tiempo: 5,
        pagina: 1,
        tema: "Introduccion"
      },
      {
        tiempo: 15,
        pagina: 2,
        tema: "Historia"
      },
      {
        tiempo: 25,
        pagina: 3,
        tema: "Presente"
      },
      {
        tiempo: 45,
        pagina: 4,
        tema: "Futuro"
      },
      {
        tiempo: 80,
        pagina: 5,
        tema: "Acciones siguientes"
      },
      {
        tiempo: 100,
        pagina: 6,
        tema: "Concluciones"
      },
      {
        tiempo: 180,
        pagina: 7,
        tema: "Concluciones"
      },
      {
        tiempo: 360,
        pagina: 8,
        tema: "Concluciones"
      },
      {
        tiempo: 500,
        pagina: 9,
        tema: "Concluciones"
      }
    ];
    return itemsSincronizacion;
  }

  obtenerComentarios(idComponente: string): Comentario[]{
    var comentarios = [
      {
        date: new Date(2018,3,15,16,32,25),
        imgUser:"https://image.flaticon.com/icons/png/512/194/194935.png",
        texto:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corrupti laudantium laboriosam in expedita quaerat perferendis, delectus labore doloribus iusto repudiandae tenetur error repellendus voluptatum inventore alias? Veniam, eveniet natus?",
        userName:"Jorge Gaitán Portillo",
        respuestas:[{
          date: new Date(2018,3,15,16,45,25),
          imgUser:"http://www.epsomps.vic.edu.au/wp-content/uploads/2016/09/512x512-1-300x300.png",
          texto:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          userName:"Juliana Rengifo",
          respuestas:null
        },{
          date: new Date(2018,3,15,16,40,25),
          imgUser:"https://image.flaticon.com/icons/png/512/190/190612.png",
          texto:"Exercitationem corrupti laudantium laboriosam in expedita quaerat perferendis, delectus labore doloribus iusto repudiandae tenetur error",
          userName:"Armando Casas",
          respuestas:null
        }
      ]},
      {
        date: new Date(2018,3,14,9,32,25),
        imgUser:"http://www.epsomps.vic.edu.au/wp-content/uploads/2016/09/512x512-1-300x300.png",
        texto:"Exercitationem corrupti laudantium laboriosam in expedita quaerat perferendis, delectus labore doloribus iusto repudiandae tenetur error",
        userName:"Juliana Rengifo",
        respuestas:null
      },
      {
        date: new Date(2018,1,27,16,32,25),
        imgUser:"https://image.flaticon.com/icons/png/512/190/190612.png",
        texto:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        userName:"Armando Casas",
        respuestas:null
      }
    ]
    return comentarios;
  }

  obtenerMensajeChat(idComponente: string):  MensajeChat[]{
    var mensajes = [
      {
        userId: 1,
        userImg: "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100",
        userName: "Jorge Gaitán",
        mensaje: "Hola Mundo"
      },
      {
        userId: 2,
        userImg: "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100",
        userName: "Jose Fernando",
        mensaje: "Hola a todos"
      },
      {
        userId: 3,
        userImg: "http://www.epsomps.vic.edu.au/wp-content/uploads/2016/09/512x512-1-300x300.png",
        userName: "Juliana Rengifo",
        mensaje: "Saludos"
      },
      {
        userId: 1,
        userImg: "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100",
        userName: "Jorge Gaitán",
        mensaje: "Esto es una prueba del chat"
      }
    ]
    return mensajes;
  }

}
