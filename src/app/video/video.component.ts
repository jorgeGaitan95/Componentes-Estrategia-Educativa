import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var videojs: any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var video =  videojs('my-player');
    console.log(video);
  }

}
