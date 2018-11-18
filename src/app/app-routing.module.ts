import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ActividadComponent } from './Components/actividad/actividad.component';
const routes: Routes = [
  { path: '', redirectTo: 'actividad', pathMatch: 'full' },
  { path: '**', redirectTo: 'actividad' },
  { path: 'actividad', component: ActividadComponent },
  { path: 'actividad/:Id', component: ActividadComponent },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
