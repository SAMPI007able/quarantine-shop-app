import { AppConfigService } from './../../core/app-config.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products$;
  constructor(public conf: AppConfigService) { }

  ngOnInit(): void {
    this.products$ = this.conf.doHttpPostCall('product/getAllProducts', {})
      .pipe(map( (res: {status: boolean, msg: string}) => res.msg ));
  }

}
