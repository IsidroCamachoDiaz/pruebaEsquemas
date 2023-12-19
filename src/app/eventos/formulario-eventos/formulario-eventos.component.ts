import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/modelos/evento';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-formulario-eventos',
  templateUrl: './formulario-eventos.component.html',
  styleUrls: ['./formulario-eventos.component.css']
})
export class FormularioEventosComponent implements OnInit {
  constructor(private f: FormBuilder, private fbs: BaseDeDatosService, private router: Router, private ruta: ActivatedRoute) { }
  e: Evento = { nombreEvento: "", tipoEvento: "", numeroInscritos: 0, limiteIncripciones: 0, fechaEvento: new Date, lugar: "", precio: 0 }
  id: any;
  ngOnInit(): void {
    if (this.ruta.snapshot.paramMap.get("id")) {
      this.id = this.ruta.snapshot.paramMap.get("id");
      this.fbs.getDocumentById(this.id, "eventos").subscribe(res => {
        this.e = res;
        this.formulario.patchValue({
          nombreEvento: this.e.nombreEvento,
          tipoEvento: this.e.tipoEvento,
          numeroInscritos: this.e.numeroInscritos,
          limiteIncripciones: this.e.limiteIncripciones,
          fechaEvento: this.e.fechaEvento,
          lugar: this.e.lugar,
          precio: this.e.precio
        });

      })
    }
  }



  formulario = this.f.group({
    nombreEvento: ["", Validators.required],
    tipoEvento: ["", Validators.required],
    numeroInscritos: [0, Validators.required],
    limiteIncripciones: [0, Validators.required],
    fechaEvento: [new Date, Validators.required],
    lugar: ["", Validators.required],
    precio: [0, Validators.required]
  })

  meterEvento() {
    this.fbs.newDocument(this.e, "eventos");
    this.router.navigateByUrl("/eventos/listado-eventos");
  }
  modificarEvento() {
    this.fbs.updateDocument(this.e, "eventos");
    this.router.navigateByUrl("/eventos/listado-eventos");
  }

  anadirFormulario() {
    this.e.limiteIncripciones = this.formulario.get("limiteIncripciones")?.value!;
    this.e.lugar = this.formulario.get("lugar")?.value!;
    this.e.nombreEvento = this.formulario.get("nombreEvento")?.value!;
    this.e.numeroInscritos = this.formulario.get("numeroInscritos")?.value!;
    this.e.precio = this.formulario.get("precio")?.value!;
    this.e.tipoEvento = this.formulario.get("tipoEvento")?.value!;
    this.e.fechaEvento = this.formulario.get("fechaEvento")?.value!;

    if (this.e.numeroInscritos > this.e.limiteIncripciones) {
      alert("No puede haber mas inscritos que el limite de inscritos")
    }
    else {
      if (this.ruta.snapshot.paramMap.get("id")) {
        this.modificarEvento();
      }
      else {
        this.meterEvento();
      }
    }
  }

}
