import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ProductsCategory} from "../../models/product.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories : string[] =  Object.values(ProductsCategory).map((color) => String(color));
  constructor(private router : Router) {
  }

  onHome() {
    this.router.navigateByUrl("home")
  }

  onContact() {
    this.router.navigateByUrl("contact")
  }
}
