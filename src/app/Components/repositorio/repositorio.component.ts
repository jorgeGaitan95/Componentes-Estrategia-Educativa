import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { StyleLocatorService } from '../../services/style-locator.service';
import { ActivityDataService } from '../../services/activity-data.service';
import { RepositorioSource } from '../../Model/Repositorio/RepositorioSource';
import { RepositorioStyleProps } from '../../Model/Repositorio/RepositorioStyleProps';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {
  
  @Input() variabilidad: string;
  recursos: RepositorioSource[];

  constructor(private styleLocatorService: StyleLocatorService, private activityDataService: ActivityDataService) { }

  ngOnInit() {
    this.asignarPropiedadesDeEstiloAlComponente();
    this.loadSourcesRepositorio();
  }

  /**
   * Método encargado de asignar las propiedades visuales al componte segun el tipo
   * de variabilidad definida
   */
  asignarPropiedadesDeEstiloAlComponente(): void {
    if ( this.variabilidad && this.variabilidad!==''){
      var repositorioStyleProps: RepositorioStyleProps;
      var prueba = this.styleLocatorService.obtenerPropiedadesRepositorio(this.variabilidad)
        .subscribe(
          result => {
            repositorioStyleProps =  result;
            $('#repositorio').css("width",repositorioStyleProps.width);
            $('#repositorio').css("height",repositorioStyleProps.height);
            $('#repositorio').css("border",repositorioStyleProps.border);
            $('#repositorio').css("padding",repositorioStyleProps.padding);
            $('.name-item-repository').css("color",repositorioStyleProps.colorLetra);
          },
          error=>{
            console.log(error);
          }
        );
    }
  }

  /**
   * Método encargado de cargar el listado de recursos asignados al componente
   */
  loadSourcesRepositorio(): void{
    this.recursos = this.activityDataService.obtenerSoucesRepositorio("1");
  }

}
