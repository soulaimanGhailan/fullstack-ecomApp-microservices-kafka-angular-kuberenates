import {PageInfo, PageSize} from "./common.model";

export interface Product {
  productId:string  ,
  name:string ,
  addingDate:string ,
  description:string ,
  selected:boolean ,
  productImagesBas64: string[],
  category:string ,
  status:string ,
  brand:string ;
  quantity:number
  colors: string[],
  productPrice: ProductPrice ;
  dimension: Dimension ;
  pickedColor : string | null
}
export interface Dimension{
  height : number ,
  width: number,
  larger: number ,
  weight : number
}
export interface ProductsPage{
  products: Product[] ,
  pageInfo : PageInfo ;
}


export interface ProductPrice{
  currency:string ,
  price: number ,
  symbol: string
}

export interface CreatedProduct{
  productId?:string  ,
  name:string ,
  addingDate?:string ,
  description:string ,
  selected:boolean ,
  productImagesBas64: string[],
  category:string ,
  status?:string ,
  brand:string ;
  quantity: number ,
  colors: string[],
  productPrice: ProductPrice ;
  dimension: Dimension ;
  pickedColor? : string
}

export interface ActionPayload<T>{
  pageSize:PageSize;
  data : T;
}
export enum ProductsCategory {
  ELECTRONICS = "ELECTRONICS" ,
  CLOTHES="CLOTHES" ,
  FOOD ="FOOD" ,
  HEALTH_BEAUTY = "HEALTH_BEAUTY" ,
  SPORT="SPORT" ,
  BOOKS = "BOOKS"
}
