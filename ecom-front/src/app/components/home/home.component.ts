import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GetAllProductsAction} from "../../ngrx/productsState/product.actions";
import {map, Observable} from "rxjs";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products$? : Observable<Product[]> ;
  constructor(private store:Store<any>) {
  }
  ngOnInit(): void {
    this.products$ = this.store.pipe(
      map(state => state.productState)
    )
    this.store.dispatch(new GetAllProductsAction(null));
  }

}
