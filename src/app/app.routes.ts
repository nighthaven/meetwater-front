import { Routes } from '@angular/router';
import { Login } from './pages/login/login'
import {RegisterRepresentative} from './pages/register-representative/register-representative';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'create-user', component: RegisterRepresentative}
];
