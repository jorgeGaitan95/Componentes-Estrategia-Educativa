import { Component, OnInit, Input } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer/ng2-pdf-viewer';
import * as $ from 'jquery';
import { StyleLocatorService } from '../../services/style-locator.service';
import { ActivityDataService } from '../../services/activity-data.service';
import { PresentacionSource } from '../../Model/PresentacionSource';
import { PresentacionStyleProps } from '../../Model/presentacionStyleProps';
import { PresentacionOptions } from '../../Model/PresentacionOptions';
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  @Input() variabilidad: string;
  nombreDocumento: string;
  pdfSrc:string;
  pagina:number;
  pdf: any;
  zoom: number = 1.0;
  
  constructor(private styleLocatorService: StyleLocatorService, private activityDataService: ActivityDataService) { 
  }

  ngOnInit() {
    this.asignarPropiedadesDeEstiloAlComponente();
    this.loadSourcePresentacion();
    this.cargarOpcionesPresentacion();
    this.pagina = 1;
  }
  /**
   * Método encargado de asignar las propiedades visuales al componte segun el tipo
   * de variabilidad definida
   */
  asignarPropiedadesDeEstiloAlComponente(): void {
    if ( this.variabilidad && this.variabilidad!==''){
      var presentacionStyleProps: PresentacionStyleProps;
      var prueba = this.styleLocatorService.obtenerPropiedadesEstiloPDF(this.variabilidad)
        .subscribe(
          result => {
            presentacionStyleProps =  result;
            $("#titlebar").css("background-image","url(/assets/texture.png), -webkit-linear-gradient("+presentacionStyleProps.frameColor +","+ presentacionStyleProps.frameColor+")");
            $("#toolbarContainer").css("background-image","url(/assets/texture.png), -webkit-linear-gradient("+presentacionStyleProps.frameColor +","+ presentacionStyleProps.frameColor+")");
            $(".pdfViewer").css("height",parseInt(presentacionStyleProps.height) - 91);
            $(".pdfViewer").css("width",parseInt(presentacionStyleProps.width)-26);
            $('#documentName').css("color",presentacionStyleProps.colorLetra);
            $('.toolbarLabel').css("color",presentacionStyleProps.colorLetra);
            $('#page_num').css("color",presentacionStyleProps.colorLetra);
            $('#pdf-view').css("border",presentacionStyleProps.border);
            $("#presentacion").css("height",parseInt(presentacionStyleProps.height)+30);
          },
          error=>{
            console.log(error);
          }
        );
    }
  }
  
  /**
   * Método encargado de obtener y asignar el recurso al componente
   */
  loadSourcePresentacion(): void {
    var srcPDF:PresentacionSource =  this.activityDataService.obtenerSourcePresentacion("1");
    this.nombreDocumento = srcPDF.nombre;
    this.pdfSrc = srcPDF.src;
  }
  /**
   * Método encargado de ocultar las opciones que no se deseen del componente 
   */
  cargarOpcionesPresentacion(): void {
    var opciones = this.activityDataService.obtenerOpcionesPresentacion("1");
    if(!opciones.navegarPaginas){
      $('#toolbarLeft').hide();
    }
    if(!opciones.zoom){
      $('#zoomButtons').hide();
    }
  }

  /**
   * Get pdf information after it's loaded
   * @param pdf
   */
  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.pdf = pdf;
  }

  navegarSiguientePagina(){
    if(this.pdf !== undefined && this.pagina<this.pdf.numPages){
      this.pagina++;
    }
  }

  navegarPaginaAnterior(){
    if(this.pdf !== undefined && this.pagina>1){
      this.pagina--;
    }
  }

  aplicarZoom(cantidad: number){
    this.zoom +=cantidad;
    if(this.zoom<0.3){
      this.zoom=0.3;
    }
  }
  
  pageRendererEvent(e: CustomEvent){
    if(e.detail.pageNumber===this.pdf.numPages){
      this.pagina=this.pdf.numPages;
    }
  }
}
