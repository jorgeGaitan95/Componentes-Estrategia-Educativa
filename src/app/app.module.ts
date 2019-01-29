import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsDynamicExport } from './services/components-dynamic-export';
import { ActividadComponent } from './Components/actividad/actividad.component';
import { ComponentesDidacticosModule } from './ComponentesDidacticos/componentes-didacticos.module';
import { TemplateLocatorService } from './services/template-locator.service';
import { EstrategiaDataService } from './services/estrategia-data.service';
import { environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ActividadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ComponentesDidacticosModule
  ],
  providers: [
    ComponentsDynamicExport,
    TemplateLocatorService,
    EstrategiaDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
