import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/modelos/evento';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-listado-eventos',
  templateUrl: './listado-eventos.component.html',
  styleUrls: ['./listado-eventos.component.css']
})
export class ListadoEventosComponent implements OnInit{
  constructor(private fbs:BaseDeDatosService){}
  eventos:Evento[]=[];
  ngOnInit(): void {
    this.fbs.getColletion("eventos").subscribe(res => this.eventos=res);
  }

  eliminarEvento(id:string){
    this.fbs.deleteDoc(id,"eventos");
  }

}
