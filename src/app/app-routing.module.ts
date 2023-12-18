import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) }, 
{ path: 'eventos', loadChildren: () => import('./eventos/eventos.module').then(m => m.EventosModule) }, 
{ path: 'inscripciones', loadChildren: () => import('./inscripciones/inscripciones.module').then(m => m.InscripcionesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
