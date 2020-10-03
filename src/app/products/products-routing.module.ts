import { CartWrapperComponent } from './cart-wrapper/cart-wrapper.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'list',
    pathMatch: 'full'
  },
  {
    path : 'list',
    component : DashboardComponent
  },
  {
    path : 'cart',
    component : CartWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
