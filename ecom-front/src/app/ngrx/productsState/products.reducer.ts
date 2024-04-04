import {PageInfo, Product} from "../../models/product.model";
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
  pageInfo?: PageInfo

}
const initState:ProductState = {
  products:[] ,
  errorMessage:"" ,
  dataState:ProductStateEnum.INITIAL ,
}
export function productReducer(state:ProductState=initState , action : Action) : ProductState{
  switch (action.type){
    //get All Products
    case ProductActionType.GET_ALL_PRODUCTS:
      return {...state , dataState:ProductStateEnum.LOADING}
    case ProductActionType.GET_ALL_PRODUCTS_SUCCESS:
      return  {...state , dataState:ProductStateEnum.LOADED , products:(<ProductAction>(action)).payload._embedded.products ,pageInfo:(<ProductAction>(action)).payload.page };
    case ProductActionType.GET_ALL_PRODUCTS_ERROR:
      return {...state , dataState:ProductStateEnum.ERROR , errorMessage:(<ProductAction>(action)).payload}

    //Get  Product Page
    case ProductActionType.GET_PRODUCTS_PAGE:
      return {...state , dataState:ProductStateEnum.LOADING}
    case ProductActionType.GET_PRODUCT_PAGE_SUCCESS:
      return  {...state , dataState:ProductStateEnum.LOADED , products:(<ProductAction>(action)).payload._embedded.products ,pageInfo:(<ProductAction>(action)).payload.page };
    case ProductActionType.GET_PRODUCTS_PAGE_ERROR:
      return {...state , dataState:ProductStateEnum.ERROR , errorMessage:(<ProductAction>(action)).payload}

    //Get  Product Page by Keyword
    case ProductActionType.GET_PRODUCTS_PAGE_BY_KEYWORD:
      return {...state , dataState:ProductStateEnum.LOADING}
    case ProductActionType.GET_PRODUCT_PAGE_BY_KEYWORD_SUCCESS:
      return  {...state , dataState:ProductStateEnum.LOADED , products:(<ProductAction>(action)).payload._embedded.products ,pageInfo:(<ProductAction>(action)).payload.page };
    case ProductActionType.GET_PRODUCTS_PAGE_BY_KEYWORD_ERROR:
      return {...state , dataState:ProductStateEnum.ERROR , errorMessage:(<ProductAction>(action)).payload}

    default: return {...state}
  }
}
