import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
declare var videojs: any;

import { StyleLocatorService } from '../../services/style-locator.service';
import { ActivityDataService } from '../../services/activity-data.service';
import { VideoStyleProps } from '../../Model/VideoStyleProps';
import { VideoSource } from '../../Model/VideoSource';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() variabilidad: string;
  sources: VideoSource[];


  constructor(private styleLocatorService: StyleLocatorService, private activityDataService: ActivityDataService) { }

  ngOnInit() {
    var video =  videojs('my-player');
    this.asignarPropiedadesDeEstiloAlComponente();
    this.loadVideoSources();
  }

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

  loadVideoSources(): void{
    this.sources =  this.activityDataService.obtenerSoucesVideo("1");
    console.log(this.sources);
    
  }

}
