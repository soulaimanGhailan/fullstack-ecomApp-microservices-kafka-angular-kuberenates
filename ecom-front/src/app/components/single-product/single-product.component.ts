import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {GetProductItemAction} from "../../ngrx/Product-item-State/productItem.actions";
import {AddProductToCartAction} from "../../ngrx/ShoppingCartState/cart.actions";
import {AddItemRequest} from "../../models/ShoppingCart";
import {Auth_Test_Customer} from "../../envirments/env";

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

  addProductToCart() {
      let itemReq : AddItemRequest = {productId: this.product.productId  ,customerId : Auth_Test_Customer.customerId , increment:true }
    this.store.dispatch(new AddProductToCartAction(itemReq))
  }
}
