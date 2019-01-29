import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  viewMode = 'tab1';
  public data: Array<any> = [];
  public columns: Array<any> = [
    { title: 'Intento', name: 'intento' },
    { title: 'Estado', name: 'estado' },
    { title: 'Respuestas Correctas', name: 'marks' },
    { title: 'Calificación', name: 'calificacion' },
  ];
  public config: any = {
    className: ['table-striped', 'table-bordered']
  };
  public rows: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.data.push({ intento: 1, estado: "Finalizado", marks: 1.00, calificacion:2.50 });
    this.data.push({ intento: 2, estado: "Finalizado", marks: 3.00, calificacion:7.50 });
    this.rows = this.data
  }

  RealizarPrueba(){
    this.viewMode = 'tab2';
  }

  ObtenerResultados(){
    this.viewMode = 'tab1';
  }

}
