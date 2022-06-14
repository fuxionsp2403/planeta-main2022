import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Planets } from "app/models/planets.model";
import { Earth } from "app/models/earth.model";
import { AppSettings } from "./AppSettings";
import { Observable } from 'rxjs';


const baseUrlAuth = AppSettings.API_ENDPOINT + 'planets';
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
   constructor(private http:HttpClient) {
    }

    getAllPlanets(p: Planets):Observable<any>{
        return this.http.get<Planets[]>(baseUrlAuth+"/");
    }

    getPlanetForName(name: string): Observable<any>{
        return this.http.get<Planets[]>(baseUrlAuth+"planet/"+name)
    }

}
/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Project } from 'src/app/models/project.model';
import { Observable } from 'rxjs';
import { AppSettings } from '../app-settings';
import { TokenService } from './token.service';
import { formatNumber } from '@angular/common';


const baseUrlAuth = AppSettings.API_ENDPOINT + 'projects';
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
   constructor(private http:HttpClient, private tokenService:TokenService) {
    }

  saveProject(p:Project):Observable<Project> {
    const AUTH_TOKEN:string =this.tokenService.getToken(); 
    return this.http.post<Project>(baseUrlAuth,p, {headers: new HttpHeaders({'Authorization': `Bearer ${AUTH_TOKEN}`})});
  }

  updateProject(p:Project):Observable<any>{
    const AUTH_TOKEN:string =this.tokenService.getToken(); 
      return this.http.put<Project[]>(baseUrlAuth+"/"+p.idProyecto,p,{headers: new HttpHeaders({'Authorization': `Bearer ${AUTH_TOKEN}`})});
  }

  getProject(id:number):Observable<any>{
      return this.http.get<Project[]>(baseUrlAuth+"/"+id);
  }

  deleteProject(p:Project):Observable<any>{
    const AUTH_TOKEN:string =this.tokenService.getToken(); 
      return this.http.delete<string>(baseUrlAuth+"/"+p.idProyecto, {headers: new HttpHeaders({'Authorization': `Bearer ${AUTH_TOKEN}`})});
  }

  getAllProjects(pageNumber:number, pageSize:number, sortById:string, sortDir:string): Observable<any>{
    const params = new HttpParams().set("sortBy", sortById).
    set("pageNo",pageNumber).set("pageSize",pageSize).set("sortDir", sortDir)
    return this.http.get(baseUrlAuth, {params})
}


}



*/