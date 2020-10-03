import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface ProductInfo{
  _id: string;
  imagePath: string;
  title: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public shippingCost = 0;
  cartSub = new Subject<string>();
  constructor() { }

  getTotalItemByProp(prop: string, itemID?: string): number{
    const storedCartItems = localStorage.getItem('cartItems') || '{}';
    const cartItems = JSON.parse(storedCartItems);
    let total = 0;
    if( cartItems !== null ){
      for (const id in cartItems) {
        if (cartItems.hasOwnProperty(id) && ( itemID === undefined || itemID === id )){
          total += parseInt(cartItems[id][prop], 10);
        }
      }
    }
    return total;
  }
  add(productInfo: ProductInfo, times?: number): number{
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems !== null ){
      const cartItem = cartItems[productInfo._id];
      if ( cartItem === undefined){
        productInfo[`qty`] = times || 1;
        cartItems[productInfo._id] = productInfo;
      } else{
        if( typeof times === 'string' ) times = parseInt(times);
        if ( times === undefined ){
          cartItem.qty++;
          cartItem.price = parseInt(cartItem.price) + parseInt(cartItem.price);
        } else{
          cartItem.price = (cartItem.price / cartItem.qty) * times;
          cartItem.qty = times;
        }
      }
    } else{
      cartItems = {};
      productInfo[`qty`] = times || 1;
      cartItems[productInfo._id] = productInfo;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.cartSub.next('added');
    return cartItems[productInfo._id].qty;
  }
  remove(id: string, removeAll: boolean = false): number{
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if( removeAll === false ){
      const cartItem = cartItems[id];
      if( cartItem !== undefined ){
        if(cartItem.qty > 1){
          cartItem.qty--;
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          this.cartSub.next('removed');
          return cartItem.qty;
        } else{
          delete cartItems[id];
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          this.cartSub.next('removed');
          return 0;
        }
      }
    } else{
      delete cartItems[id];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      this.cartSub.next('removed');
      return 0;
    }
    this.cartSub.next('removed');
    return 0;
  }

}
