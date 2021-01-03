import { CartService } from './../cart-wrapper/cart.service';
import { Component, OnInit, Input } from '@angular/core';

export interface ProductInfo{
  _id: string;
  imagePath: string;
  title: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() productInfo: ProductInfo ;
  assetPath = `./assets/`;
  qtyAddedToCart = 0;
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.qtyAddedToCart = this.cart.getTotalItemByProp(`qty`, this.productInfo._id);
  }

  addToCart(): void{
    this.qtyAddedToCart = this.cart.add(this.productInfo);
  }
  removeFromCart(): void{
    this.qtyAddedToCart = this.cart.remove(this.productInfo._id);
  }
}
