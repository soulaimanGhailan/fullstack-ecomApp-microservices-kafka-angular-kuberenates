import {Injectable} from "@angular/core";
import {ProductService} from "../../services/productService/product.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess,
  SelectedProductAction,
  NewProductActionType
} from "./SelectedProduct.action";

@Injectable()
export class SelectedProductEffects {
  constructor(private productService: ProductService, private effectAction: Actions) {
  }

  getSelectedProductEffect: Observable<Action> = createEffect(
    () => this.effectAction.pipe(
      ofType(NewProductActionType.GET_SELECTED_PRODUCTS),
      mergeMap((action:SelectedProductAction) => {
        return this.productService.getSelectedProducts(action.payload).pipe(
          map(data => {
            return new GetSelectedProductsActionSuccess(data)
          }),
          catchError(err => of(new GetSelectedProductsActionError(err.message())))
        );
      })
    )
  );

}
