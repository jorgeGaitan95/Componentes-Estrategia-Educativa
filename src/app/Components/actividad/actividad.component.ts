import { Compiler, Component, ElementRef, NgModule, NgModuleFactory, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { ComponentsDynamicExport } from '../../services/components-dynamic-export';
import { TemplateLocatorService } from '../../services/template-locator.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  faCalendarAlt = faCalendarAlt;
  faExclamationTriangle = faExclamationTriangle;
  viewMode = 'tab1';
  textHMTL= "";
  showComponent = false;
  
  public dynamicComponent: any;
  public dynamicModule: NgModuleFactory<any>;

  constructor(private _compiler: Compiler, private dynamicComponentExport: ComponentsDynamicExport, private templateLocator : TemplateLocatorService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    let html = ""
    let id = this.activateRoute.queryParams.subscribe(params => {
      let id= params['Id'];
      let template = "";
      if(id==="1")
        template = "prueba";
      else if(id ==="2")
        template = "variabilidad2";
      else if(id ==="3")
        template = "variabilidad3";
      else
        template = "variabilidad4";

      this.templateLocator.obtenerPropiedadesIndiceContenido(template)
        .subscribe(
          result => {
            console.log(result);
            html = result;
            this.dynamicComponent = this.dynamicComponentExport.createNewIconComponent(html, "", 200);
            this.dynamicModule = this._compiler.compileModuleSync(this.dynamicComponentExport.createIconComponentModule(this.dynamicComponent));
          },
          error=>{
            console.log(error);
          }
        );
    })
  }

  transform(html){
    return "";//this.sanitizer.bypassSecurityTrustHtml(html);
  }

  public open(str: string){
    console.log(str);
    
    
    //this.iconContent= `<app-video variabilidad="Variabilidad1" style="float:left; width: 100%;" ></app-video>`;
  }
}
