import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHTTPInterceptor implements HttpInterceptor {
  constructor(@Inject('baseUrl') private baseUrl: string) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const customReq = request.clone({
      url: this.baseUrl + request.url,
      setHeaders: { 'Content-Type': 'application/json' }
    });
    return next.handle(customReq);
  }
}
