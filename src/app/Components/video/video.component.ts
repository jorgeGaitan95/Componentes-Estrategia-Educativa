import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
declare var videojs: any;

import { StyleLocatorService } from '../../services/style-locator.service';
import { ActivityDataService } from '../../services/activity-data.service';
import { VideoStyleProps } from '../../Model/VideoStyleProps';
import { VideoSource } from '../../Model/VideoSource';
import { VideoSubtitulosSource } from '../../Model/VideoSubtitulosSource';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() variabilidad: string;
  video: any;
  sources: VideoSource[];
  subtitulos: VideoSubtitulosSource[];

  constructor(private styleLocatorService: StyleLocatorService, private activityDataService: ActivityDataService) { }

  /**
   * Metodo brindado por angular, que se ejecuta depues de cargar el componente
   */
  ngOnInit() {
    this.video =  videojs('my-player',{
      plugins:{
        videoJsResolutionSwitcher: {
          default: 'high',
          dynamicLabel: true
        }
      }
    });
    this.asignarPropiedadesDeEstiloAlComponente();
    this.loadVideoSources();
    this.loadSubtitulosVideo();
    this.cargarOpcionesVideo();
  }

  /**
   * Método encargado de asignar las propiedades de estilo al componente a partir del archivo JSON de la 
   * variabilidad.
   */
  asignarPropiedadesDeEstiloAlComponente(): void {
    if ( this.variabilidad && this.variabilidad!==''){
      var videoStyleProps: VideoStyleProps;
      var prueba = this.styleLocatorService.obtenerPropiedadesEstiloVideo(this.variabilidad)
        .subscribe(
          result => {
            videoStyleProps =  result;
            $("div.vjs-control-bar").css("background-color",videoStyleProps.controlBarColor);
            $("ul.vjs-menu-content").css("background-color",videoStyleProps.controlBarColor);
            $(".vjs-control").css("color",videoStyleProps.controlBarElementColor);
            $("div.vjs-play-progress").css("background-color",videoStyleProps.progressBarColor);
            $("div.video-js").css({
              "height": videoStyleProps.height,
              "width": videoStyleProps.width,
              "border": videoStyleProps.border
            });
            $("video.vjs-tech").css("padding",videoStyleProps.padding);      
          },
          error=>{
            console.log(error);
          }
        );
    }
  }

  /**
   * Asigna los source de los videos sobre el componente
   */
  loadVideoSources(): void {
    //this.sources =  this.activityDataService.obtenerSoucesVideo("1");
    // Add dynamically sources via updateSrc method
    console.log(this.activityDataService.obtenerSoucesVideo("1"));
    
    this.video.updateSrc(this.activityDataService.obtenerSoucesVideo("1"));
    this.video.on('resolutionchange', function(){
      console.log('Source changed to %s', this.video.src())
    });
    
  }

  /**
   * Asigna los subitulos del video
   */
  loadSubtitulosVideo(): void {
     this.subtitulos =  this.activityDataService.obtenerSubtitulosVideo("1");
     console.log(this.subtitulos);
  }

  /**
    * Oculta las opciones del reproductor de video con base la configuracion establecida
    * para el video
    */
  cargarOpcionesVideo(): void {
    var opciones  =  this.activityDataService.obtenerOpcionesVideo("1");
    var barraControles = this.video.getChild('controlBar');

    if(!opciones.barraProgreso)
      barraControles.removeChild("progressControl");
    if(!opciones.calidad)
      $(".vjs-resolution-button").hide();
    if(!opciones.fullscreen)
      barraControles.removeChild("fullscreenToggle");
    if(!opciones.volumen)
        barraControles.removeChild("volumeMenuButton");    
    if(!opciones.playPause)
      barraControles.removeChild("playToggle");
    if(!opciones.subtitulos)
      barraControles.removeChild("subtitlesButton");
    if(!opciones.tiempo)
      barraControles.removeChild("remainingTimeDisplay");
    if(!opciones.velocidad)
      barraControles.removeChild("playbackRateMenuButton");
  }

  /**
   * Método encargado de navegar a un determinado segundo del video
   * @param segundo Segundo del video al que se desea navegar
   */
  NavegarAlSegundoDelVideo(segundo : Int32Array) : void{
    this.video.currentTime(segundo);
  }



}
