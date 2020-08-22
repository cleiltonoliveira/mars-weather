import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Sol } from '../model/sol';

@Injectable({
  providedIn: 'root'
})
export class SolService {

  constructor(private http: HttpClient) { }

  getData():Observable<any> {
    return this.http.get(`https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`);
  }
}
