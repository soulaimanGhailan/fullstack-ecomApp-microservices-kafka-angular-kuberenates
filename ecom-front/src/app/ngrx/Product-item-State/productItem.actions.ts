import {Action} from "@ngrx/store";
import {CreatedProduct, Product} from "../../models/product.model";

export enum ProductItemActionType {
  GET_PRODUCT_ITEM = "*PRODUCT_ITEM* GET PRODUCT ITEM",

  EMPTY_PRODUCT_ITEM_STATE = "*PRODUCT_ITEM*  EMPTY_PRODUCT_ITEM_STATE" ,

  SAVE_PRODUCT = "*PRODUCT* SAVE PRODUCT",
  SAVE_PRODUCT_SUCCESS = "*PRODUCT* SAVE PRODUCT [SUCCESS]",
  SAVE_PRODUCT_ERROR = "*PRODUCT* SAVE PRODUCT [ERROR] ",

  EDIT_PRODUCT = "*PRODUCT* EDIT PRODUCT",
  EDIT_PRODUCT_SUCCESS = "*PRODUCT* EDIT PRODUCT [SUCCESS]",
  EDIT_PRODUCT_ERROR = "*PRODUCT* EDIT PRODUCT [ERROR] ",
}


/** Get Product ITEM Action **/
export class GetProductItemAction implements Action{
  type: ProductItemActionType = ProductItemActionType.GET_PRODUCT_ITEM;
  constructor(public payload : Product) {
  }
}

export class EmptyProductItemAction implements Action{
  type: ProductItemActionType = ProductItemActionType.EMPTY_PRODUCT_ITEM_STATE;
  constructor(public payload : any) {
  }
}

// save product
export class SaveProductAction implements Action{
  type: ProductItemActionType = ProductItemActionType.SAVE_PRODUCT;
  constructor(public payload : CreatedProduct) {
  }
}
export class SaveProductActionSuccess implements Action{
  type: ProductItemActionType = ProductItemActionType.SAVE_PRODUCT_SUCCESS;
  constructor(public payload : any) {
  }
}
export class SaveProductActionError implements Action{
  type: ProductItemActionType = ProductItemActionType.SAVE_PRODUCT_ERROR;
  constructor(public payload : string) {
  }
}

//edit product
export class EditProductAction implements Action{
  type: ProductItemActionType = ProductItemActionType.EDIT_PRODUCT;
  constructor(public payload : CreatedProduct) {
  }
}
export class EditProductActionSuccess implements Action{
  type: ProductItemActionType = ProductItemActionType.EDIT_PRODUCT_SUCCESS;
  constructor(public payload : any) {
  }
}
export class EditProductActionError implements Action{
  type: ProductItemActionType = ProductItemActionType.EDIT_PRODUCT_ERROR;
  constructor(public payload : string) {
  }
}

export type ProductItemAction = GetProductItemAction |
  SaveProductAction | SaveProductActionSuccess | SaveProductActionError |
  EditProductAction | EditProductActionSuccess | EditProductActionError
