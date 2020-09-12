// src/app/idm/service/auth-guard.service.ts
import { IdmService } from './idm.service';
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( public idm: IdmService, public router: Router  ) { }
  canActivate(): boolean | UrlTree{
    return this.idm.isLoggedIn() || this.router.parseUrl('idm/login');
  }
}
