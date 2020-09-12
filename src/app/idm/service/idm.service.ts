import { AppConfigService } from './../../core/app-config.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdmService {
  loggedInSub: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor( public conf: AppConfigService ) { }
  setLoggedIn(): void{
    this.loggedInSub.next(true);
  }
  isLoggedIn(): boolean{
    return this.loggedInSub.getValue();
  }
  setLoggedOut(): void{
    this.loggedInSub.next(false);
  }

  doNavigate(url): void{
    this.conf.doNavigate(url);
  }

}
