import {Injectable} from "@angular/core";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {
  CartAction,
  CartActionType,
  GetShoppingCartAction,
  GetShoppingCartActionError,
  GetShoppingCartActionSuccess
} from "./cart.actions";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Injectable()
export class ShoppingCartEffect {
  constructor(private shCartService : ShoppingCartService  , private effectAction : Actions) {
  }
  getCartEffect:Observable<Action>=createEffect(
    () => this.effectAction.pipe(
      ofType(CartActionType.GET_CART) ,
      mergeMap((action: CartAction) => {
        return this.shCartService.getShoppingCartOfCustomer(action.payload).pipe(
          map(data => {
            return new GetShoppingCartActionSuccess(data)
          }) ,
          catchError(err => of(new GetShoppingCartActionError(err.message)))
        ) ;
      })
    )
  );
}
