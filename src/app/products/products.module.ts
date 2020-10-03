import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { CardComponent } from './card/card.component';
import { CartWrapperComponent } from './cart-wrapper/cart-wrapper.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [DashboardComponent, ProductComponent, HeaderComponent, FooterComponent, CardComponent, CartWrapperComponent, BannerComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
