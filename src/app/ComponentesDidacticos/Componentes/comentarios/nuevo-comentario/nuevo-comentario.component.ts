import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comentario } from '../../../Model/Comentarios/comentario';
@Component({
  selector: 'app-nuevo-comentario',
  templateUrl: './nuevo-comentario.component.html',
  styleUrls: ['./nuevo-comentario.component.css']
})
export class NuevoComentarioComponent implements OnInit {
  @Input() addRespuesta:string;
  @Output() add = new EventEmitter<Comentario>();
  @Output() cancel = new EventEmitter();
  textoBotonAgregar:string = "Añadir Comentario";
  isNuevaRespuesta:boolean = false;
  textoComentario:string;

  constructor() { 
    
  }

  ngOnInit() {
    if(this.addRespuesta==="Y"){
      this.textoBotonAgregar = "Añadir Respuesta";
      this.isNuevaRespuesta = true;
    }
  }

  agregarComentario():void{
    var comentario= new Comentario();
    comentario.date= new Date();
    comentario.imgUser="https://image.flaticon.com/icons/png/512/194/194935.png";
    comentario.texto= this.textoComentario;
    comentario.userName= "Jorge Gaitán Portillo";
    this.add.emit(comentario);
    this.textoComentario="";
  }

  cancelarComentario(): void{
    this.textoComentario = "";
    this.cancel.emit();
  }
}
