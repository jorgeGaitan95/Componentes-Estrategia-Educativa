import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    if(this.idVideo && this.idVideo!==''){
      this.video = videojs(this.idVideo);
      this.video.addEventListener('load',this.initTranscripcion());
    }
  }

  initTranscripcion(): void{
    var options = {
      showTitle: false,
      showTrackSelector: true
    };
    var transcript = this.video.transcript(options);
    var transcriptContainer = $('#transcript');
    transcriptContainer.append(transcript.el());
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

  

}
