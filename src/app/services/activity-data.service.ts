import { Injectable } from '@angular/core';

import { VideoSource } from '../Model/VideoSource';
import { VideoOptions } from '../Model/VideoOptions';
import { VideoSubtitulosSource } from '../Model/VideoSubtitulosSource';

@Injectable()
export class ActivityDataService {

  constructor() { }

  obtenerSoucesVideo(idComponente: string): VideoSource[] {
     var sources =  [
       {
          src : "../assets/144.mp4",
          type : "video/webm",
          label : "144",
          dataRes : "144"
       },
       {
          src : "../assets/360.mp4",
          type : "video/mp4",
          label : "480",
          dataRes : "480"
       }
     ]
     return sources;
  }
}
