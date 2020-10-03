import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  constructor( public router: Router, public http: HttpClient ) {}

  doNavigate(url: string, params?: any): void{
    if( typeof url === 'string' ){
      this.router.navigate([url], {queryParams: params});
    }
  }

  doHttpPostCall(url: string , input){
    return this.http.post( url, input );
  }
  doHttpGetCall(url: string, responseType?){
    return this.http.get(url, responseType || {});
  }
}
