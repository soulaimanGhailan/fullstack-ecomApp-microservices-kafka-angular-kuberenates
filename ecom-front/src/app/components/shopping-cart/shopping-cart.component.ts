import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GetShoppingCartAction} from "../../ngrx/ShoppingCartState/cart.actions";
import {map, Observable} from "rxjs";
import {ShoppingCartState} from "../../ngrx/ShoppingCartState/cart.reducer";
import {DataStateEnum} from "../../ngrx/productsState/products.reducer";
import {environment} from "../../../environments/environment";
import {SecurityService} from "../../security/security.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  shoppingCart$?:Observable<ShoppingCartState>
  public readonly cartDataState = DataStateEnum;
  constructor(private store: Store<any> , private secService : SecurityService) {
  }
  ngOnInit(): void {
    if(this.secService.profile.id) {
      // this.store.dispatch(new GetShoppingCartAction(this.secService.profile.id));
      this.shoppingCart$ = this.store.pipe(
        map(state => state.shoppingCartState)
      )
    }
  }

}
