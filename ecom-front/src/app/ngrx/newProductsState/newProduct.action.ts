import {Action} from "@ngrx/store";
import {ProductActionType} from "../productsState/product.actions";
import {PageSize} from "../../models/product.model";

export enum NewProductActionType {
  GET_NEW_PRODUCTS = "*PRODUCTS* GET NEW PRODUCTS",
  GET_NEW_PRODUCTS_SUCCESS = "*PRODUCTS* GET NEW PRODUCTS [SUCCESS]",
  GET_NEW_PRODUCTS_ERROR = "*PRODUCTS* GET NEW PRODUCTS [ERROR]"
}

export class GetNewProductAction implements Action{
  type: NewProductActionType = NewProductActionType.GET_NEW_PRODUCTS;
  constructor(public payload : PageSize) {
  }
}
export class GetNewProductsActionSuccess implements Action{
  type: NewProductActionType = NewProductActionType.GET_NEW_PRODUCTS_SUCCESS;
  constructor(public payload : any) {
  }
}
export class GetNewProductsActionError implements Action{
  type: NewProductActionType = NewProductActionType.GET_NEW_PRODUCTS_ERROR;
  constructor(public payload : string) {
  }
}

export type NewProductAction = GetNewProductAction | GetNewProductsActionSuccess | GetNewProductsActionError
