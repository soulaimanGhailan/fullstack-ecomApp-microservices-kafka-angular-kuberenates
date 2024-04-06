import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import { GetProductsPageAction} from "../../ngrx/productsState/product.actions";
import {map, Observable} from "rxjs";
import {ProductState, DataStateEnum} from "../../ngrx/productsState/products.reducer";
import {SelectedProductsState} from "../../ngrx/Selected-Products-State/SelectedProduct.reducer";
import {GetSelectedProductAction} from "../../ngrx/Selected-Products-State/SelectedProduct.action";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  productState$? : Observable<ProductState> ;
  selectedProductsState$?: Observable<SelectedProductsState> ;
  public readonly ProductStateEnum = DataStateEnum ;
  constructor(private store:Store<any>) {
  }
  ngOnInit(): void {
    this.productState$ = this.store.pipe(
      map(state => state.productState)
    )
    this.selectedProductsState$ = this.store.pipe(
      map(state => state.selectedProductsState)
    )

    this.store.dispatch(new GetProductsPageAction({page: 0 , size:6}))
    this.store.dispatch(new GetSelectedProductAction({page: 0 , size:4}))
  }

}
