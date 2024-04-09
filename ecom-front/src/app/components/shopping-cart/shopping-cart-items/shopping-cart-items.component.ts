import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ShoppingCart} from "../../../models/ShoppingCart";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ShoppingCartService} from "../../../services/shoppingCartService/shopping-cart.service";
import {DeleteProductFromCartAction} from "../../../ngrx/ShoppingCartState/cart.actions";
import {Auth_Test_Customer} from "../../../envirements/env";
import {Product} from "../../../models/product.model";
import {GetProductItemAction} from "../../../ngrx/Product-item-State/productItem.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart-items',
  templateUrl: './shopping-cart-items.component.html',
  styleUrls: ['./shopping-cart-items.component.css']
})
export class ShoppingCartItemsComponent implements OnInit{
  @Input() shoppingCart? : ShoppingCart ;

  constructor(private router: Router ,private fb: FormBuilder , public shoppingCartService : ShoppingCartService , private store : Store<any>) {
  }
  ngOnInit(): void {

  }

  onDeleteItem(product: Product) {
    let confirmation: boolean = confirm("you sure you want to delete this product of name { "+ product.name + " }")
    if(confirmation == true)
        this.store.dispatch(new DeleteProductFromCartAction({productId : product.productId , customerId:Auth_Test_Customer.customerId}))
  }

  goToProduct(product: Product) {
      // console.log(product)
      // this.store.dispatch(new GetProductItemAction(product)) ;
      // this.router.navigateByUrl("/product-details");
  }
}
