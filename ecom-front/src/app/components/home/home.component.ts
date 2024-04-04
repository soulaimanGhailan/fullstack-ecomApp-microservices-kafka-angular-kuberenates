import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GetAllProductsAction, GetProductsPageAction} from "../../ngrx/productsState/product.actions";
import {map, Observable} from "rxjs";
import {ProductService} from "../../services/product.service";
import {ProductState, ProductStateEnum} from "../../ngrx/productsState/products.reducer";
import {NewProductsState} from "../../ngrx/newProductsState/newProduct.reducer";
import {GetNewProductAction} from "../../ngrx/newProductsState/newProduct.action";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  productState$? : Observable<ProductState> ;
  newProductsState$?: Observable<NewProductsState>
  public readonly ProductStateEnum = ProductStateEnum ;
  constructor(private store:Store<any> , private productService:ProductService) {
  }
  ngOnInit(): void {
    this.productState$ = this.store.pipe(
      map(state => state.productState)
    )
    this.newProductsState$ = this.store.pipe(
      map(state => state.newProductsState)
    )
    this.store.dispatch(new GetProductsPageAction({page: 0 , size:6}))
    this.store.dispatch(new GetNewProductAction({page: 0 , size:4}))
  }

}
