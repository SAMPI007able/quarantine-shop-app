import { environment } from './../../environments/environment.prod';
import { CustomHTTPInterceptor } from './interceptors/custom-http.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHTTPInterceptor, multi: true },
    { provide: `baseUrl`, useValue: environment.baseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
