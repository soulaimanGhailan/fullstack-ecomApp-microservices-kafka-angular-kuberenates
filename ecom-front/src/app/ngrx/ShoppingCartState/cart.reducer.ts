import {ShoppingCart} from "../../models/ShoppingCart";
import {DataStateEnum} from "../productsState/products.reducer";
import {Action} from "@ngrx/store";
import {CartAction, CartActionType} from "./cart.actions";

export interface ShoppingCartState{
  shoppingCart? : ShoppingCart ,
  dataSate : DataStateEnum ,
  errorMessage : string
}

const initialState:ShoppingCartState = {dataSate:DataStateEnum.INITIAL , errorMessage: ""}
export function ShoppingCartReducer(state : ShoppingCartState = initialState , action : Action) : ShoppingCartState{
  switch (action.type){
    case CartActionType.GET_CART :
      return {...state , dataSate:DataStateEnum.LOADING }
    case CartActionType.GET_CART_SUCCESS :
      return {...state , dataSate:DataStateEnum.LOADED , shoppingCart: (<CartAction>(action)).payload }
    case CartActionType.GET_CART_ERROR :
      return {...state , dataSate:DataStateEnum.ERROR , errorMessage:(<CartAction>(action)).payload}
    default: return {...state}
  }
}
