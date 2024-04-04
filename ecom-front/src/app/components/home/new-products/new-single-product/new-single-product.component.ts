import {Component, Input} from '@angular/core';
import {Product} from "../../../../models/product.model";

@Component({
  selector: 'app-new-single-product',
  templateUrl: './new-single-product.component.html',
  styleUrls: ['./new-single-product.component.css']
})
export class NewSingleProductComponent {
  @Input() newProduct! : Product
}
