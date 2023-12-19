import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosComponent } from './eventos.component';
import { FormularioEventosComponent } from './formulario-eventos/formulario-eventos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoEventosComponent } from './listado-eventos/listado-eventos.component';


@NgModule({
  declarations: [
    EventosComponent,
    FormularioEventosComponent,
    ListadoEventosComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EventosModule { }
