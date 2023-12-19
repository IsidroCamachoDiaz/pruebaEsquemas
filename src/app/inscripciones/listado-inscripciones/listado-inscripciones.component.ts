import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { Evento } from 'src/app/modelos/evento';
import { Inscripcion } from 'src/app/modelos/inscripcion';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-listado-inscripciones',
  templateUrl: './listado-inscripciones.component.html',
  styleUrls: ['./listado-inscripciones.component.css']
})
export class ListadoInscripcionesComponent implements OnInit {
  constructor(private fbs:BaseDeDatosService){}
  eventos:Evento[]=[];
  clientes:Cliente[]=[];
  inscripciones:Inscripcion[]=[];
  
  ngOnInit(): void {
    this.fbs.getColletion("inscripciones").subscribe(res=>this.inscripciones=res);
    this.fbs.getColletion("eventos").subscribe(res=>this.eventos=res);
    this.fbs.getColletion("clientes").subscribe(res=>this.clientes=res);
  }

  buscarCliente(id:string){
    for(let i=0;i<this.clientes.length;i++){
      if(this.clientes[i].id==id){
        return "Nombre: "+this.clientes[i].nombre+" Email: "+this.clientes[i].email;
      }
    }
    return "";

  }
  buscarEvento(id:string){
    for(let i=0;i<this.eventos.length;i++){
      if(this.eventos[i].id==id){
        return "Nombre del Evento: "+this.eventos[i].nombreEvento+" Lugar: "+this.eventos[i].lugar+" Fecha del Evento: "+this.eventos[i].fechaEvento;
      }
    }
    return "";
  }

}
