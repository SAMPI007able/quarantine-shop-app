import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.css']
})
export class CartWrapperComponent implements OnInit {
  private _cartItems: any = [];
  public shippingCost = 0;
  assetPath = `./assets/`;
  constructor(public cart: CartService) { }

  ngOnInit(): void {
  }

  get cartItems(){
    return Object.values(JSON.parse(localStorage.getItem('cartItems')));
  }
  set cartItems(items){
    this._cartItems = items;
  }
  valueChanged(item, event){
    this.cart.add(item, event.target.value);
  }
}
