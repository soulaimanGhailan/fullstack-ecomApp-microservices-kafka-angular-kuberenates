import {Component, Input} from '@angular/core';
import {Product} from "../../../../models/product.model";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {GetProductItemAction} from "../../../../ngrx/Product-item-State/productItem.actions";

@Component({
  selector: 'app-selected-product-item',
  templateUrl: './selected-product-item.component.html',
  styleUrls: ['./selected-product-item.component.css']
})
export class SelectedProductItemComponent {
  @Input() newProduct! : Product

  constructor(private router : Router , private store : Store<any>) {
  }
  onSelectedProduct() {
    this.store.dispatch(new GetProductItemAction(this.newProduct))
    this.router.navigateByUrl("/product-details");
  }
}
