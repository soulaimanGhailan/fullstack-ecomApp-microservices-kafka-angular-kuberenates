import {Action} from "@ngrx/store";
import {Product} from "../../models/product.model";
import {ProductStateEnum} from "../productsState/products.reducer";
import {ProductItemAction, ProductItemActionType} from "./productItem.actions";

export interface ProductItemState{
  product: Product | null,
  dataState: ProductStateEnum ,
  errorMessage: string
}
const initialState: ProductItemState = {
   product:null, dataState:ProductStateEnum.INITIAL , errorMessage:""
}
export function ProductItemReducer(state: ProductItemState=initialState , action : Action):ProductItemState{
  switch (action.type){
    case ProductItemActionType.GET_PRODUCT_ITEM  :
      return {...state , dataState:ProductStateEnum.LOADED , product: (<ProductItemAction>action).payload}
    default : return  {...state}
  }
}
