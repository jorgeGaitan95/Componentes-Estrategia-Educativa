import { Component, OnInit, Input } from '@angular/core';
import { ItemTemario } from '../../../Model/Temario/ItemTemario';
import { SincronizacionService } from '../../../services/sincronizacion.service';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-item-temario',
  templateUrl: './item-temario.component.html',
  styleUrls: ['./item-temario.component.css']
})
export class ItemTemarioComponent implements OnInit {
  @Input() itemsTemario: ItemTemario[];
  mostrarSubtemas:boolean = true;
  faCaretDown = faCaretDown;
  faCaretRight = faCaretRight;


  constructor(private sincronizacionService: SincronizacionService) { }

  ngOnInit() {
  }

  mostrarSubtemasTemario(item:ItemTemario,verRespuestas:boolean): void{
    item.mostrarSubtemas = verRespuestas;
  }

  navegarTema(item:ItemTemario): void {
    this.sincronizacionService.announceVideoSecondChanged(item.segundoVideo);
  }

}
