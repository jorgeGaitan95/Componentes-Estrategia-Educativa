import { Component} from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { EstrategiaDataService } from './services/estrategia-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Componentes';
  faAngleRight = faAngleRight;
  faCalendarAlt = faCalendarAlt;
  faAngleLeft = faAngleLeft;

  constructor(private estrategiaDataService: EstrategiaDataService) { }







}
