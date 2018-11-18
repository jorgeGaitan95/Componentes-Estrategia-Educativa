import { Component, OnInit} from '@angular/core';
import { MensajeChat } from '../../Model/Chat/mensaje-chat';
import { User } from '../../Model/Chat/user';
import { ActivityDataService } from '../../services/activity-data.service';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  mensajes: MensajeChat[];
  contactos: User[];
  userId:number;
  textoNuevoMensaje: string;
  faComments = faComments;

  constructor(private activityDataService: ActivityDataService) { }

  ngOnInit() {
    this.userId = 2;
    this.mensajes = this.activityDataService.obtenerMensajeChat("1");
    this.contactos = this.activityDataService.obtenerContactosChat();
    var chatBox = document.querySelector('.container-mensajes');
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  agregarMensaje(): void{
    var newMensaje= new MensajeChat();
    newMensaje.userImg = "../../../assets/ARG.png";
    newMensaje.userId = 2;
    newMensaje.userName = "Jose Fernando";
    newMensaje.mensaje = this.textoNuevoMensaje;
    this.mensajes.push(newMensaje);
    this.textoNuevoMensaje = "";
    var chatBox = document.querySelector('.container-mensajes');
    chatBox.scrollTop = chatBox.scrollHeight + 36;
    
  }

}
