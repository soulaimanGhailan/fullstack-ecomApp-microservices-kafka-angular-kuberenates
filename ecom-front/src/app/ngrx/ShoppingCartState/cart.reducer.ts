import {ShoppingCart} from "../../models/ShoppingCart";
import {DataStateEnum} from "../productsState/products.reducer";
import {Action} from "@ngrx/store";
import {CartAction, CartActionType} from "./cart.actions";

export interface ShoppingCartState{
  shoppingCart? : ShoppingCart ,
  dataState : DataStateEnum ,
  errorMessage : string
}

const initialState:ShoppingCartState = {dataState:DataStateEnum.INITIAL , errorMessage: ""}
export function ShoppingCartReducer(state : ShoppingCartState = initialState , action : Action) : ShoppingCartState{
  switch (action.type){
    case CartActionType.GET_CART :
      return {...state , dataState:DataStateEnum.LOADING }
    case CartActionType.GET_CART_SUCCESS :
      return {...state , dataState:DataStateEnum.LOADED , shoppingCart: (<CartAction>(action)).payload }
    case CartActionType.GET_CART_ERROR :
      return {...state , dataState:DataStateEnum.ERROR , errorMessage:(<CartAction>(action)).payload}

    // add product to shopping cart
    case CartActionType.ADD_PRODUCT_TO_CART :
      return {...state , dataState:DataStateEnum.LOADING }
    case CartActionType.ADD_PRODUCT_TO_CART_SUCCESS :
      return {...state , dataState:DataStateEnum.LOADED , shoppingCart: (<CartAction>(action)).payload }
    case CartActionType.ADD_PRODUCT_TO_CART_ERROR :
      return {...state , dataState:DataStateEnum.ERROR , errorMessage:(<CartAction>(action)).payload}

    // delete product from shopping cart
    case CartActionType.DELETE_PRODUCT_FROM_CART :
      return {...state , dataState:DataStateEnum.LOADING }
    case CartActionType.DELETE_PRODUCT_FROM_CART_SUCCESS :
      return {...state , dataState:DataStateEnum.LOADED , shoppingCart: (<CartAction>(action)).payload }
    case CartActionType.DELETE_PRODUCT_FROM_CART_ERROR :
      return {...state , dataState:DataStateEnum.ERROR , errorMessage:(<CartAction>(action)).payload}
    default: return {...state}
  }
}
