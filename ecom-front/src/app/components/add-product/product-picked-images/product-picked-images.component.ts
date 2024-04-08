import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ProductItemState} from "../../../ngrx/Product-item-State/productItem.reducers";

@Component({
  selector: 'app-product-picked-images',
  templateUrl: './product-picked-images.component.html',
  styleUrls: ['./product-picked-images.component.css']
})
export class ProductPickedImagesComponent implements OnInit{
  @Input() productImage1? : string ;
  @Input() productImage2? : string ;
  @Input() productImage3? : string ;
  @Input() productName?: string;
  productState! : ProductItemState
  constructor(private store : Store<any>) {
    this.store.subscribe(
      state =>  {
        this.productState = state.productItemState
      }
    )
  }
  ngOnInit(): void {
  }

}
