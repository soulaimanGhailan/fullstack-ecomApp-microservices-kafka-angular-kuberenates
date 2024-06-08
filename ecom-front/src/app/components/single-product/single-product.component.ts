import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {GetProductItemAction} from "../../ngrx/Product-item-State/productItem.actions";
import {AddProductToCartAction} from "../../ngrx/ShoppingCartState/cart.actions";
import {AddItemRequest} from "../../models/ShoppingCart";
import {environment} from "../../../environments/environment";
import {ProductService} from "../../services/productService/product.service";
import {SecurityService} from "../../security/security.service";
import {GetProductsPageAction} from "../../ngrx/productsState/product.actions";


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{
  @Input() product!: Product ;
  constructor(private store : Store<any>, private router: Router ,
              private productService: ProductService , public secService: SecurityService) {

  }
  ngOnInit(): void {

  }

  onProductItem() {
    this.store.dispatch(new GetProductItemAction(this.product)) ;
    this.router.navigateByUrl("/product-details") ;
  }

  addProductToCart() {
     if( this.secService.profile){
       if(this.secService.profile.id){
         let itemReq : AddItemRequest = {productId: this.product.productId  ,customerId : this.secService.profile.id  }
         this.store.dispatch(new AddProductToCartAction(itemReq))
       }

     }else {
       this.secService.login() ;
     }
  }

  deleteProduct() {
    let confirmation : boolean = confirm("you sure you want to delete the product * "+ this.product.name + " *")
    if(confirmation == true){
      this.productService.deleteProduct(this.product.productId).subscribe({
        next : value => {
          this.router.navigateByUrl("/home")  ;
        }
      }) ;
    }
  }
}
