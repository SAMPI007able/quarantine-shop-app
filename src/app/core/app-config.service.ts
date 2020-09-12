import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  baseUrl = '';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( public router: Router, public http: HttpClient ) {
    this.http.get('assets/config/env.json')
      .subscribe((envData: any) => {
        this.baseUrl = envData.baseUrl;
      });
  }

  doNavigate(url: string, params?: any): void{
    if( typeof url === 'string' ){
      this.router.navigate([url], {queryParams: params});
    }
  }

  doHttpPostCall(url: string , input){
    return this.http.post( this.baseUrl + url, input, this.httpOptions );
  }
  doHttpGetCall(url: string, responseType?){
    return this.http.get(this.baseUrl + url, responseType || {});
  }
}
