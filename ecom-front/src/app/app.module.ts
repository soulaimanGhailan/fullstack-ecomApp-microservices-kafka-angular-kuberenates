import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SelectedProductsComponent } from './components/home/selected-products/selected-products.component';
import { NewProductsComponent } from './components/home/new-products/new-products.component';
import { SidecarComponent } from './components/sidecar/sidecar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { SingleSelectedProductComponent } from './components/home/selected-products/single-selected-product/single-selected-product.component';
import { NewSingleProductComponent } from './components/home/new-products/new-single-product/new-single-product.component';
import { CategoryComponent } from './components/sidecar/category/category.component';
import { ProductsOfCategoryListComponent } from './components/products-of-category-list/products-of-category-list.component';
import { ProductsOfCategoryListHeaderComponent } from './components/products-of-category-list/products-of-category-list-header/products-of-category-list-header.component';
import { PagginationComponent } from './components/products-of-category-list/paggination/paggination.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ContactComponent } from './components/contact/contact.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtools, StoreDevtoolsModule} from "@ngrx/store-devtools";
import {productReducer} from "./ngrx/productsState/products.reducer";
import {ProductsEffects} from "./ngrx/productsState/products.effects";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {newProductsReducer} from "./ngrx/newProductsState/newProduct.reducer";
import {NewProductEffects} from "./ngrx/newProductsState/newProduct.effects";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SelectedProductsComponent,
    NewProductsComponent,
    SidecarComponent,
    ProductsListComponent,
    SingleProductComponent,
    SingleSelectedProductComponent,
    NewSingleProductComponent,
    CategoryComponent,
    ProductsOfCategoryListComponent,
    ProductsOfCategoryListHeaderComponent,
    PagginationComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule ,
    StoreModule.forRoot({productState : productReducer , newProductsState: newProductsReducer}) ,
    EffectsModule.forRoot([ProductsEffects , NewProductEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
