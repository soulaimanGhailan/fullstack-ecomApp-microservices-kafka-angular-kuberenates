import {Injectable} from "@angular/core";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  GetAllProductsActionError,
  GetAllProductsActionSuccess,
  ProductsActionType
} from "../productsState/product.actions";
import {
  ProductItemAction,
  ProductItemActionType,
  SaveProductActionError,
  SaveProductActionSuccess
} from "./productItem.actions";
import {ProductService} from "../../services/productService/product.service";


@Injectable()
export class ProductItemEffect{

  constructor(private productService : ProductService , private effectAction : Actions) {
  }
  getAllProductEffect:Observable<Action>=createEffect(
    () => this.effectAction.pipe(
      ofType(ProductItemActionType.SAVE_PRODUCT) ,
      mergeMap((action: ProductItemAction) => {
        return this.productService.saveProduct(action.payload).pipe(
          map(data => {
            return new SaveProductActionSuccess(data)
          }) ,
          catchError(err => of(new SaveProductActionError(err.message)))
        ) ;
      })
    )
  );

}
