import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {ProductItemState} from "../../ngrx/Product-item-State/productItem.reducers";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productItem$?:Observable<ProductItemState>
  constructor(private store:Store<any>) {
  }
  ngOnInit(): void {
    this.productItem$ = this.store.pipe(
      map(state => state.productItemState )
    )
  }

}
