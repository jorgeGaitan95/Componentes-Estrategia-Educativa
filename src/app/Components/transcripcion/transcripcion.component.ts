import { Component, OnInit, Input } from '@angular/core';
import { TranscripcionStyleProps } from '../../Model/Video/Transcripcion/TranscripcionStyleProps';
import { StyleLocatorService } from '../../services/style-locator.service';
import * as $ from 'jquery';
declare var videojs: any;
declare var jQuery: any;

@Component({
  selector: 'app-transcripcion',
  templateUrl: './transcripcion.component.html',
  styleUrls: ['./transcripcion.component.css']
})
export class TranscripcionComponent implements OnInit {
 
  @Input() variabilidad: string;
  @Input() idVideo: string;
  video: any;

  /**
   * Constructor
   */
  constructor(private styleLocatorService: StyleLocatorService) { }
  
  /**
   * Metodo brindado por angular, que se ejecuta depues de cargar el componente
   */
  ngOnInit() {
    this.asignarPropiedadesDeEstiloAlComponente();
    this.inicializarComponenteTranscripcion();
  }

  /**
   * Metodo encargado de incializar el componente relacionandolo con un determinado vídeo
   */
  inicializarComponenteTranscripcion(): void{
    //Obtiene la referencia del video relacionado a la transcripción
    if(this.idVideo && this.idVideo!==''){
      this.video = videojs(this.idVideo);
      this.video.addEventListener('load',this.initTranscripcion());
    }
  }

  /**
   * Método encargado de inicializar el componente de transcipcion dentro del vídeo
   */
  initTranscripcion(): void {
    var options = { showTitle: false, showTrackSelector: true };
    var transcript = this.video.transcript(options);
    var transcriptContainer = $('#transcript');
    transcriptContainer.append(transcript.el());
    //TODO: llevar a la libreria de la transcipción
    $.fn.highlight = function (str, className) {
      var regex = new RegExp(str, "gi");
      return this.each(function () {
          $(this).contents().filter(function() {
              return this.nodeType == 3 && regex.test(this.nodeValue);
          }).replaceWith(function() {
              return (this.nodeValue || "").replace(regex, function(match) {
                  return "<span class=\"" + className + "\">" + match + "</span>";
              });
          });
      });
    };
    $(".queryButton").click(function(){
      var seleccionadas=$(".highlight");
      seleccionadas.each(function () {
          $(this).contents().unwrap();
      });
      var query=$("#query").val();
      $(".transcript-text").highlight(query,"highlight");
    });
  }
  
  /**
   * Método encargado de asignar las propiedades de estilo al componente a partir del archivo JSON de la 
   * variabilidad.
   */
  asignarPropiedadesDeEstiloAlComponente(): void {
    if ( this.variabilidad && this.variabilidad!==''){
      var transcipcionStyleProps: TranscripcionStyleProps;
      var prueba = this.styleLocatorService.obtenerPropiedadesEstiloTranscripcion(this.variabilidad)
        .subscribe(
          result => {
            transcipcionStyleProps =  result;
            console.log(transcipcionStyleProps);
          },
          error=>{
            console.log(error);
          }
        );
    }
  }

  

}
