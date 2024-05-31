import {Component, OnInit} from '@angular/core';
import {ProductsCategory} from "../../../models/product.model";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {GetProductsPageByCategoryAction} from "../../../ngrx/productsState/product.actions";
import {map, Observable} from "rxjs";
import {ShoppingCartState} from "../../../ngrx/ShoppingCartState/cart.reducer";
import {DataStateEnum} from "../../../ngrx/productsState/products.reducer";
import {ShoppingCartService} from "../../../services/shoppingCartService/shopping-cart.service";
import {SecurityService} from "../../../security/security.service";
import {GetShoppingCartAction} from "../../../ngrx/ShoppingCartState/cart.actions";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  categories : string[] =  Object.values(ProductsCategory).map((color) => String(color));
  shoppingCart$? : Observable<ShoppingCartState>
  public readonly CartDataState = DataStateEnum ;
  constructor(private store:Store<any> , private router: Router , public shoppingCartService:ShoppingCartService , private secService: SecurityService) {
  }

  ngOnInit(): void {
    if(this.secService.profile){
      if(this.secService.profile.id){
        this.store.dispatch(new GetShoppingCartAction(this.secService.profile.id))
        this.shoppingCart$ = this.store.pipe(
          map(state => state.shoppingCartState)
        )
      }
    }
  }
  onSearchByCategory(cat: string) {
    this.store.dispatch(new GetProductsPageByCategoryAction({pageSize:{page:0 , size:6} ,data:cat}))
    this.router.navigateByUrl("/searched-products")
  }

  goToShCart() {
    this.router.navigateByUrl("/cart") ;
  }
}
