import { environment } from './../../environments/environment.prod';
import { CustomHTTPInterceptor } from './interceptors/custom-http.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHTTPInterceptor, multi: true },
    { provide: `baseUrl`, useValue: environment.baseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
