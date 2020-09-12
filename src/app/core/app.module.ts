import { AuthGuardService } from './../idm/service/auth-guard.service';
import { AppConfigService } from './app-config.service';
import { IdmModule } from './../idm/idm.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IdmModule,
    HttpClientModule
  ],
  providers: [AppConfigService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
