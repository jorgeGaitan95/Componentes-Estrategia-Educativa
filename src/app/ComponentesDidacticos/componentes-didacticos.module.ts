import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { VideoComponent } from './Componentes/video/video.component';
import { PresentacionComponent } from './Componentes/presentacion/presentacion.component';
import { RepositorioComponent } from './Componentes/repositorio/repositorio.component';
import { IndiceContenidoComponent } from './Componentes/indice-contenido/indice-contenido.component';
import { StyleLocatorService } from './services/style-locator.service';
import { ActivityDataService } from './services/activity-data.service';
import { SincronizacionService } from './services/sincronizacion.service';
import { TranscripcionComponent } from './Componentes/transcripcion/transcripcion.component';
import { ChatComponent } from './Componentes/chat/chat.component';
import { ComentariosComponent } from './Componentes/comentarios/comentarios.component';
import { NuevoComentarioComponent } from './Componentes/comentarios/nuevo-comentario/nuevo-comentario.component';
import { DetalleComentarioComponent } from './Componentes/comentarios/detalle-comentario/detalle-comentario.component';
import { TemarioComponent } from './Componentes/temario/temario.component';
import { FromNowPipe } from '../pipes/from-now.pipe';
import { OverwiewVideoComponent } from './Componentes/video/overwiew-video/overwiew-video.component';
import { QuillModule } from 'ngx-quill';
import { ItemTemarioComponent } from './Componentes/temario/item-temario/item-temario.component';
import { TareaComponent } from './Componentes/tarea/tarea.component';
import { FileDropModule } from 'ngx-file-drop';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap';
import { QuizComponent } from './Componentes/quiz/quiz.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PdfViewerModule,
    QuillModule,
    MatTabsModule,
    MatTabsModule,
    FontAwesomeModule,
    FileDropModule,
    Ng2TableModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    VideoComponent,
    PresentacionComponent,
    FromNowPipe,
    RepositorioComponent,
    IndiceContenidoComponent,
    TranscripcionComponent,
    ChatComponent,
    ComentariosComponent,
    NuevoComentarioComponent,
    DetalleComentarioComponent,
    TemarioComponent,
    OverwiewVideoComponent,
    ItemTemarioComponent,
    TareaComponent,
    QuizComponent
  ],
  providers:[
    StyleLocatorService,
    ActivityDataService,
    SincronizacionService
  ],
  exports:[
    VideoComponent,
    PresentacionComponent,
    RepositorioComponent,
    IndiceContenidoComponent,
    TranscripcionComponent,
    ChatComponent,
    ComentariosComponent,
    NuevoComentarioComponent,
    DetalleComentarioComponent,
    TemarioComponent,
    OverwiewVideoComponent,
    ItemTemarioComponent,
    TareaComponent,
    QuizComponent
  ]
})
export class ComponentesDidacticosModule { }
