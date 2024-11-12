import { Component, ElementRef, ViewChild } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Router } from '@angular/router';
import { Departamento } from '../../models/departamento';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  providers: [DepartamentosService],
  imports: [FormsModule],
  templateUrl: './create.component.html',
  })
export class CreateComponent {
@ViewChild('cajaid') cajaid!  : ElementRef;
@ViewChild('cajanombre') cajanombre!: ElementRef;
@ViewChild('cajalocalidad') cajalocalidad!: ElementRef;

constructor(private _service: DepartamentosService, private _router: Router){}

insertDepartamento():void {
    let id = parseInt(this.cajaid.nativeElement.value);
    let nombre = this.cajanombre.nativeElement.value;
    let departamento = this.cajalocalidad.nativeElement.value;
    let newDep = new Departamento(id, nombre, departamento);
    this._service.insertDepartamento(newDep).subscribe(
        () => this._router.navigate(['/home'])
    )
}


}
