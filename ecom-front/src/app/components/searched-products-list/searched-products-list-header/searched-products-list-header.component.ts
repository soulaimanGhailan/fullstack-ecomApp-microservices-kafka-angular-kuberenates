import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-searched-products-list-header',
  templateUrl: './searched-products-list-header.component.html',
  styleUrls: ['./searched-products-list-header.component.css']
})
export class SearchedProductsListHeaderComponent {
   @Input() productsNumber!: number ;
}
