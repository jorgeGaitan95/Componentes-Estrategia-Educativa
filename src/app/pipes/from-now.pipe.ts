import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value && (value instanceof Date || typeof value === 'number'))
    {
      return moment(value).locale('es').fromNow();
    }
  }

}
