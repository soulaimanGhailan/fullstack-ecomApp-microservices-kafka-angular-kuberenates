import {Injectable} from "@angular/core";
import {ProductService} from "../../services/product.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {GetAllProductsActionError, GetAllProductsActionSuccess, ProductActionType} from "./product.actions";

@Injectable()
export class ProductsEffects{
   constructor(private productService: ProductService ,  private effectAction : Actions) {
   }
   getAllProductEffect:Observable<Action>=createEffect(
     () => this.effectAction.pipe(
       ofType(ProductActionType.GET_ALL_PRODUCTS) ,
       mergeMap(action => {
         return this.productService.getAllProducts().pipe(
           map(data => new GetAllProductsActionSuccess(data)) ,
           catchError(err => of(new GetAllProductsActionError(err.measure())))
         ) ;
       })
     )
   );
}
