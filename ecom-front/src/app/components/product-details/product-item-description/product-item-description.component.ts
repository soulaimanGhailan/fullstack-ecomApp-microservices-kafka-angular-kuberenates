import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AddProductToCartAction} from "../../../ngrx/ShoppingCartState/cart.actions";
import {AddItemRequest} from "../../../models/ShoppingCart";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {EditProductAction, GetProductItemAction} from "../../../ngrx/Product-item-State/productItem.actions";
import {environment} from "../../../../environments/environment";
import {SecurityService} from "../../../security/security.service";

@Component({
  selector: 'app-product-item-description',
  templateUrl: './product-item-description.component.html',
  styleUrls: ['./product-item-description.component.css']
})
export class ProductItemDescriptionComponent implements OnInit{
  @Input() product: Product|null =null;
  addProductFrom!: FormGroup ;
  constructor(private fb:FormBuilder , private store: Store<any> , private router: Router
              , public secService : SecurityService) {
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
    if(this.secService.profile){
      if(this.secService.profile.id)
        this.store.dispatch(new AddProductToCartAction({productId :this.product?.productId , quantity: quantity ,customerId :this.secService.profile.id ,pickedColor:color  }))

    }else{
      this.secService.login()
    }
      }

  onEditProduct() {
    if(this.product){
      this.store.dispatch(new GetProductItemAction(this.product))
      this.router.navigateByUrl("/edit-product");
    }

  }
}
