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
