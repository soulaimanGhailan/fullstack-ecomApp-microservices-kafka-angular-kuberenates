import {Action} from "@ngrx/store";
import {} from "../../models/product.model";
import {PageSize} from "../../models/common.model";

export enum NewProductActionType {
  GET_SELECTED_PRODUCTS = "*PRODUCTS* GET SELECTED PRODUCTS",
  GET_SELECTED_PRODUCTS_SUCCESS = "*PRODUCTS* GET SELECTED PRODUCTS [SUCCESS]",
  GET_SELECTED_PRODUCTS_ERROR = "*PRODUCTS* GET SELECTED PRODUCTS [ERROR]"
}

export class GetSelectedProductAction implements Action{
  type: NewProductActionType = NewProductActionType.GET_SELECTED_PRODUCTS;
  constructor(public payload : PageSize) {
  }
}
export class GetSelectedProductsActionSuccess implements Action{
  type: NewProductActionType = NewProductActionType.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload : any) {
  }
}
export class GetSelectedProductsActionError implements Action{
  type: NewProductActionType = NewProductActionType.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload : string) {
  }
}

export type SelectedProductAction = GetSelectedProductAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
