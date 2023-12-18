import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit{
  constructor(private fbs:BaseDeDatosService){}
  clientes:Cliente[]=[]
  ngOnInit(): void {
    this.fbs.getColletion("clientes").subscribe(res=>this.clientes=res);
  }

  borrarCliente(c:Cliente){
    this.fbs.deleteDoc(c.id!,"clientes");
  }
}
