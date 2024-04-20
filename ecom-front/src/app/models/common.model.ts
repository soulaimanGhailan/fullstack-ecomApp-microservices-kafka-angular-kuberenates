export interface PageInfo {
  totalPages:number ,
  size:number ,
  totalElements:number ,
  number: number
}

export interface PageSize{
  page: number ,
  size: number
}

export interface DeleteProductReq{
  customerId : string ,
  productId : string
}

export enum Color {
  Red = "Red",
  Blue = "Blue",
  Green = "Green",
  Yellow = "Yellow",
}

export enum Currency {
  DOLLAR = "DOLLAR",
  MAD = "MAD",
  EUR = "EUR",

}
export enum EventType {
  SEARCH_BY_CATEGORY ="SEARCH_BY_CATEGORY" ,
  SEARCH_BY_KEYWORD = "SEARCH_BY_KEYWORD" ,
  CLICK_PRODUCT = "CLICK_PRODUCT"
}
