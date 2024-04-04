import {Injectable} from "@angular/core";
import {ProductService} from "../../services/product.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  GetAllProductsActionError,
  GetAllProductsActionSuccess , GetProductsPageActionError,
  GetProductsPageActionSuccess, ProductAction,
  ProductActionType
} from "./product.actions";

@Injectable()
export class ProductsEffects{
   constructor(private productService: ProductService ,  private effectAction : Actions) {
   }
   getAllProductEffect:Observable<Action>=createEffect(
     () => this.effectAction.pipe(
       ofType(ProductActionType.GET_ALL_PRODUCTS) ,
       mergeMap(action => {
         return this.productService.getAllProducts().pipe(
           map(data => {
             return new GetAllProductsActionSuccess(data)
           }) ,
           catchError(err => of(new GetAllProductsActionError(err.message())))
         ) ;
       })
     )
   );

   // get Products Page
  getProductsPageEffect:Observable<Action>=createEffect(
    () => this.effectAction.pipe(
      ofType(ProductActionType.GET_PRODUCTS_PAGE) ,
      mergeMap((action: ProductAction) => {
        return this.productService.getProductsPage(action.payload).pipe(
          map(data => {
            return new GetProductsPageActionSuccess(data)
          }) ,
          catchError(err => of(new GetProductsPageActionError(err.message)))
        ) ;
      })
    )
  );
}
