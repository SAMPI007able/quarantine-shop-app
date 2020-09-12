import { ProductComponent } from './../products/product/product.component';
import { AuthGuardService } from './../idm/service/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'idm',
    pathMatch: 'full'
  },
  {
    path : 'idm',
    loadChildren: () => import('../idm/idm.module').then(m => m.IdmModule)
  },
  {
    path : 'prod',
    component: ProductComponent,
    loadChildren: () => import('../products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
