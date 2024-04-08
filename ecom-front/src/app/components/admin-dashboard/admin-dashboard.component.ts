import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {EmptyProductItemAction} from "../../ngrx/Product-item-State/productItem.actions";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  constructor(private router : Router, private store : Store<any>) {
  }
  onAddProduct() {
    this.store.dispatch(new EmptyProductItemAction({}))
    this.router.navigateByUrl("/addProduct")
  }
}
