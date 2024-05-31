import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {ProductItemState} from "../../ngrx/Product-item-State/productItem.reducers";
import {ProductService} from "../../services/productService/product.service";
import {DataStateEnum, FetchMethode} from "../../ngrx/productsState/products.reducer";
import {EventType} from "../../models/common.model";
import {SecurityService} from "../../security/security.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productItem$?:Observable<ProductItemState>
  constructor(private store:Store<any> , private productService : ProductService , private secService: SecurityService) {
  }
  ngOnInit(): void {
    this.productItem$ = this.store.pipe(
      map(state => state.productItemState )
    )

    this.store.subscribe(
      s => {
        if(s.productItemState.dataState == DataStateEnum.LOADED) {
          if(s.productItemState.product && this.secService.profile.id){
            this.productService.publishEvent(s.productItemState.product.productId , EventType.CLICK_PRODUCT , this.secService.profile.id)
          }
        }
      })
  }



}
