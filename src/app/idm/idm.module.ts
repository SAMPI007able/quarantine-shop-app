import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdmRoutingModule } from './idm-routing.module';
import { LoginComponent } from './login/login.component';
import { IdmModel } from './model/idm-model';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IdmRoutingModule
  ],
  providers: [IdmModel]
})
export class IdmModule { }
