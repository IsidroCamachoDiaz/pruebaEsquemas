import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesComponent } from './inscripciones.component';
import { FormularioInscripcionComponent } from './formulario-inscripcion/formulario-inscripcion.component';
import { ListadoInscripcionesComponent } from './listado-inscripciones/listado-inscripciones.component';

const routes: Routes = [{ path: '', component: InscripcionesComponent,children:[
  {path:"nueva-inscripcion",component:FormularioInscripcionComponent},
  {path:"modificar-inscripcion/:id",component:FormularioInscripcionComponent},
  {path:"listado-inscripciones",component:ListadoInscripcionesComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
