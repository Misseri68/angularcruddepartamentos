import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  public departamento : Departamento = new Departamento(0, '', '');;

    constructor(private _activeRoute: ActivatedRoute) {}

    ngOnInit(): void {
      this._activeRoute.params.subscribe((params: Params)=>{
        let id = parseInt(params['id']);
        let nombre = params['nombre'];
        let localidad = params['localidad'];
        this.departamento.nombre = nombre;
        this.departamento.localidad = localidad;
        this.departamento.idDepartamento = id;
      })
    }

}
