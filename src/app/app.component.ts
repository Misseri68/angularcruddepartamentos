import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { FormsModule } from '@angular/forms';
import { DepartamentosService } from './services/departamentos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, RouterModule, FormsModule],
  providers: [DepartamentosService],
  template: `
  <app-menu/>
  <router-outlet/>`,
})
export class AppComponent {
  title = 'angularcruddepartamentos';
}
