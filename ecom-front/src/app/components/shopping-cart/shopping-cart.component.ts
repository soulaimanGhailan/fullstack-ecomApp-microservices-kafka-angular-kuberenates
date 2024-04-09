import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GetShoppingCartAction} from "../../ngrx/ShoppingCartState/cart.actions";
import {Auth_Test_Customer} from "../../envirements/env";
import {map, Observable} from "rxjs";
import {ShoppingCartState} from "../../ngrx/ShoppingCartState/cart.reducer";
import {DataStateEnum} from "../../ngrx/productsState/products.reducer";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  shoppingCart$?:Observable<ShoppingCartState>
  public readonly cartDataState = DataStateEnum;
  constructor(private store: Store<any>) {
  }
  ngOnInit(): void {
    this.store.dispatch(new GetShoppingCartAction(Auth_Test_Customer.customerId));
    this.shoppingCart$= this.store.pipe(
      map(state => state.shoppingCartState)
    )
  }

}
