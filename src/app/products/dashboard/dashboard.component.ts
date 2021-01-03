import { ProductService } from './../product/product.service';
import { AppConfigService } from './../../core/app-config.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  products$;
  prodSearchTerm: string;
  constructor(public conf: AppConfigService, private product: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.conf.doHttpPostCall('product/getAllProducts', {})
      .pipe(map( (res: {status: boolean, msg: string}) => res.msg ));
    this.product.loadedSub.subscribe((searchValue : string) => {
      this.prodSearchTerm = searchValue;
    })
  }
}
