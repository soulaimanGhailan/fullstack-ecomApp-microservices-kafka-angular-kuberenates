import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {
  ProductsOfCategoryListComponent
} from "./components/products-of-category-list/products-of-category-list.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {path : "cart" , component:ShoppingCartComponent},
  {path : "product-details" , component:ProductDetailsComponent},
  {path : "products-category" , component:ProductsOfCategoryListComponent},
  {path : "contact" , component:ContactComponent},
  {path : "home" , component:HomeComponent},
  {path : "" , component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
