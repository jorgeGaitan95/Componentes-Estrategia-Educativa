import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
import { FromNowPipe } from './pipes/from-now.pipe';
import { NuevoComentarioComponent } from './Components/comentarios/nuevo-comentario/nuevo-comentario.component';
import { DetalleComentarioComponent } from './Components/comentarios/detalle-comentario/detalle-comentario.component';
import { TemarioComponent } from './Components/temario/temario.component';
import { OverwiewVideoComponent } from './Components/video/overwiew-video/overwiew-video.component';
import { MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemTemarioComponent } from './Components/temario/item-temario/item-temario.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    PresentacionComponent,
    RepositorioComponent,
    IndiceContenidoComponent,
    TranscripcionComponent,
    ChatComponent,
    ComentariosComponent,
    FromNowPipe,
    NuevoComentarioComponent,
    DetalleComentarioComponent,
    TemarioComponent,
    OverwiewVideoComponent,
    ItemTemarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PdfViewerModule,
    HttpModule,
    MatTabsModule,
    MatCardModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [
    StyleLocatorService,
    ActivityDataService,
    SincronizacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
