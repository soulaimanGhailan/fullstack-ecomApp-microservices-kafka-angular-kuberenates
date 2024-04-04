export interface Product {
  productId:string  ,
  name:string ,
  addingDate:string ,
  description:string ,
  selected:boolean ,
  productImagesBas64: string[],
  category:string ,
  status:string ,
  color: string[],
  productPrice: ProductPrice ;
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
