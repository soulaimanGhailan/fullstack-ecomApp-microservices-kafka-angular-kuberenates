import { Component } from '@angular/core';
import {ProductsCategory} from "../../../models/product.model";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories : string[] =  Object.values(ProductsCategory).map((color) => String(color));
}
