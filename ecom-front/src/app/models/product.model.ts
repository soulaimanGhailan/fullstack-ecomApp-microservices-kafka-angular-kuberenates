export interface Product {
  productId:string  ,
  name:string ,
  addingDate:string ,
  description:string ,
  selected:boolean ,
  productImagesBas64: string[],
  category:string ,
  status:string ,
  color: string[]
}
export interface ProductPrice{
  priceId:string ,
  currency:string ,
  price: number
}
