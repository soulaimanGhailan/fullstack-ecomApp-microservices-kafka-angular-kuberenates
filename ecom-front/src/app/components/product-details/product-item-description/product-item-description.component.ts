import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AddProductToCartAction} from "../../../ngrx/ShoppingCartState/cart.actions";
import {AddItemRequest} from "../../../models/ShoppingCart";
import {Store} from "@ngrx/store";
import {Auth_Test_Customer} from "../../../envirments/env";

@Component({
  selector: 'app-product-item-description',
  templateUrl: './product-item-description.component.html',
  styleUrls: ['./product-item-description.component.css']
})
export class ProductItemDescriptionComponent implements OnInit{
  @Input() product: Product|null =null;
  addProductFrom!: FormGroup ;
  constructor(private fb:FormBuilder , private store: Store<any>) {
    this.addProductFrom = this.fb.group({
      quantity:[0],
      color:[""]
    })
  }
  ngOnInit(): void {

  }

  onAddProductToCart() {
    let quantity : number = this.addProductFrom.value.quantity;
    let color : string = this.addProductFrom.value.color;
    this.store.dispatch(new AddProductToCartAction({productId :this.product?.productId , quantity: quantity ,customerId :Auth_Test_Customer.customerId ,pickedColor:color}))
  }
}
