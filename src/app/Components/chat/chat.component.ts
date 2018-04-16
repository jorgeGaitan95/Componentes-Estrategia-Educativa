import { Component, OnInit} from '@angular/core';
import { MensajeChat } from '../../Model/Chat/mensaje-chat';
import { ActivityDataService } from '../../services/activity-data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensajes: MensajeChat[];
  userId:number;
  textoNuevoMensaje: string;
  constructor(private activityDataService: ActivityDataService) { }

  ngOnInit() {
    this.userId = 2;
    this.mensajes = this.activityDataService.obtenerMensajeChat("1");
    var chatBox = document.querySelector('.container-mensajes');
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  agregarMensaje(): void{
    var newMensaje= new MensajeChat();
    newMensaje.userImg = "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100";
    newMensaje.userId = 2;
    newMensaje.userName = "Jose Fernando";
    newMensaje.mensaje = this.textoNuevoMensaje;
    this.mensajes.push(newMensaje);
    this.textoNuevoMensaje = "";
    var chatBox = document.querySelector('.container-mensajes');
    chatBox.scrollTop = chatBox.scrollHeight + 36;
    
  }

}
