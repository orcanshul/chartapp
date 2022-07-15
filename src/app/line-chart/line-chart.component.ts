import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SupabaseService} from "../supabase.service";


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor(private readonly supabase: SupabaseService) { }

  async ngOnInit(): Promise <void> {
    var x = await this.supabase.getalldata()
    const data = {
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ],
      datasets: [{
        label: 'My First Dataset',
        
        data: x.find((row:any)=>row.id==2).ChartData,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    };
    const config = {
      type: 'polarArea',
      data: data,
      options: {}
    };
    //@ts-ignore
    new Chart ('line-chart',config)
  }
}

