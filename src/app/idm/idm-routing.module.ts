import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch: 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'signup',
    component : RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdmRoutingModule { }
