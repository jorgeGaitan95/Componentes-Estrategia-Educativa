import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SincronizacionService {

  private videoSecondSource = new Subject<number>();
  private paginaSource =  new Subject<number>();


  videoSecondChangeAnnounced$ = this.videoSecondSource.asObservable();
  paginaChangeAnnounced$  = this.paginaSource.asObservable();

  
  announceVideoSecondChanged(videoSecond: number){
    this.videoSecondSource.next(videoSecond);
  }
  
  announcePageChange(page: number){
    this.paginaSource.next(page);
  }
}
