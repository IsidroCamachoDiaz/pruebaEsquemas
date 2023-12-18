import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  grafico:any;
  ngOnInit(): void {
    this.grafico = new Chart("myChart", {
      type: 'line', //this denotes tha type of chart
      
      data: {// values on X-Axis
      labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
      datasets: [
      {
      label: "Eventos",
      data: [2,4,8,9,12,6,9,9,12,1,2,3],
      backgroundColor: ["red"]
      
      }
      ]
      },
      options: {
      aspectRatio: 2.5
      }
      });
  }


}
