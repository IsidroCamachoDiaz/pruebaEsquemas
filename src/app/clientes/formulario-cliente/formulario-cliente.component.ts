import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit{
  formCliente= this.f.group({
    id:[""],
    nombre:["",Validators.required],
    edad:[0,Validators.required],
    email:["",Validators.required],
    movil:["",Validators.required]
  })
  constructor(public f:FormBuilder,private location:Location,private router:Router,public ruta: ActivatedRoute,private fbs:BaseDeDatosService){}
  c:Cliente={id:"",nombre:"",edad:0,email:"",movil:""}
  id:string | undefined;

  ngOnInit(): void {
    if (this.ruta.snapshot.paramMap.get("id")) {
      this.id = this.ruta.snapshot.paramMap.get("id")!;
      this.fbs.getDocumentById(this.id, "clientes").subscribe(res =>{ this.c = res;
        this.formCliente.patchValue({
          nombre: this.c.nombre,
          movil: this.c.movil,
          email: this.c.email,
          edad:this.c.edad,
          id:this.c.id
        });
      });
    }
  }

  
  irAEventos(){
    this.router.navigateByUrl("/eventos");
  }
  goBack(){
    this.location.back();
  }

  guardarCliente(){

    this.c.nombre=this.formCliente.get("nombre")?.value!;
    this.c.edad=this.formCliente.get("edad")?.value!;
    this.c.email=this.formCliente.get("email")?.value!;
    this.c.movil=this.formCliente.get("movil")?.value!;
    this.c.id=this.formCliente.get("id")?.value!;

    if(this.ruta.snapshot.paramMap.get("id")){
      this.modificarCliente();
    }
    else{
      this.crearCliente();
    }
    //this.formCliente.reset()
    this.router.navigateByUrl("/clientes/listado-clientes");

  }

  crearCliente(){
    this.fbs.newDocument(this.c,"clientes");
  }
  modificarCliente(){
    this.fbs.updateDocument(this.c,"clientes");
  }
}
