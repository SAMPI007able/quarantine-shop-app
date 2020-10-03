import { CartService } from './../../cart-wrapper/cart.service';
import { IdmService } from './../../../idm/service/idm.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _qtyAddedToCart ;
  public addSuccessMsg = ` SuccessFully Updated the Cart`;
  public removedSuccessMsg = `Removed SuccessFully`;
  public msg = ``;
  constructor(public idm: IdmService, private cart: CartService) { }

  ngOnInit(): void {
    this.cart.cartSub.subscribe(data => {
      this.msg = data === `added` ? this.addSuccessMsg : this.removedSuccessMsg;
      setTimeout(() => {
        this.msg = '';
      }, 2000);
    })
  }

  get qtyAddedToCart(): number{
    return this.cart.getTotalItemByProp(`qty`);
  }

  set qtyAddedToCart(qty){
    this._qtyAddedToCart = qty;
  }
}
