import { Component, ElementRef, ViewChild } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { DepartamentosService } from '../../services/departamentos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './edit.component.html',
})
export class EditComponent {
  @ViewChild('cajaid') cajaId!: ElementRef; 
  @ViewChild('cajanombre') cajaNombre!: ElementRef; 
  @ViewChild('cajalocalidad') cajaLocalidad!: ElementRef; 

  public departamento!: Departamento;

  constructor(private _service: DepartamentosService, private _router: Router, private _activeRoute: ActivatedRoute){
    this.departamento = new Departamento(0, '', '');
  }

  ngOnInit():void{
    this._activeRoute.params.subscribe((params: Params)=>{
      let id = parseInt(params['id']);
      this._service.getDepartamento(id.toString()).subscribe(
        departamento => this.departamento = departamento
      )
    })
  }

  editDepartamento():void{
    this.departamento.nombre = this.cajaNombre.nativeElement.value;
    this.departamento.localidad = this.cajaLocalidad.nativeElement.value;
    this._service.updateDepartamento(this.departamento).subscribe(()=>{
      this._router.navigate(['/home'])
    })
  }
}
