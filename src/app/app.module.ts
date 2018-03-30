import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { RepositorioComponent } from './repositorio/repositorio.component';
import { IndiceContenidoComponent } from './indice-contenido/indice-contenido.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    PresentacionComponent,
    RepositorioComponent,
    IndiceContenidoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
