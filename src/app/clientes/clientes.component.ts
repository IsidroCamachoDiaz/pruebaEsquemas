import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Evento } from '../modelos/evento';
import { BaseDeDatosService } from '../servicios/base-de-datos.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  constructor(private fbs:BaseDeDatosService){}
  grafico:any;
  eventos:Evento[]=[];
  datosMeses:Number[]=[0,0,0,0,0,0,0,0,0,0,0,0]
  ngOnInit(): void {
    this.fbs.getColletion("eventos").subscribe(res=>{
      this.eventos=res;
      for(let i=0;i<this.eventos.length;i++){
        let fecha= new Date(this.eventos[i].fechaEvento);
        let mes=fecha.getMonth();
        this.datosMeses[mes]= Number(this.datosMeses[mes])+1;
      }

      this.grafico = new Chart("myChart", {
        type: 'line', //this denotes tha type of chart
        
        data: {// values on X-Axis
        labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
        datasets: [
        {
        label: "Eventos",
        data: this.datosMeses,
        backgroundColor: ["red"]
        
        }
        ]
        },
        options: {
        aspectRatio: 2.5
        }
        });
    });  
  }


}
