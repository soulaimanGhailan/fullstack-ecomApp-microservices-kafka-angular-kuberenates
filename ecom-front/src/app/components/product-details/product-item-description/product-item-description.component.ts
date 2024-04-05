import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-product-item-description',
  templateUrl: './product-item-description.component.html',
  styleUrls: ['./product-item-description.component.css']
})
export class ProductItemDescriptionComponent implements OnInit{
  ngOnInit(): void {
      console.log(this.product)
  }
  @Input() product: Product|null =null;
}
