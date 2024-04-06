import {Action} from "@ngrx/store";
import {ShoppingCart} from "../../models/ShoppingCart";

export enum CartActionType {
  GET_CART = "*ShoppingCart* GET Shopping Cart  ",
  GET_CART_SUCCESS = "*ShoppingCart* GET Shopping Cart [SUCCESS] ",
  GET_CART_ERROR = "*ShoppingCart* GET Shopping Cart  [ERROR] ",
}

export class GetShoppingCartAction implements Action{
  type: CartActionType = CartActionType.GET_CART;
  constructor(public payload : string) {
  }
}

export class GetShoppingCartActionSuccess implements Action{
  type: CartActionType = CartActionType.GET_CART_SUCCESS;
  constructor(public payload : any) {
  }
}

export class GetShoppingCartActionError implements Action{
  type: CartActionType = CartActionType.GET_CART_ERROR;
  constructor(public payload : string) {
  }
}

export type CartAction = GetShoppingCartAction | GetShoppingCartActionSuccess | GetShoppingCartActionError
