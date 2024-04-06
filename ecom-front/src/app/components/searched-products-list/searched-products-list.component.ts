import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {FetchMethode, ProductState, DataStateEnum} from "../../ngrx/productsState/products.reducer";

@Component({
  selector: 'app-searched-products-list',
  templateUrl: './searched-products-list.component.html',
  styleUrls: ['./searched-products-list.component.css']
})
export class SearchedProductsListComponent implements OnInit{
    productState$? : Observable<ProductState> ;
  public readonly ProductStateEnum = DataStateEnum ;
  public readonly fetchMethode = FetchMethode ;
    constructor(private store:Store<any>) {
    }

    ngOnInit(): void {
      this.productState$ = this.store.pipe(
        map(state => state.productState)
      )
    }
}
