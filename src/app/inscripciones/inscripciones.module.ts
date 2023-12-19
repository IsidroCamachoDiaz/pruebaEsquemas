import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { FormularioInscripcionComponent } from './formulario-inscripcion/formulario-inscripcion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoInscripcionesComponent } from './listado-inscripciones/listado-inscripciones.component';


@NgModule({
  declarations: [
    InscripcionesComponent,
    FormularioInscripcionComponent,
    ListadoInscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InscripcionesModule { }
