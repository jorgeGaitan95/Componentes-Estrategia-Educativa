import { Component, OnInit, Input } from '@angular/core';
import { FromNowPipe } from '../../../../pipes/from-now.pipe';
import { Comentario } from '../../../Model/Comentarios/comentario';
@Component({
  selector: 'app-detalle-comentario',
  templateUrl: './detalle-comentario.component.html',
  styleUrls: ['./detalle-comentario.component.css']
})
export class DetalleComentarioComponent implements OnInit {
  @Input() comentario: Comentario;
  mostarRespuestas:boolean = false;
  mostarComponenteRespuesta:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  mostrarRespuestas(verRespuestas:boolean): void{
    this.mostarRespuestas = verRespuestas;
  }

  mostrarComponenteRespuesta(verComponenteRespuesta:boolean): void {
    this.mostarComponenteRespuesta = verComponenteRespuesta;
  }

  agregarNuevaRespuesta(respuesta: Comentario): void {
    if(!this.comentario.respuestas){
      this.comentario.respuestas=[];
    }
    this.comentario.respuestas.unshift(respuesta);
    this.mostarRespuestas=true;
    this.mostarComponenteRespuesta=false;
  }

  cancelarCreacionRespuesta(): void{
    this.mostarComponenteRespuesta = false;
  }

}
