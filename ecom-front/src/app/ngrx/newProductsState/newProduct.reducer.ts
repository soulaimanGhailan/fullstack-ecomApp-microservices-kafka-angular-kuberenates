import {PageInfo, Product} from "../../models/product.model";
import {ProductStateEnum} from "../productsState/products.reducer";
import {Action} from "@ngrx/store";
import {NewProductAction, NewProductActionType} from "./newProduct.action";


export interface NewProductsState{
  products: Product[],
  dataState: ProductStateEnum ,
  errorMessage: string ,
  pageInfo?: PageInfo
}
const initialState = {
  products:[] , dataState:ProductStateEnum.INITIAL , errorMessage:""
}

export function newProductsReducer(state: NewProductsState=initialState , action : Action):NewProductsState{
  switch (action.type){
    case NewProductActionType.GET_NEW_PRODUCTS :
      return {...state , dataState:ProductStateEnum.LOADING}
    case NewProductActionType.GET_NEW_PRODUCTS_SUCCESS :
      return {...state , dataState:ProductStateEnum.LOADED , products:(<NewProductAction>(action)).payload._embedded.products}
    case NewProductActionType.GET_NEW_PRODUCTS_ERROR :
      return {...state , dataState:ProductStateEnum.ERROR , errorMessage:(<NewProductAction>(action)).payload}
    default : return {...state}
  }
}
