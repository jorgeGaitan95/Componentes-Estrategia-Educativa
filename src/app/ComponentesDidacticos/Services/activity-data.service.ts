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
import { ItemTemario } from '../Model/Temario/ItemTemario';
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
    opciones.calidad = false;
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
     presentacionSource.src = "../../assets/Guía Práctica Conceptos básicos de Bases de Datos.pdf";
     presentacionSource.nombre = "Guía Práctica Conceptos básicos de Bases de Datos";
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
        "name":"Identidades",
        "url": "../../assets/360.mp4",
        "fileType":"application/video",
        "imgSrc": "../../assets/mpeg-24.png"
      },
      {
        "name":"Machine_learning",
        "url": "../../assets/machine_learning/machine_learning.mp4",
        "fileType":"application/video",
        "imgSrc": "../../assets/mpeg-24.png"
      },
      {
        "name":"Identidades",
        "url": "../../assets/identidades.pdf",
        "fileType":"application/pdf",
        "imgSrc": "../../assets/pdf-24.png"
      },
      {
        "name":"Presentaciones multimedia",
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
        imagen: "../../assets/imgVideo/Introduccion.png",
        segundoVideo: 30,
        paginaPresentacion: 1
      },
      {
        titulo: "Tema 2",
        nombre: "Historia",
        imagen: "../../assets/imgVideo/Prueba.png",
        segundoVideo: 60,
        paginaPresentacion: 2
      },
      {
        titulo: "Tema 3",
        nombre: "Presente",
        imagen: "../../assets/imgVideo/Razones Trigonometricas.png",
        segundoVideo: 70,
        paginaPresentacion: 3
      },
      {
        titulo: "Tema 4",
        nombre: "Futuro",
        imagen: "../../assets/imgVideo/Introduccion.png",
        segundoVideo: 90,
        paginaPresentacion: 4
      },
      {
        titulo: "Tema 5",
        nombre: "Acciones siguientes",
        imagen: "../../assets/imgVideo/Prueba.png",
        segundoVideo: 100,
        paginaPresentacion: 5
      },
      {
        titulo: "Tema 6",
        nombre: "Concluciones",
        imagen: "../../assets/imgVideo/Razones Trigonometricas.png",
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
        userId: 2,
        userImg: "../../assets/ARG.png",
        userName: "Alexandra Ruiz",
        mensaje: "Para cuando queda la proxima entrega?"
      },
      {
        userId: 1,
        userImg: "../../assets/WJG.png",
        userName: "William Jospeh",
        mensaje: "Queda para el próximo martes 18 de agosto. Puedes consultar en l información de la actividad"
      },
      {
        userId: 2,
        userImg: "../../assets/ARG.png",
        userName: "Alexandra Ruiz",
        mensaje: "Gracias por la información"
      },
      {
        userId: 1,
        userImg: "../../assets/WJG.png",
        userName: "William Jospeh",
        mensaje: "Ok, Felicidades"
      },
      {
        userId: 1,
        userImg: "../../assets/WJG.png",
        userName: "William Jospeh",
        mensaje: "Hasta la proxima clase"
      }
    ]
    return mensajes;
  }

  obtenerContactosChat(): any {
    var usuarios = [
      {
        userId: 1,
        userImg: "../../assets/WJG.png",
        nombre: "William Joseph Giraldo Orozco",
        correo: "wjgiraldo@uniquindio.edu.co"
      },
      {
        userId: 2,
        userImg: "../../assets/WYCM.png",
        nombre: "Wilmar Yesid Campo Muñoz",
        correo: "wyocampo@uniquindio.edu.co"
      },
      {
        userId: 3,
        userImg: "../../assets/NDLS.png",
        nombre: "Notificaciones de la secretaria...",
        correo: "notificacionessecretariageneral@uni"
      },
      {
        userId: 4,
        userImg: "../../assets/FDGV.png",
        nombre: "Faber Danilo Giraldo Velasquez",
        correo: "fdgiraldo@uniquindio.edu.co"
      },
      {
        userId: 5,
        userImg: "../../assets/DTUQ.png",
        nombre: "Division Tesoreria UQ",
        correo: "tesoreuq@uniquindio.edu.co"
      }
    ]
    return usuarios;
  }

  obtenerItemsTemario(idComponente: string): ItemTemario[]{
    var temario = [
      {
        nombre: "Formulas Fundamentales",
        segundoVideo: 10,
        mostrarSubtemas: true,
        subTemas: [
          {
            nombre: "Formulas de los inversos o de los reciprocos",
            segundoVideo: 20,
            mostrarSubtemas: true,
            subTemas: null
          },
          {
            nombre: "Formulas del cociente",
            segundoVideo: 30,
            mostrarSubtemas: true,
            subTemas: null
          },
          {
            nombre: "Formulas de los cuadrados",
            segundoVideo: 40,
            mostrarSubtemas: true,
            subTemas: null
          }
        ]
      },
      {
        nombre: "Demostraciones",
        segundoVideo: 50,
        mostrarSubtemas: true,
        subTemas: [
          {
            nombre: "Por similitud con alguna formula",
            segundoVideo: 60,
            mostrarSubtemas: true,
            subTemas: null
          },
          {
            nombre: "Pasando a senos y/o cosenos",
            segundoVideo: 70,
            mostrarSubtemas: true,
            subTemas: null
          },
          {
            nombre: "Despejando de las formulas",
            segundoVideo: 80,
            mostrarSubtemas: true,
            subTemas: null
          },
          {
            nombre: "Realizando las operaciones indicadas",
            segundoVideo: 90,
            mostrarSubtemas: true,
            subTemas: null
          },
          {
            nombre: "Binomios conjugados",
            segundoVideo: 100,
            mostrarSubtemas: true,
            subTemas: null
          }
        ]
      }
    ]
    return temario;
  }

}
