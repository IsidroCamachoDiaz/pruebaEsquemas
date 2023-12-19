import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos.component';
import { FormularioEventosComponent } from './formulario-eventos/formulario-eventos.component';
import { ListadoEventosComponent } from './listado-eventos/listado-eventos.component';

const routes: Routes = [{ path: '', component: EventosComponent ,children:[
  {path:"crear-evento",component:FormularioEventosComponent},
  {path:"modificar-evento/:id",component:FormularioEventosComponent},
  {path:"listado-eventos",component:ListadoEventosComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
