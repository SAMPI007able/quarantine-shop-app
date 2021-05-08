import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  promptEvent: any;

  constructor(private swUpdate: SwUpdate) {
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });

    this.swUpdate.available.subscribe((e) => {
      if(window.confirm('Want to Download the latest version?') ){
        window.location.reload();
      }
    })
  }

  installPwa(): void {
    this.promptEvent.prompt();
  }
}
