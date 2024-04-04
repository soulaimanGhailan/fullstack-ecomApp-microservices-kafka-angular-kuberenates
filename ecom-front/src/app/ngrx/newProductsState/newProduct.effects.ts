import {Injectable} from "@angular/core";
import {ProductService} from "../../services/product.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  GetAllProductsActionError,
  GetAllProductsActionSuccess,
  ProductActionType
} from "../productsState/product.actions";
import {
  GetNewProductsActionError,
  GetNewProductsActionSuccess,
  NewProductAction,
  NewProductActionType
} from "./newProduct.action";

@Injectable()
export class NewProductEffects {
  constructor(private productService: ProductService, private effectAction: Actions) {
  }

  getNewProductEffect: Observable<Action> = createEffect(
    () => this.effectAction.pipe(
      ofType(NewProductActionType.GET_NEW_PRODUCTS),
      mergeMap((action:NewProductAction) => {
        return this.productService.getNewProduct(action.payload).pipe(
          map(data => {
            return new GetNewProductsActionSuccess(data)
          }),
          catchError(err => of(new GetNewProductsActionError(err.message())))
        );
      })
    )
  );

}
