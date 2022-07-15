import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SupabaseService} from "../supabase.service";



  




 @Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughtnut-chart.component.html',
  styleUrls: ['./doughtnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor(private readonly supabase: SupabaseService) { }
  

  async ngOnInit(): Promise <void> {
    var x = await this.supabase.getalldata()
    console.log(x)
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: x.find((row:any)=>row.id==1).ChartData,

        
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(205, 225, 86)'
        ],
        hoverOffset: 4
      }]
    };
    const config = {
      type: 'doughnut',
      data: data,
    };
    //@ts-ignore
  new Chart ('doughnut-chart',config)
  }
}

