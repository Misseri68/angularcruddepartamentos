import { HttpClient } from '@angular/common/http';
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
}
