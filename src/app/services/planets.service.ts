import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Planets } from "app/models/planets.model";
import { Saturn } from "app/models/planets.model";
import { Earth } from "app/models/earth.model";
import { AppSettings } from "./AppSettings";
import { Observable } from 'rxjs';


const baseUrlAuth = AppSettings.API_ENDPOINT + '/planets';
@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
   constructor(private http:HttpClient) {
    }

    getAllPlanets(p: Planets):Observable<any>{
        return this.http.get<Planets[]>(baseUrlAuth);
    }

    getPlanetForName(name: string): Observable<any>{
        return this.http.get<Planets[]>(baseUrlAuth+'/'+name)
    }

    getPlanetForNameSaturn(name: string): Observable<any>{
      return this.http.get<Saturn[]>(baseUrlAuth+'/'+name)
  }

}