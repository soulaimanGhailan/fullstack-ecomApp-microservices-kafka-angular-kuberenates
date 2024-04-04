import {Component, Input} from '@angular/core';
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent {
   @Input() newProducts: Product[] | null = null

}
