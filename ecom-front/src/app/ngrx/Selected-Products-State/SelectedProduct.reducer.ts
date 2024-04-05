import {PageInfo, Product} from "../../models/product.model";
import {ProductStateEnum} from "../productsState/products.reducer";
import {Action} from "@ngrx/store";
import {SelectedProductAction, NewProductActionType} from "./SelectedProduct.action";


export interface SelectedProductsState {
  products: Product[],
  dataState: ProductStateEnum ,
  errorMessage: string ,
  pageInfo?: PageInfo
}
const initialState = {
  products:[] , dataState:ProductStateEnum.INITIAL , errorMessage:""
}

export function SelectedProductsReducer(state: SelectedProductsState=initialState , action : Action):SelectedProductsState{
  switch (action.type){
    case NewProductActionType.GET_SELECTED_PRODUCTS :
      return {...state , dataState:ProductStateEnum.LOADING}
    case NewProductActionType.GET_SELECTED_PRODUCTS_SUCCESS :
      return {...state , dataState:ProductStateEnum.LOADED , products:(<SelectedProductAction>(action)).payload._embedded.products}
    case NewProductActionType.GET_SELECTED_PRODUCTS_ERROR :
      return {...state , dataState:ProductStateEnum.ERROR , errorMessage:(<SelectedProductAction>(action)).payload}
    default : return {...state}
  }
}
