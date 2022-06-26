import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  url_api = 'http://localhost:8080/';
  constructor(private httpclient:HttpClient) { }

  getnameplaneta(name:string):Observable<any>{
    return this.httpclient.get<any>(`${this.url_api}solarSystem/planets/${name}`)
  }
}
