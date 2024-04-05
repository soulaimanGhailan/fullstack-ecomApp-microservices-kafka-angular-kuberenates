import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SidecarComponent } from './components/sidecar/sidecar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CategoryComponent } from './components/sidecar/category/category.component';
import { PagginationComponent } from './components/searched-products-list/paggination/paggination.component';
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
import {SelectedProductsReducer} from "./ngrx/Selected-Products-State/SelectedProduct.reducer";
import {SelectedProductEffects} from "./ngrx/Selected-Products-State/SelectedProduct.effects";
import { SelectedNewProductsComponent } from './components/home/selected-new-products/selected-new-products.component';
import { SelectedProductItemComponent } from './components/home/selected-new-products/selected-product-item/selected-product-item.component';
import { RandomProductsComponent } from './components/sidecar/random-products/random-products.component';
import { PaymentMethodesComponent } from './components/sidecar/payment-methodes/payment-methodes.component';
import {ProductItemReducer} from "./ngrx/Product-item-State/productItem.reducers";
import { GalleryComponent } from './components/product-details/gallery/gallery.component';
import { ProductItemDescriptionComponent } from './components/product-details/product-item-description/product-item-description.component';
import { ProductItemAddetionalInfoComponent } from './components/product-details/product-item-addetional-info/product-item-addetional-info.component';
import { SearchedProductsListComponent } from './components/searched-products-list/searched-products-list.component';
import { SearchedProductsListHeaderComponent } from './components/searched-products-list/searched-products-list-header/searched-products-list-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidecarComponent,
    ProductsListComponent,
    SingleProductComponent,
    CategoryComponent,
    PagginationComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ContactComponent,
    SelectedNewProductsComponent,
    SelectedProductItemComponent,
    RandomProductsComponent,
    PaymentMethodesComponent,
    GalleryComponent,
    ProductItemDescriptionComponent,
    ProductItemAddetionalInfoComponent,
    SearchedProductsListComponent,
    SearchedProductsListHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule ,
    StoreModule.forRoot({productState : productReducer , selectedProductsState: SelectedProductsReducer  , productItemState:ProductItemReducer}) ,
    EffectsModule.forRoot([ProductsEffects , SelectedProductEffects ]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
