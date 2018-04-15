import { Component, OnInit, Input } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer/ng2-pdf-viewer';
import * as $ from 'jquery';
import { StyleLocatorService } from '../../services/style-locator.service';
import { ActivityDataService } from '../../services/activity-data.service';
import { SincronizacionService } from '../../services/sincronizacion.service';
import { PresentacionSource } from '../../Model/Presentacion/PresentacionSource';
import { PresentacionStyleProps } from '../../Model/Presentacion/presentacionStyleProps';
import { PresentacionOptions } from '../../Model/Presentacion/PresentacionOptions';
import { ItemSincronizacion } from '../../Model/ItemSincronizacion';
import { Subscription } from 'rxjs/Subscription';

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
  subscription: Subscription;
  ItemsSincronizacion: ItemSincronizacion[];
  
  constructor(private styleLocatorService: StyleLocatorService, private activityDataService: ActivityDataService,
    private sincronizacionService: SincronizacionService) 
  { 
    this.subscription= sincronizacionService.paginaChangeAnnounced$.subscribe(
      page => {  
        this.pagina = page;
      });
  }

  ngOnInit() {
    this.asignarPropiedadesDeEstiloAlComponente();
    this.loadSourcePresentacion();
    this.cargarOpcionesPresentacion();
    this.consultarItemsSincronizacion();
    this.pagina = 1;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
  
  consultarItemsSincronizacion() :  void{
    this.ItemsSincronizacion = this.activityDataService.obtenerItemsSincronizacion("1");
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
      this.notificarCambioPaginaSincronizacion();
    }
  }

  navegarPaginaAnterior(){
    if(this.pdf !== undefined && this.pagina>1){
      this.pagina--;
      this.notificarCambioPaginaSincronizacion();
    }
  }

  notificarCambioPaginaSincronizacion(): void{
    if(this.ItemsSincronizacion){
      let temaSincronizacion: ItemSincronizacion;
      for (let item of this.ItemsSincronizacion) {
        if(item.pagina == this.pagina)
          temaSincronizacion = item;
      }
      if(temaSincronizacion){
        console.log(temaSincronizacion);
        this.sincronizacionService.announceVideoSecondChanged(temaSincronizacion.tiempo);
      }
        
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
