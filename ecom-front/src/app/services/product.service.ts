import {Injectable, OnInit} from '@angular/core';
import {map, Observable, switchMap} from "rxjs";
import {ActionPayload, PageInfo, PageSize, Product, ProductPrice, ProductsPage} from "../models/product.model";
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
  public getProductsPage(pageSize : PageSize): Observable<Product[]> {
    return this.http.get<Product[]>(Hosts.productService + "/products?page=" + pageSize.page + "&size=" + pageSize.size)
  }



  // public getProductsPage(size: number, page: number): Observable<ProductsPage> {
  //   return this.http.get<Product[]>(Hosts.productService + "/products?page=" + page + "&size=" + size).pipe(
  //     switchMap(products => {
  //       return this.http.get<PageInfo>(Hosts.productService + "/api/products/" + size).pipe(
  //         map(pageInfo => {
  //           return { products, pageInfo: pageInfo };
  //         })
  //       );
  //     })
  //   );
  // }


  public getSelectedProducts(pageSize : PageSize): Observable<Product[]> {
    return this.http.get<Product[]>(Hosts.productService + "/products/search/findBySelected?selected=true&page=" + pageSize.page +"&size="+pageSize.size)
  }
  public getProductsPageByKeyword(payload : ActionPayload<String>): Observable<Product[]> {
    return this.http.get<Product[]>(Hosts.productService + "/products/search/findByNameContainsIgnoreCase?keyword=" + payload.data +"&page=" + payload.pageSize.page +"&size="+payload.pageSize.size)
  }

  public getProductsPageByCategory(payload : ActionPayload<String>): Observable<Product[]> {
    return this.http.get<Product[]>(Hosts.productService + "/products/search/findByCategory?category=" + payload.data +"&page=" + payload.pageSize.page +"&size="+payload.pageSize.size)
  }

  public getProductItem(productId : string):Observable<Product>{
    return  this.http.get<Product>(Hosts.productService + "/products/"+productId) ;
  }

  public getDate(product : Product){
    return product.addingDate.slice(0 ,10);
  }
}
