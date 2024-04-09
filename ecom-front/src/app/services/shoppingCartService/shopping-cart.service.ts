import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AddItemRequest, ShoppingCart} from "../../models/ShoppingCart";
import {Hosts} from "../../envirements/env";
import {DeleteProductReq} from "../../models/common.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http : HttpClient) { }

  getShoppingCartOfCustomer(customerId: string):Observable<ShoppingCart> {
        return  this.http.get<ShoppingCart>(Hosts.customerService + "/customers/"+ customerId +"/shoppingCart") ;
  }

  calcTotalPrice(cart :ShoppingCart):number {
    let totalPrice:number = 0;
    cart.items.forEach(
      value => totalPrice = totalPrice + (value.quantity * value.product.productPrice.price)
    )
    return totalPrice ;
  }

  addProductToShoppingCart(addProductReq: AddItemRequest):Observable<ShoppingCart> {
    return  this.http.post<ShoppingCart>(Hosts.customerService + "/api" , addProductReq) ;
  }

  deleteItemFromCart(req: DeleteProductReq):Observable<ShoppingCart>{
    return  this.http.delete<ShoppingCart>(Hosts.customerService + "/api/" +req.customerId+"/"+req.productId) ;
  }
}
