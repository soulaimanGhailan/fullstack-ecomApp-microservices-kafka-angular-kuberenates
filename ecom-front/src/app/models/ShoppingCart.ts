import {Product} from "./product.model";

export interface ShoppingCart {
  id:string ,
  customerId: string,
  items: ShoppingCartItem[]
}
export interface ShoppingCartItem{
  product : Product ,
  quantity : number
}
export interface AddItemRequest{
  productId?:string ,
  customerId: string ,
  quantity? : number
  pickedColor?: string ,
}
