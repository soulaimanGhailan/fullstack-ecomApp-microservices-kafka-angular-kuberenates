import {Action} from "@ngrx/store";
import {Product} from "../../models/product.model";
import {DataStateEnum} from "../productsState/products.reducer";
import {ProductItemAction, ProductItemActionType} from "./productItem.actions";

export interface ProductItemState{
  product: Product | null,
  dataState: DataStateEnum ,
  errorMessage: string
}
const initialState: ProductItemState = {
   product:null, dataState:DataStateEnum.INITIAL , errorMessage:""
}
export function ProductItemReducer(state: ProductItemState=initialState , action : Action):ProductItemState{
  switch (action.type){
    case ProductItemActionType.GET_PRODUCT_ITEM  :
      return {...state , dataState:DataStateEnum.LOADED , product: (<ProductItemAction>action).payload}
    default : return  {...state}
  }
}
