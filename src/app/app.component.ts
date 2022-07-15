import { Component } from '@angular/core';
import { Chart } from 'chart.js'
import { registerables } from 'chart.js';
Chart.register(...registerables);
import { SupabaseService} from "./supabase.service";

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'supabase-angular';
  isloaded = false
  constructor(private readonly supabase: SupabaseService) { }
  async ngOnInit(): Promise <void> {
    var x = await this.supabase.getalldata()
    this.isloaded=true
  }
}
