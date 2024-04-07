import {Component, Input} from '@angular/core';
import {Product} from "../../../models/product.model";
import {ProductService} from "../../../services/productService/product.service";

@Component({
  selector: 'app-product-item-addetional-info',
  templateUrl: './product-item-addetional-info.component.html',
  styleUrls: ['./product-item-addetional-info.component.css']
})
export class ProductItemAddetionalInfoComponent {
  @Input() product: Product|null =null;
  constructor(public productService: ProductService) {
  }
}
