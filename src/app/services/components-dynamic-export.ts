import { Component, NgModule, OnInit,Injectable } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { DynamicComponent } from '../Components/dynamic/dynamic.component';
import { ComponentesDidacticosModule } from '../ComponentesDidacticos/componentes-didacticos.module';
@Injectable()
export class ComponentsDynamicExport {
    constructor() { }

    public createIconComponentModule(iconComponentType: any) {
        @NgModule({
            imports: [ CommonModule, ComponentesDidacticosModule],
            declarations: [
                iconComponentType
            ],
            providers: [
            ],
            entryComponents: [iconComponentType]
        })
        class RuntimeComponentModule {}
    
        return RuntimeComponentModule;
      }
    
      public createNewIconComponent(iconContents: string, iconClass: string, iconSize: number) {
        @Component({
            selector: 'dynamic-icon-component',
            template: iconContents
        })
        class DynamicComponent1 implements OnInit {
            private iconContents: string;
    
            ngOnInit() {
                this.iconContents = iconContents;
            }
            
            public open2(str: string){
                console.log("Hola desde componente dinamico");
            }
        
        }
        return DynamicComponent1;
    }
}