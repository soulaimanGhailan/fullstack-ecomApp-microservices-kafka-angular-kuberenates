import {Action} from "@ngrx/store";
import {Product} from "../../models/product.model";

export enum ProductItemActionType {
  GET_PRODUCT_ITEM = "*PRODUCT_ITEM* GET PRODUCT ITEM",
}


/** Get Product ITEM Action **/
export class GetProductItemAction implements Action{
  type: ProductItemActionType = ProductItemActionType.GET_PRODUCT_ITEM;
  constructor(public payload : Product) {
  }
}

export type ProductItemAction = GetProductItemAction
