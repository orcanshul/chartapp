import { Injectable } from '@angular/core';
import { createClient,  SupabaseClient} from '@supabase/supabase-js';
import {environment} from "../environments/environment";




@Injectable({
  providedIn: 'root'
  
})
export class SupabaseService {
  public supabase: SupabaseClient;
  public data: any = [];
  constructor() { 
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    
  }
  async getalldata () {
    if (this.data.length > 0) return this.data;
    var x = await this.supabase.functions.invoke("getdata")
    this.data = x.data
    return this.data
  }
}

