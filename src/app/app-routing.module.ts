import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "app/home/home.component";
import { LoginComponent } from "app/login/login.component";
import { RegisterComponent } from "app/register/register.component";

import { AuthGuard } from "app/_guards";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];

export const RoutingModule = RouterModule.forRoot(appRoutes);
