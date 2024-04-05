import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {GetProductItemAction} from "../../ngrx/Product-item-State/productItem.actions";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{
  @Input() product!: Product ;
  constructor(private store : Store<any>, private router: Router) {

  }
  ngOnInit(): void {

  }

  onProductItem() {
    this.store.dispatch(new GetProductItemAction(this.product)) ;
    this.router.navigateByUrl("/product-details") ;
  }
}
