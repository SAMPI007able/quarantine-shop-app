import { BannerComponent } from './../../banner/banner.component';
import { ProductService } from './../../product/product.service';
import { CartService } from './../../cart-wrapper/cart.service';
import { IdmService } from './../../../idm/service/idm.service';
import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentInit {
  private _qtyAddedToCart ;
  public msg = ``;
  public status = '';
  searchControl = new FormControl();
  @ContentChild(BannerComponent) banner: BannerComponent;
  constructor(public idm: IdmService, private cart: CartService, private product: ProductService) { }

  ngOnInit(): void {
    this.cart.cartSub.subscribe(data => {
      this.msg = data.msg;
      this.status = data.status;
      setTimeout(() => {
        this.msg = '';
        this.status = '';
      }, 2000);
    })

    this.searchControl.valueChanges.subscribe((data: string) => {
      this.product.loadedSub.next( data );
    })
  }

  get qtyAddedToCart(): number{
    return this.cart.getTotalItemByProp(`qty`);
  }

  set qtyAddedToCart(qty){
    this._qtyAddedToCart = qty;
  }

  ngAfterContentInit(){
    console.log(this.banner);
  }
}
