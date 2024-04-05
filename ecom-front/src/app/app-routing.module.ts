import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ContactComponent} from "./components/contact/contact.component";
import {SearchedProductsListComponent} from "./components/searched-products-list/searched-products-list.component";

const routes: Routes = [
  {path : "cart" , component:ShoppingCartComponent},
  {path : "product-details" , component:ProductDetailsComponent},
  {path : "searched-products" , component:SearchedProductsListComponent},
  {path : "contact" , component:ContactComponent},
  {path : "home" , component:HomeComponent},
  {path : "" , component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
