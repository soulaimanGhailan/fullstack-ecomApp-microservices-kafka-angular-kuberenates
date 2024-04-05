import {Component, Input} from '@angular/core';
import {Product} from "../../../../models/product.model";

@Component({
  selector: 'app-selected-product-item',
  templateUrl: './selected-product-item.component.html',
  styleUrls: ['./selected-product-item.component.css']
})
export class SelectedProductItemComponent {
  @Input() newProduct! : Product
}
