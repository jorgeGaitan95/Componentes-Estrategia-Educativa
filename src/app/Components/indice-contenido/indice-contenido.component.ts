import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import { StyleLocatorService } from '../../services/style-locator.service';
import { ActivityDataService } from '../../services/activity-data.service';
import { SincronizacionService } from '../../services/sincronizacion.service';
import { TemaContenido } from '../../Model/Indice/TemaContenido';
import { IndiceStyleProps } from '../../Model/Indice/IndiceStyleProps';

@Component({
  selector: 'app-indice-contenido',
  templateUrl: './indice-contenido.component.html',
  styleUrls: ['./indice-contenido.component.css']
})
export class IndiceContenidoComponent implements OnInit {
  @Input() variabilidad: string;
  @Output() changePage = new EventEmitter<number>();
  @Output() changeVideoSecond = new EventEmitter<number>(); 
  listaTemas: TemaContenido[];
  itemWidth: number = 170;
  
  constructor(private styleLocatorService: StyleLocatorService, private activityDataService: ActivityDataService,
    private sincronizacionService: SincronizacionService) 
  {
      
  }

  ngOnInit() {
    this.asignarPropiedadesDeEstiloAlComponente();
    this.loadTemasIndice();
  }

  /**
   * Método encargado de asignar las propiedades visuales al componte segun el tipo
   * de variabilidad definida
   */
  asignarPropiedadesDeEstiloAlComponente(): void {
    if( this.variabilidad && this.variabilidad!== ''){
      var indiceStyleProps: IndiceStyleProps;
      var promesaConsultaEstilo =  this.styleLocatorService.obtenerPropiedadesIndiceContenido(this.variabilidad)
      .subscribe(
        result=> {
          indiceStyleProps =  result;
          var container = $(".indice-container");
          container.css("width",indiceStyleProps.width);
          container.css("height",indiceStyleProps.height);
          container.css("border",indiceStyleProps.border);
          container.css("padding",indiceStyleProps.padding);
          container.css("background", indiceStyleProps.colorFondo);
          
          var temaContainer =  $(".tema-container");
          temaContainer.css("margin-right", indiceStyleProps.separacionTemas);
          temaContainer.css("width", indiceStyleProps.estiloTemas.width);
          temaContainer.css("height", indiceStyleProps.estiloTemas.height);
          temaContainer.css("padding", indiceStyleProps.estiloTemas.padding);
          temaContainer.css("border", indiceStyleProps.estiloTemas.border);
          temaContainer.css("border-radius", indiceStyleProps.estiloTemas.borderRadius);
          temaContainer.css("background", indiceStyleProps.estiloTemas.colorFondo);
          temaContainer.css("font-family", indiceStyleProps.estiloTemas.fuenteLetra);
          temaContainer.css("color", indiceStyleProps.estiloTemas.colorLetra);
          temaContainer.css("font-size", indiceStyleProps.estiloTemas.tamanioLetra);
          temaContainer.css("text-align", indiceStyleProps.estiloTemas.alineacionTexto);
          temaContainer.css("line-height", ""+(parseInt(indiceStyleProps.estiloTemas.height)/2)+"px");
          this.itemWidth= parseInt(indiceStyleProps.estiloTemas.width)
                          + parseInt(indiceStyleProps.estiloTemas.padding)*2
                          + parseInt(indiceStyleProps.separacionTemas)
                          + 10;//espacio que podrian llegar a ocupar los bordes del contenedor del tema
        },
        error => {
          console.log(error);
        }
      )
    }
  }

  loadTemasIndice(): void {
    this.listaTemas =  this.activityDataService.obtenerTemasIndice("1");
  }

  navegarTema(temaContenido: TemaContenido): void {
    this.sincronizacionService.announcePageChange(temaContenido.paginaPresentacion);
    this.sincronizacionService.announceVideoSecondChanged(temaContenido.segundoVideo);
  }
}
