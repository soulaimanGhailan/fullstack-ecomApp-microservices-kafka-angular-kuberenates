import {Injectable} from "@angular/core";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {
  AddProductToCartActionError,
  AddProductToCartActionSuccess,
  CartAction,
  CartActionType, DeleteProductFromCartActionError, DeleteProductFromCartActionSuccess,
  GetShoppingCartAction,
  GetShoppingCartActionError,
  GetShoppingCartActionSuccess
} from "./cart.actions";
import {ShoppingCartService} from "../../services/shoppingCartService/shopping-cart.service";

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

  addProductToCart:Observable<Action>=createEffect(
    () => this.effectAction.pipe(
      ofType(CartActionType.ADD_PRODUCT_TO_CART) ,
      mergeMap((action: CartAction) => {
        return this.shCartService.addProductToShoppingCart(action.payload).pipe(
          map(data => {
            return new AddProductToCartActionSuccess(data)
          }) ,
          catchError(err => of(new AddProductToCartActionError(err.message)))
        ) ;
      })
    )
  );

  deleteProductFromCart:Observable<Action>=createEffect(
    () => this.effectAction.pipe(
      ofType(CartActionType.DELETE_PRODUCT_FROM_CART) ,
      mergeMap((action: CartAction) => {
        return this.shCartService.deleteItemFromCart(action.payload).pipe(
          map(data => {
            return new DeleteProductFromCartActionSuccess(data)
          }) ,
          catchError(err => of(new DeleteProductFromCartActionError(err.message)))
        ) ;
      })
    )
  );
}
