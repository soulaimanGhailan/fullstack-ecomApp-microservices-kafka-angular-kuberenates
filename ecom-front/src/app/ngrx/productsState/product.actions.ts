import {Action} from "@ngrx/store";
import {Product} from "../../models/product.model";

export enum ProductActionType  {
  GET_ALL_PRODUCTS = "*PRODUCTS* GET ALL PRODUCTS",
  GET_ALL_PRODUCTS_SUCCESS = "*PRODUCTS* GET ALL PRODUCTS [SUCCESS]",
  GET_ALL_PRODUCTS_ERROR = "*PRODUCTS* GET ALL PRODUCTS [ERROR]" ,

  GET_ALL_PRODUCTS_PAGE = "*PRODUCTS* GET  PRODUCTS PAGE ",
  GET_ALL_PRODUCT_SUCCESS_PAGE = "*PRODUCTS* GET  PRODUCTS PAGE [SUCCESS]",
  GET_ALL_PRODUCTS_ERROR_PAGE = "*PRODUCTS* GET  PRODUCTS PAGE [ERROR]  "
}

/** GetAllProductAction **/
export class GetAllProductsAction implements Action{
  type: ProductActionType = ProductActionType.GET_ALL_PRODUCTS;
  constructor(public payload : any) {
  }
}
export class GetAllProductsActionSuccess implements Action{
  type: ProductActionType = ProductActionType.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload : Product[]) {
  }
}
export class GetAllProductsActionError implements Action{
  type: ProductActionType = ProductActionType.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload : string) {
  }
}

/** GetAllProduct PAGE **/
export class GetProductsPageAction implements Action{
  type: ProductActionType = ProductActionType.GET_ALL_PRODUCTS;
  constructor(public payload : any) {
  }
}
export class GetProductsPageActionSuccess implements Action{
  type: ProductActionType = ProductActionType.GET_ALL_PRODUCTS;
  constructor(public payload : any) {
  }
}
export class GetProductsPageActionError implements Action{
  type: ProductActionType = ProductActionType.GET_ALL_PRODUCTS;
  constructor(public payload : string) {
  }
}

export type ProductAction = GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
;
