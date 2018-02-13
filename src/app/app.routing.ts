import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent,

  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Log In' }
  },
  {
    path: 'logout',
    component: LoginComponent,
    data: { title: 'logout' }
  },
  {path: 'register',
    component: RegisterComponent,
    data : {title : 'register'}

  }
  ];



export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
