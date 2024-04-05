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
  colors: string[],
  productPrice: ProductPrice ;
  dimension: Dimension ;
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
export interface PageInfo {
  totalPages:number ,
  size:number ,
  totalElements:number ,
  number: number

}

export interface ProductPrice{
  priceId:string ,
  currency:string ,
  price: number ,
  symbol: string
}
export interface PageSize{
  page: number ,
  size: number
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
