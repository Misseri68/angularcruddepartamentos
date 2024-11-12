import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'create', component: CreateComponent},
    {path: 'details/:id/:nombre/:localidad', component: DetailsComponent},
    {path: 'edit/:id', component: EditComponent}
];
