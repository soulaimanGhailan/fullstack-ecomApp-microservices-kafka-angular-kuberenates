import {Product} from "../../models/product.model";
import {ProductAction, ProductActionType} from "./product.actions";
import {sample} from "rxjs";
import {Action} from "@ngrx/store";

export enum ProductStateEnum{
  LOADING="Loading",
  LOADED ="Loaded",
  ERROR = "Error",
  INITIAL="Initial",
}
export interface ProductState{
  products: Product[] ,
  errorMessage: string ,
  dataState: ProductStateEnum,

}
const initState:ProductState = {
  products:[] ,
  errorMessage:"" ,
  dataState:ProductStateEnum.INITIAL
}
export function productReducer(state:ProductState=initState , action : Action) : ProductState{
  switch (action.type){
    case ProductActionType.GET_ALL_PRODUCTS:
      return {...state , dataState:ProductStateEnum.LOADING}
    case ProductActionType.GET_ALL_PRODUCTS_SUCCESS:
      return {...state , dataState:ProductStateEnum.LOADED , products:(<ProductAction>(action)).payload}
    case ProductActionType.GET_ALL_PRODUCTS_ERROR:
      return {...state , dataState:ProductStateEnum.LOADED , errorMessage:(<ProductAction>(action)).payload}
    default: return {...state}
  }
}
