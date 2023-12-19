import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { Evento } from 'src/app/modelos/evento';
import { Inscripcion } from 'src/app/modelos/inscripcion';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-formulario-inscripcion',
  templateUrl: './formulario-inscripcion.component.html',
  styleUrls: ['./formulario-inscripcion.component.css']
})
export class FormularioInscripcionComponent implements OnInit{
  constructor(private fbs:BaseDeDatosService,private ruta:ActivatedRoute,private f:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.fbs.getColletion("eventos").subscribe(res=>this.eventos=res);
    this.fbs.getColletion("clientes").subscribe(res=>this.clientes=res);
    if(this.ruta.snapshot.paramMap.get("id")){
      this.id=this.ruta.snapshot.paramMap.get("id");
      this.fbs.getDocumentById(this.id,"inscripciones").subscribe(res=>{
        this.i=res;
        this.formulario.patchValue({
          idCliente:this.i.idCliente,
          idEvento:this.i.idEvento,
          pagado:this.i.pagado
        })
      });
    }
  }
  i:Inscripcion={idCliente:"",idEvento:"",pagado:false}
  clientes:Cliente[]=[];
  eventos:Evento[]=[];
  id:any;

  formulario=this.f.group({
    idCliente:["",Validators.required],
    idEvento:["",Validators.required],
    pagado:[false]
  });

  crearInscripcion(){
    this.fbs.newDocument(this.i,"inscripciones");
  }

  modificarIncripcion(){
    this.fbs.updateDocument(this.i,"inscripciones");
  }

  anadirFormulario(){
    this.i.idCliente=this.formulario.get("idCliente")?.value!;
    this.i.idEvento=this.formulario.get("idEvento")?.value!;
    this.i.pagado=this.formulario.get("pagado")?.value!;

    this.fbs.getDocumentById(this.i.idEvento,"eventos").subscribe(res=>{
      let eventoActual:Evento=res;
      if(eventoActual.numeroInscritos==eventoActual.limiteIncripciones){
        alert("No se puede inscribir mas gente a este evento")
      }
      else{
        if(this.ruta.snapshot.paramMap.get("id")){
          this.modificarIncripcion();
        }
        else{
          this.crearInscripcion();
        }
        let d=this.fbs.getDocumentById(this.i.idEvento,"eventos").subscribe(res=>{
          let evenSinActu:Evento=res;
          evenSinActu.numeroInscritos=evenSinActu.numeroInscritos+1;
          d.unsubscribe();
          this.fbs.updateDocument(evenSinActu,"eventos");
        });
        this.router.navigateByUrl("/inscripciones/listado-inscripciones");
      }
    });
  }

}
