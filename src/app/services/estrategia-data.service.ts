import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Actividad } from '../Model/Actividad';
@Injectable()
export class EstrategiaDataService {

  actividadesCollection:  Observable<Actividad[]>;
  constructor() { }

  /**
   * Método encargado de localizar y obtener los estilos definidos para el componente
   * de indice en una determinada variabilidad
   * @param variabilidad nombre de la variabilidad
   */
  ObtenerActividadesEstrategiaDidactica(): Actividad[] {
    //this.actividadesCollection = this.db.collection('actividades').valueChanges();
    //return this.actividadesCollection;
    var actvidades =  [
      {
          tipoActividad: "Lectura",
          Role: "Individual",
          Nombre: "Conceptos básicos de Bases de Datos",
          FechaInicio: "6/08/2018 - 8:00",
          FechaFin: "10/08/2018 - 00:00",
          Titulo: "Aprendamos sobre conceptos básicos de Bases de Datos",
          Descipcion: "En esta actividad de formación te invitamos a aprender sobre los conceptos básicos de las bases de datos como: ¿Que és una base de datos?, Cuales son los tipos que existen?, ¿Qué es un sistema de bases de datos? y la importancias de los sistemas de información en las organizaciones. Para ello, lee el material que se presenta en la sección de Medios. \n\n Si deseas ampliar información sobre esta lección, hemos dispuesto recursos adicionales que puedes acceder. En caso de que tengas alguna inquietud sobre la lección o los recursos adicionales consultados, puedes hacer llegar tus inquietudes a través de los diferentes servicios que hemos dispuesto para ti.",
          Motivacion: "Al terminar la lección, estarás en capacidad de entender y conocer el concepto de una base de datos y sus principales características básicas. Además, esta lección te ayudará en el aprendizaje de nuevos conocimientos acerca de la temática.",
          Interface: "prueba"
      },
      {
        tipoActividad: "Evaluación Escrita",
        Role: "Individual",
        Nombre: "Quiz Conceptos Básicos de BD",
        FechaInicio: "13/08/2018 - 8:00",
        FechaFin: "17/08/2018 - 00:00",
        Titulo: "Evalúa tus conocimientos sobre conceptos básicos de bases de datos",
        Descipcion: "En esta actividad te invitamos a evaluar los conocimientos adquiridos a través de la lectura de la guía sobre los conceptos básicos de bases de datos. Para ello, en la sección de medios encontrarás un quiz de 5 preguntas de selección múltiple relacionadas con la temática. Responde el cuestionario las veces que sea necesario hasta obtener todas las preguntas correctas.",
        Motivacion: "Es importante tener afianzados los conocimientos básicos de esta unidad porque son los fundamentos para las siguientes unidades de aprendizaje. Igualmente, al contestar correctamente las preguntas, obtendrás tus puntos de bonificación.",
        Interface: "quiz"
      },
      {
        tipoActividad: "Assimilative / Lecture",
        Role: "Individual",
        Nombre: "Modelo Relacional",
        FechaInicio: "20/08/2018 - 8:00",
        FechaFin: "24/08/2018 - 00:00",
        Titulo: "Aprendamos sobre el modelo relacional",
        Descipcion: "En esta actividad te invitamos a conocer sobre los conceptos teóricos del modelo relacional, tema fundamental para modelar los datos de una organización. Para ello, observa atentamente el video y la presentación de la temática que se encuentra en la sección de medios.",
        Motivacion: "Una vez terminada la lección, estarás en capacidad de identificar las partes que conforman un modelo E/R además de definir y entender los conceptos. La base conceptual es fundamental para llegar a la parte práctica, pronto estarás en capacidad de construir modelos E/R.",
        Interface: "variabilidad3",
        Medio:"Presentación modelo relacional.pdf"
      },
      {
        tipoActividad: "Training",
        Role: "Individual",
        Nombre: "Taller modelo relacional",
        FechaInicio: "27/08/2018 - 8:00",
        FechaFin: "31/08/2018 - 00:00",
        Titulo: "Taller práctico sobre el modelo relacional",
        Descipcion: "En esta actividad de entrenamiento podrás practicar los conceptos que has aprendido acerca del modelo relacional. Para ello, deberás resolver los ejercicios que se presentan en el documento “Taller Modelo Relacional.pdf”, que se encuentra disponible en la sección de recursos. Una vez resueltos los ejercicios, deberás enviar los resultados como se especifica en el documento. El envío lo puedes realizar en la sección de Entregable.",
        Motivacion: "A través de este taller podrás afianzar los conceptos del modelo relacional y conocer la herramienta Oracle SQL Developement Data Modeler para realizar modelos de entidad relación. Igualmente, podrás practicar funcionalidades básicas de la herramienta para crear un modelo entidad relación y su correspondiente código en SQL.",
        Interface: "Entrega",
      },
      {
        tipoActividad: "Comunicativa/counceling",
        Role: "Grupal ",
        Nombre: "asesoría",
        FechaInicio: "3/09/2018 - 8:00",
        FechaFin: "3/09/2018 - 10:00",
        Titulo: "Asesoría sobre el modelo relacionall",
        Descipcion: "Hemos detectado algunas falencias en el proceso de aprendizaje en relación al modelo relacional. Te invito a que asistas a la sesión de asesoría en el horario establecido. En la sección Medios podrás encontrar el canal de comunicación que hemos dispuesto para esta actividad.",
        Motivacion: "Es importante que aclares tus dudas para que puedas afianzar los conocimientos.",
        Interface: "variabilidad2",
      },
      {
        tipoActividad: "Productive",
        Role: "Grupal ",
        Nombre: "Proyecto Entrega 1",
        FechaInicio: "3/09/2018 - 8:00",
        FechaFin: "14/09/2018 - 00:00",
        Titulo: "Entrega 1 del proyecto final del curso",
        Descipcion: "Para esta primera entrega del proyecto final, deberás realizar el modelo entidad relación que modela los datos del sistema interactivo que vas a desarrollar. La entrega consta de la imagen del modelo E/R y el código SQL correspondiente al modelo físico de la base de datos.",
        Motivacion: "Las entregas parciales del proyecto son importantes porque, además de que vas aplicando los conocimientos en un proyecto real, puedes ir adelantando el desarrollo del proyecto final del curso.",
        Interface: "Entrega",
      },
    ]
    return actvidades;
  }

}
