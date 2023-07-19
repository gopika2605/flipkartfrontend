import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SellerComponent } from './seller/seller.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';


const routes: Routes = [
  {
    path:"",component:ContentComponent
  },
  {
    path:"seller",component:SellerComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"all-product",component:AllProductsComponent
  },
  {
    path:"add-product",component:AddProductComponent
  },
  {
    path:"viewproduct/:id",component:ViewproductComponent
  },
  {
    path:"editproduct/:id",component:EditproductComponent
  },
  {
    path:"deleteproduct/:id",component:DeleteproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
