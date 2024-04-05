import {Component, Input} from '@angular/core';
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-selected-new-products',
  templateUrl: './selected-new-products.component.html',
  styleUrls: ['./selected-new-products.component.css']
})
export class SelectedNewProductsComponent {
  @Input() newProducts: Product[] | null = null
}
