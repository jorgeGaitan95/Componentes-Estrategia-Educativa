import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: '',
})
export class DynamicComponent{

  constructor() {
    console.log((<any>DynamicComponent).__annotations__[0].template);
  }

}
