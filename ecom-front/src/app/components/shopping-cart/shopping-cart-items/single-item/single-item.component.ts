import {Component, Input} from '@angular/core';
import {ShoppingCart, ShoppingCartItem} from "../../../../models/ShoppingCart";
import {Product} from "../../../../models/product.model";

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent {
    @Input() item?:ShoppingCartItem ;
}
