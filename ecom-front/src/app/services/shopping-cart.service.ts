import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoppingCart} from "../models/ShoppingCart";
import {Hosts} from "../envirments/env";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http : HttpClient) { }

  getShoppingCartOfCustomer(customerId: string):Observable<ShoppingCart> {
        return  this.http.get<ShoppingCart>(Hosts.customerService + "/customers/"+ customerId +"/shoppingCart") ;
  }
}
