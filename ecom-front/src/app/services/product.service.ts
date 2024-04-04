import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../models/product.model";
import {Hosts} from "../envirments/env";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
  ngOnInit(): void {
  }

  constructor(private http : HttpClient) { }

  public getAllProducts():Observable<Product[]>{
     return  this.http.get<Product[]>(Hosts.productService + "/products")
  }
}
