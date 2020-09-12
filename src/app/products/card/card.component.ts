import { Component, OnInit, Input } from '@angular/core';

interface ProductInfo{
  imagePath: string;
  title: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() productInfo: ProductInfo ;
  assetPath = `./assets/`;
  constructor() { }

  ngOnInit(): void {
  }

}
