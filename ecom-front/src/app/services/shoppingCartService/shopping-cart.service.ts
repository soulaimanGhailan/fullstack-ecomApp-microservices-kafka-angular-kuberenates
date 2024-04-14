import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AddItemRequest, ShoppingCart} from "../../models/ShoppingCart";
import {DeleteProductReq} from "../../models/common.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private customerService:string =environment.customerService
  constructor(private http : HttpClient) { }

  getShoppingCartOfCustomer(customerId: string):Observable<ShoppingCart> {
        return  this.http.get<ShoppingCart>(this.customerService + "/customers/"+ customerId +"/shoppingCart") ;
  }

  calcTotalPrice(cart :ShoppingCart):number {
    let totalPrice:number = 0;
    cart.items.forEach(
      value => totalPrice = totalPrice + (value.quantity * value.product.productPrice.price)
    )
    return totalPrice ;
  }

  addProductToShoppingCart(addProductReq: AddItemRequest):Observable<ShoppingCart> {
    return  this.http.post<ShoppingCart>(this.customerService + "/api" , addProductReq) ;
  }

  deleteItemFromCart(req: DeleteProductReq):Observable<ShoppingCart>{
    return  this.http.delete<ShoppingCart>(this.customerService + "/api/" +req.customerId+"/"+req.productId) ;
  }
}
