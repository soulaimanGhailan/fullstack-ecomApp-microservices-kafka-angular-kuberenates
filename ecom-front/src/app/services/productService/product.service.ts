import {Injectable, OnInit} from '@angular/core';
import {map, Observable, switchMap} from "rxjs";
import {ActionPayload, CreatedProduct, Product, ProductPrice, ProductsPage} from "../../models/product.model";
import {HttpClient} from "@angular/common/http";
import {EventType, PageSize} from "../../models/common.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  private productService:string =environment.productService
  ngOnInit(): void {
  }

  constructor(private http : HttpClient) { }

  public getAllProducts():Observable<Product[]>{
     return  this.http.get<Product[]>(this.productService + "/products")
  }
  public getProductsPage(pageSize : PageSize): Observable<Product[]> {
    return this.http.get<Product[]>(this.productService + "/products?page=" + pageSize.page + "&size=" + pageSize.size)
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
    return this.http.get<Product[]>(this.productService + "/products/search/findBySelected?selected=true&page=" + pageSize.page +"&size="+pageSize.size)
  }
  public getProductsPageByKeyword(payload : ActionPayload<String>): Observable<Product[]> {
    return this.http.get<Product[]>(this.productService + "/products/search/findByNameContainsIgnoreCase?keyword=" + payload.data +"&page=" + payload.pageSize.page +"&size="+payload.pageSize.size)
  }

  public getProductsPageByCategory(payload : ActionPayload<String>): Observable<Product[]> {
    return this.http.get<Product[]>(this.productService + "/products/search/findByCategory?category=" + payload.data +"&page=" + payload.pageSize.page +"&size="+payload.pageSize.size)
  }

  public publishEvent(productId : string , eventType : EventType , customerId : string){
      this.http.get<void>(this.productService + "/api/products/event/"+productId +"/" + customerId + "/" + eventType.toString()).subscribe(value =>
      {
      })
  }

  public saveProduct(product : CreatedProduct):Observable<Product>{
    return this.http.post<Product>(this.productService + "/api/products" , product) ;
  }

  public editProduct(product : CreatedProduct):Observable<Product>{
    return this.http.put<Product>(this.productService + "/api/products" , product) ;
  }

  public deleteProduct(productId : string):Observable<Product>{
     return this.http.delete<Product>(this.productService + "/products/" + productId) ;
  }


  public getDate(product : Product){
    return product.addingDate.slice(0 ,10);
  }

}
