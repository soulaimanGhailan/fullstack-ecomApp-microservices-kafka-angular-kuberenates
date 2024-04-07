import {Component, Input} from '@angular/core';
import {} from "../../../models/product.model";
import {FetchMethode} from "../../../ngrx/productsState/products.reducer";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {
  GetProductsPageByCategoryAction,
  GetProductsPageByKeyWordAction
} from "../../../ngrx/productsState/product.actions";
import {PageInfo} from "../../../models/common.model";

@Component({
  selector: 'app-paggination',
  templateUrl: './paggination.component.html',
  styleUrls: ['./paggination.component.css']
})
export class PagginationComponent {
    @Input() pageInfo? : PageInfo ;
    @Input() fetchMethode? : FetchMethode ;
    @Input() payload!: string;

    constructor(private router: Router , private store: Store) {
    }
 // check the fetch methode to continue the pagination in the same context
  onPageHandle(index: number) {
    switch (this.fetchMethode){
      case FetchMethode.SEARCH_BY_KEYWORD :
        this.store.dispatch(new GetProductsPageByKeyWordAction({pageSize:{page:index , size:6 } , data:this.payload}))
        break ;
      case FetchMethode.SEARCH_BY_CATEGORY :
        this.store.dispatch(new GetProductsPageByCategoryAction({pageSize:{page:index , size:6 } , data:this.payload}))
        break ;
      default: this.router.navigateByUrl("/home") ; break;
    }
  }

  nextPage() {
      if(this.pageInfo && this.pageInfo.number<this.pageInfo.totalPages - 1){
        console.log("ok")

         this.onPageHandle( this.pageInfo?.number+ 1)
      }
  }

  previousPage() {
    if(this.pageInfo && this.pageInfo.number>0){
      console.log("ok")
      this.onPageHandle( this.pageInfo?.number - 1)
    }
  }
}
