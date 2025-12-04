import { Routes } from '@angular/router';
import { Login } from './pages/login/login'
import {RegisterRepresentative} from './pages/register-representative/register-representative';
import {RepresentativeDashboard} from './pages/representative-dashboard/representative-dashboard';
import { AuthGuard } from './guards/auth-guard'

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'create-user', component: RegisterRepresentative },
  { path: 'representative-dashboard', component: RepresentativeDashboard, canActivate: [AuthGuard] },
];
