import {Product} from "../../models/product.model";
import {DataStateEnum} from "../productsState/products.reducer";
import {Action} from "@ngrx/store";
import {SelectedProductAction, NewProductActionType} from "./SelectedProduct.action";
import {PageInfo} from "../../models/common.model";


export interface SelectedProductsState {
  products: Product[],
  dataState: DataStateEnum ,
  errorMessage: string ,
  pageInfo?: PageInfo
}
const initialState = {
  products:[] , dataState:DataStateEnum.INITIAL , errorMessage:""
}

export function SelectedProductsReducer(state: SelectedProductsState=initialState , action : Action):SelectedProductsState{
  switch (action.type){
    case NewProductActionType.GET_SELECTED_PRODUCTS :
      return {...state , dataState:DataStateEnum.LOADING}
    case NewProductActionType.GET_SELECTED_PRODUCTS_SUCCESS :
      return {...state , dataState:DataStateEnum.LOADED , products:(<SelectedProductAction>(action)).payload._embedded.products}
    case NewProductActionType.GET_SELECTED_PRODUCTS_ERROR :
      return {...state , dataState:DataStateEnum.ERROR , errorMessage:(<SelectedProductAction>(action)).payload}
    default : return {...state}
  }
}
