import {Action} from "@ngrx/store";
import {AddItemRequest} from "../../models/ShoppingCart";
import {DeleteProductReq} from "../../models/common.model";

export enum CartActionType {
  GET_CART = "*ShoppingCart* GET Shopping Cart  ",
  GET_CART_SUCCESS = "*ShoppingCart* GET Shopping Cart [SUCCESS] ",
  GET_CART_ERROR = "*ShoppingCart* GET Shopping Cart  [ERROR] ",

  ADD_PRODUCT_TO_CART = "*ShoppingCart* ADD PRODUCT TO Shopping Cart  ",
  ADD_PRODUCT_TO_CART_SUCCESS = "*ShoppingCart* ADD PRODUCT TO Shopping Cart [SUCCESS] ",
  ADD_PRODUCT_TO_CART_ERROR = "*ShoppingCart* ADD PRODUCT TO Shopping Cart  [ERROR] ",

  DELETE_PRODUCT_FROM_CART = "*ShoppingCart* DELETE PRODUCT FROM Shopping Cart  ",
  DELETE_PRODUCT_FROM_CART_SUCCESS = "*ShoppingCart* DELETE PRODUCT FROM Shopping Cart [SUCCESS] ",
  DELETE_PRODUCT_FROM_CART_ERROR = "*ShoppingCart* DELETE PRODUCT FROM Shopping Cart  [ERROR] ",
}

// GET CART
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

// ADD PRODUCT TO CART
export class AddProductToCartAction implements Action{
  type: CartActionType = CartActionType.ADD_PRODUCT_TO_CART;
  constructor(public payload : AddItemRequest) {
  }
}

export class AddProductToCartActionSuccess implements Action{
  type: CartActionType = CartActionType.ADD_PRODUCT_TO_CART_SUCCESS;
  constructor(public payload : any) {
  }
}

export class AddProductToCartActionError implements Action{
  type: CartActionType = CartActionType.ADD_PRODUCT_TO_CART_ERROR;
  constructor(public payload : string) {
  }
}

// DELETE PRODUCT FROM CART
export class DeleteProductFromCartAction implements Action{
  type: CartActionType = CartActionType.DELETE_PRODUCT_FROM_CART;
  constructor(public payload : DeleteProductReq) {
  }
}

export class DeleteProductFromCartActionSuccess implements Action{
  type: CartActionType = CartActionType.DELETE_PRODUCT_FROM_CART_SUCCESS;
  constructor(public payload : any) {
  }
}

export class DeleteProductFromCartActionError implements Action{
  type: CartActionType = CartActionType.DELETE_PRODUCT_FROM_CART_ERROR;
  constructor(public payload : string) {
  }
}

export type CartAction = GetShoppingCartAction | GetShoppingCartActionSuccess | GetShoppingCartActionError |
    AddProductToCartAction | AddProductToCartActionSuccess | AddProductToCartActionError |
    DeleteProductFromCartAction | DeleteProductFromCartActionSuccess | DeleteProductFromCartActionError
