import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { VideoComponent } from './Components/video/video.component';
import { PresentacionComponent } from './Components/presentacion/presentacion.component';
import { RepositorioComponent } from './Components/repositorio/repositorio.component';
import { IndiceContenidoComponent } from './Components/indice-contenido/indice-contenido.component';
import { StyleLocatorService } from './services/style-locator.service';
import { ActivityDataService } from './services/activity-data.service';
import { SincronizacionService } from './services/sincronizacion.service';
import { TranscripcionComponent } from './Components/transcripcion/transcripcion.component';
import { ChatComponent } from './Components/chat/chat.component';
import { ComentariosComponent } from './Components/comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    PresentacionComponent,
    RepositorioComponent,
    IndiceContenidoComponent,
    TranscripcionComponent,
    ChatComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PdfViewerModule,
    HttpModule
  ],
  providers: [
    StyleLocatorService,
    ActivityDataService,
    SincronizacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
