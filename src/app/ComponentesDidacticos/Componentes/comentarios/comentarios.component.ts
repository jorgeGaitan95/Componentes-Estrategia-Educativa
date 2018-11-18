import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../Model/Comentarios/comentario';
import { ActivityDataService } from '../../services/activity-data.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  Comentarios: Comentario[];
  
  constructor(private activityDataService: ActivityDataService) { }

  ngOnInit() {
    this.Comentarios = this.activityDataService.obtenerComentarios("1");
  }

  agregarNuevoComentario(comentario: Comentario):void{
    console.log("Debo agreagar un nuevo comentario:");
    console.log(comentario);
    this.Comentarios.unshift(comentario);
  }
  
}
