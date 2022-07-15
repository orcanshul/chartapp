import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { SupabaseService} from "../supabase.service";

    



@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  
  styleUrls: ['./pie-chart.component.css']
  
})
export class PieChartComponent implements OnInit {



  constructor(private readonly supabase: SupabaseService) { }

  @Input() "message": string;

  async ngOnInit(): Promise <void> {
    var x = await this.supabase.getalldata()
    const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
   // data: await getData(),
    data: x.find((row:any)=>row.id==3).ChartData,
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
  type: 'pie',
  data: data,
};
//@ts-ignore
new Chart ('pie-chart',config)
  }

}


