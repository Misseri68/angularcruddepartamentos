import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor(private _http: HttpClient) { }

  getDepartamentos(): Observable<Departamento[]> {
    let url = environment.urlDepartamentos + "api/departamentos";
    return this._http.get<Departamento[]>(url);
  }

  getDepartamento(id: string): Observable<Departamento>{
    let url  = environment.urlDepartamentos + 'api/departamentos/' + id;
    return this._http.get<Departamento>(url);
  }

  insertDepartamento(departamento: Departamento): Observable<Departamento> {
    let url = environment.urlDepartamentos + "api/departamentos";
    let json = JSON.stringify(departamento);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post<Departamento>(url, json, {headers: header});
  }

  updateDepartamento(departamento: Departamento): Observable<Departamento>{
    let url = environment.urlDepartamentos + "api/departamentos";
    let json = JSON.stringify(departamento);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put<Departamento>(url, json, {headers: header});
  }


}
