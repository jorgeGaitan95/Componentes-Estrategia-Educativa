import { Component, OnInit } from '@angular/core';
import { ItemTemario } from '../../Model/Temario/ItemTemario';
import { ActivityDataService } from '../../services/activity-data.service';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrls: ['./temario.component.css']
})
export class TemarioComponent implements OnInit {

  ItemsTemario: ItemTemario[];

  constructor(private activityDataService: ActivityDataService) { }

  ngOnInit() {
    this.ItemsTemario = this.activityDataService.obtenerItemsTemario("1");
    console.log(this.ItemsTemario);
    
  }

}
