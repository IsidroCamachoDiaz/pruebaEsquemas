import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';

const routes: Routes = [
  { path: '', component: ClientesComponent ,children:[  
  {path:"listado-clientes",component:ListadoClientesComponent},
  {path:"nuevo-cliente",component:FormularioClienteComponent},
  {path:"modificar-cliente/:id",component:FormularioClienteComponent},
  {path:"**",redirectTo:"listado-clientes",pathMatch:"full"}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
