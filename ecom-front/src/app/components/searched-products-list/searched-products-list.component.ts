import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {DataStateEnum, FetchMethode, ProductState} from "../../ngrx/productsState/products.reducer";
import {ProductService} from "../../services/productService/product.service";
import {EventType} from "../../models/common.model";
import {SecurityService} from "../../security/security.service";

@Component({
  selector: 'app-searched-products-list',
  templateUrl: './searched-products-list.component.html',
  styleUrls: ['./searched-products-list.component.css']
})
export class SearchedProductsListComponent implements OnInit{
    productState$? : Observable<ProductState> ;
  public readonly ProductStateEnum = DataStateEnum ;
  public readonly fetchMethode = FetchMethode ;
    constructor(private store:Store<any> , private productService : ProductService , private secSecurity : SecurityService) {
    }

    ngOnInit(): void {
      this.productState$ = this.store.pipe(
        map(state => state.productState)
      )

      this.store.subscribe(
        s => {
          if(s.productState.dataState == this.ProductStateEnum.LOADED) {
           if(s.productState.products[0] && this.secSecurity.profile){
             if(this.secSecurity.profile.id){
             if(s.productState.fetchMethode == FetchMethode.SEARCH_BY_CATEGORY )
               this.productService.publishEvent(s.productState.products[0].productId , EventType.SEARCH_BY_CATEGORY , this.secSecurity.profile.id)
             if(s.productState.fetchMethode == FetchMethode.SEARCH_BY_KEYWORD)
               this.productService.publishEvent(s.productState.products[0].productId , EventType.SEARCH_BY_KEYWORD , this.secSecurity.profile.id)
           }}
          }
        })
    }
}
