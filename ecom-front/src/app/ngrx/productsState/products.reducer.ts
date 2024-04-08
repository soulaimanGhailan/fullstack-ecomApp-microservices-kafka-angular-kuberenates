import { Product} from "../../models/product.model";
import {ProductAction, ProductsActionType} from "./product.actions";
import {sample} from "rxjs";
import {Action} from "@ngrx/store";
import {PageInfo} from "../../models/common.model";

export enum DataStateEnum{
  LOADING="Loading",
  LOADED ="Loaded",
  ERROR = "Error",
  INITIAL="Initial",
  EDIT = "EDIT" ,
  EDITED = "EDITED" ,
}
export enum FetchMethode{
  ALL="ALL"  ,
  PAGE = "PAGE",
  SEARCH_BY_KEYWORD = "SEARCH_BY_KEYWORD",
  SEARCH_BY_CATEGORY= "SEARCH_BY_CATEGORY"
}
export interface ProductState{
  products: Product[] ,
  errorMessage: string ,
  dataState: DataStateEnum,
  pageInfo?: PageInfo ,
  fetchMethode?: FetchMethode
}

const initState:ProductState = {
  products:[] ,
  errorMessage:"" ,
  dataState:DataStateEnum.INITIAL ,
}
export function productReducer(state:ProductState=initState , action : Action) : ProductState{
  switch (action.type){
    //get All Products
    case ProductsActionType.GET_ALL_PRODUCTS:
      return {...state , dataState:DataStateEnum.LOADING}
    case ProductsActionType.GET_ALL_PRODUCTS_SUCCESS:
      return  {...state , dataState:DataStateEnum.LOADED , products:(<ProductAction>(action)).payload._embedded.products ,pageInfo:(<ProductAction>(action)).payload.page , fetchMethode:FetchMethode.ALL };
    case ProductsActionType.GET_ALL_PRODUCTS_ERROR:
      return {...state , dataState:DataStateEnum.ERROR , errorMessage:(<ProductAction>(action)).payload}

    //Get  Product Page
    case ProductsActionType.GET_PRODUCTS_PAGE:
      return {...state , dataState:DataStateEnum.LOADING}
    case ProductsActionType.GET_PRODUCT_PAGE_SUCCESS:
      return  {...state , dataState:DataStateEnum.LOADED , products:(<ProductAction>(action)).payload._embedded.products ,pageInfo:(<ProductAction>(action)).payload.page,fetchMethode:FetchMethode.PAGE };
    case ProductsActionType.GET_PRODUCTS_PAGE_ERROR:
      return {...state , dataState:DataStateEnum.ERROR , errorMessage:(<ProductAction>(action)).payload}

    //Get  Product Page by Keyword
    case ProductsActionType.GET_PRODUCTS_PAGE_BY_KEYWORD:
      return {...state , dataState:DataStateEnum.LOADING}
    case ProductsActionType.GET_PRODUCT_PAGE_BY_KEYWORD_SUCCESS:
      return  {...state , dataState:DataStateEnum.LOADED , products:(<ProductAction>(action)).payload._embedded.products ,pageInfo:(<ProductAction>(action)).payload.page , fetchMethode:FetchMethode.SEARCH_BY_KEYWORD };
    case ProductsActionType.GET_PRODUCTS_PAGE_BY_KEYWORD_ERROR:
      return {...state , dataState:DataStateEnum.ERROR , errorMessage:(<ProductAction>(action)).payload}

    //Get  Product Page by Category
    case ProductsActionType.GET_PRODUCTS_PAGE_BY_CATEGORY:
      return {...state , dataState:DataStateEnum.LOADING}
    case ProductsActionType.GET_PRODUCT_PAGE_BY_CATEGORY_SUCCESS:
      return  {...state , dataState:DataStateEnum.LOADED , products:(<ProductAction>(action)).payload._embedded.products ,pageInfo:(<ProductAction>(action)).payload.page ,fetchMethode:FetchMethode.SEARCH_BY_CATEGORY };
    case ProductsActionType.GET_PRODUCTS_PAGE_BY_CATEGORY_ERROR:
      return {...state , dataState:DataStateEnum.ERROR , errorMessage:(<ProductAction>(action)).payload}

    default: return {...state}
  }
}
