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
    // get product item
    case ProductItemActionType.GET_PRODUCT_ITEM  :
      return {...state , dataState:DataStateEnum.LOADED , product: (<ProductItemAction>action).payload}

    // empty product item state
    case ProductItemActionType.EMPTY_PRODUCT_ITEM_STATE  :
      return initialState ;

    //save Product
    case ProductItemActionType.SAVE_PRODUCT  :
      return {...state , dataState:DataStateEnum.LOADING }
    case ProductItemActionType.SAVE_PRODUCT_SUCCESS  :
      return {...state , dataState:DataStateEnum.LOADED , product: (<ProductItemAction>action).payload}
    case ProductItemActionType.SAVE_PRODUCT_ERROR  :
      return {...state , dataState:DataStateEnum.ERROR , errorMessage:(<ProductItemAction>action).payload}

    //edit Product
    case ProductItemActionType.EDIT_PRODUCT  :
      return {...state , dataState:DataStateEnum.EDIT , product: (<ProductItemAction>action).payload}
    case ProductItemActionType.EDIT_PRODUCT_SUCCESS  :
      return {...state , dataState:DataStateEnum.EDITED , product: (<ProductItemAction>action).payload}
    case ProductItemActionType.EDIT_PRODUCT_ERROR  :
      return {...state , dataState:DataStateEnum.ERROR , errorMessage:(<ProductItemAction>action).payload}
    default : return  {...state}
  }
}
