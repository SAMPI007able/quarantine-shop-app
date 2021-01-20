import { IdmService } from './../../idm/service/idm.service';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

export interface ProductInfo{
  _id: string;
  imagePath: string;
  title: string;
  description: string;
  price: number;
  priceId: string;
  qty: number;
}
@Component({
  selector: 'app-cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.css']
})
export class CartWrapperComponent implements OnInit {
  private _cartItems: any = [];
  public shippingCost = 0;
  assetPath = `./assets/`;
  stripePromise = loadStripe(environment.stripeKey);


  constructor(public cart: CartService, public idm: IdmService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const statusObj = params['params'];
      if ( 'orderStatus' in statusObj ){
        if ( statusObj['orderStatus'] === 'success'){
          this.cart.cartSub.next({type: 'payment', msg: 'Order Placed Successfully', status: 'success'});
          this.cart.removeAll();
        } else{
          this.cart.cartSub.next({type: 'payment', msg: 'Order Failed', status: 'failure'});
        }
      }
    }
);
  }

  get cartItems(){
    const cartItems = localStorage.getItem('cartItems');
    return cartItems !== 'null' && cartItems !== null ? Object.values(JSON.parse(cartItems)) : [];
  }
  set cartItems(items){
    this._cartItems = items;
  }
  valueChanged(item, event){
    this.cart.add(item, event.target.value);
  }

  getLineItems(){
    let lineItems = [];
    this.cartItems.forEach((item: ProductInfo) => {
      const price = item.priceId;
      const quantity = item.qty;
      lineItems.push( { price , quantity } );
    })
    return lineItems;
  }

  async checkout() {
    // Call your backend to create the Checkout session.
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await this.stripePromise;

    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: this.getLineItems(),
      successUrl: `${window.location.href}?orderStatus=success`,
      cancelUrl: `${window.location.href}?orderStatus=failure`,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) {
      console.log(error);
    }
  }
}
