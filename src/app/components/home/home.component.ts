import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { DepartamentosService } from '../../services/departamentos.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  constructor(private _service : DepartamentosService, private _router: Router) { }

  ngOnInit(): void {
    this._service.getDepartamentos().subscribe(
      departamentos => this.departamentos = departamentos);
  }

  irDetalles(id: number, nombre: string, localidad: string): void {
    this._router.navigate(['/details', id, nombre, localidad]);
  } 
}
