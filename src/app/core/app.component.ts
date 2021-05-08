import { PwaService } from './../pwa.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quarantine-shop-app';
  constructor(public pwa: PwaService){}
}
