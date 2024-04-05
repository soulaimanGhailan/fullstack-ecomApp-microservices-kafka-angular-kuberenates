import { Component } from '@angular/core';
import {ProductsCategory} from "../../../models/product.model";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {GetProductsPageByCategoryAction} from "../../../ngrx/productsState/product.actions";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories : string[] =  Object.values(ProductsCategory).map((color) => String(color));

  constructor(private store:Store<any> , private router: Router) {
  }
  onSearchByCategory(cat: string) {
    this.store.dispatch(new GetProductsPageByCategoryAction({pageSize:{page:0 , size:6} ,data:cat}))
    this.router.navigateByUrl("/searched-products")
  }
}
