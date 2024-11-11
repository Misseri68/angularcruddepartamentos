import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { DepartamentosService } from '../../services/departamentos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  constructor(private _service : DepartamentosService) { }

  ngOnInit(): void {
    this._service.getDepartamentos().subscribe(
      departamentos => this.departamentos = departamentos);
  }
}
