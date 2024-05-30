import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ContactComponent} from "./components/contact/contact.component";
import {SearchedProductsListComponent} from "./components/searched-products-list/searched-products-list.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";
import {AuthGuard} from "./security/guards/sec.guard";

const routes: Routes = [
  {path : "cart" , component:ShoppingCartComponent , canActivate:[AuthGuard]  , data : {roles : ['USER']}},
  {path : "product-details" , component:ProductDetailsComponent , canActivate:[AuthGuard]  , data : {roles : ['USER']}},
  {path : "searched-products" , component:SearchedProductsListComponent , canActivate:[AuthGuard]  , data : {roles : ['USER']}},
  {path : "contact" , component:ContactComponent , canActivate:[AuthGuard]  , data : {roles : ['USER']}},
  {path : "admin" , component:AdminDashboardComponent , canActivate:[AuthGuard]  , data : {roles : ['USER']}},
  {path : "addProduct" , component:AddProductComponent ,canActivate:[AuthGuard]  , data : {roles : ['USER']}},
  {path : "edit-product" , component:EditProductComponent , canActivate:[AuthGuard]  , data : {roles : ['USER']}},
  {path : "home" , component:HomeComponent , canActivate:[AuthGuard]  , data : {roles : ['USER']}},
  {path : "" , component:HomeComponent , canActivate:[AuthGuard]  , data : {roles : ['USER']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
