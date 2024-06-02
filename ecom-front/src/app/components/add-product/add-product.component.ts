import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable, Subscription} from "rxjs";
import {CreatedProduct, Product, ProductsCategory} from "../../models/product.model";
import {Store} from "@ngrx/store";
import {GetProductItemAction, SaveProductAction} from "../../ngrx/Product-item-State/productItem.actions";
import {Color, Currency} from "../../models/common.model";
import {ProductItemState} from "../../ngrx/Product-item-State/productItem.reducers";
import {DataStateEnum} from "../../ngrx/productsState/products.reducer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  addProductFormGroup!: FormGroup ;
  categories : string[] =  Object.values(ProductsCategory).map((val) => String(val));
  colors : string[] =  Object.values(Color).map((val) => String(val));
  currencies : string[] =  Object.values(Currency).map((val) => String(val));
  submitted:boolean = false ;
  savedProduct! : ProductItemState
  constructor(private fb : FormBuilder , private store : Store<any> , private router: Router) {
  }
  ngOnInit(): void {

    this.addProductFormGroup=this.fb.group({
      productName : ['' , Validators.required],
      productImage1 : [null , Validators.required],
      productImage2 : [null , Validators.required],
      productImage3 : [null , Validators.required],
      productBrand : ["" , Validators.required],
      productPrice : ["" , Validators.required],
      productCurrency : ["" , Validators.required],
      productColors : [[] , Validators.required],
      productQuantity : [0 , Validators.required],
      productSelected : [false , Validators.required],
      productDescription : ["" , Validators.required],
      productHeight: [0,  Validators.required],
      productWidth: [0,  Validators.required],
      productLarger: [0 , Validators.required],
      productWeight: [0 , Validators.required],
      productCategory : ["" , Validators.required]
    })

    let confirmationShown = false;
    this.store.subscribe(

      s => {
        if(s.productItemState.dataState == DataStateEnum.LOADED)
          this.savedProduct = s.productItemState
        if(this.savedProduct && this.savedProduct.product  && !confirmationShown){
          console.log(this.savedProduct.product?.productId) ;
          confirmationShown = true;
          let confirmation : boolean = confirm("product of name " + this.savedProduct.product.name + " has been created succesfuly " +
            "confirm to go to see product details");
          if(confirmation == true )
          {
            this.router.navigateByUrl("/product-details") ;
            this.store.dispatch(new GetProductItemAction(this.savedProduct.product)) ;
          }
        }

      }
    )

     }

  addProduct() {
    this.submitted = true ;
    if(this.addProductFormGroup.invalid) return ;
    let product: CreatedProduct ={
      name : this.addProductFormGroup.get("productName")?.value ,
      quantity: this.addProductFormGroup.get("productQuantity")?.value ,
      category: this.addProductFormGroup.get("productCategory")?.value ,
      description: this.addProductFormGroup.get("productDescription")?.value ,
      productPrice : {price :this.addProductFormGroup.get("productPrice")?.value ,
        currency:this.addProductFormGroup.get("productCurrency")?.value ,
      symbol: "MAD" } ,
      productImagesBas64: [
        this.addProductFormGroup.get("productImage1")?.value ,
        this.addProductFormGroup.get("productImage2")?.value ,
        this.addProductFormGroup.get("productImage3")?.value
      ] ,
      colors: this.addProductFormGroup.get("productColors")?.value ,
      brand : this.addProductFormGroup.get("productBrand")?.value ,
      selected : this.addProductFormGroup.get("productSelected")?.value ,
      status : "AVAILABLE" ,
      dimension : {
        height :this.addProductFormGroup.get("productHeight")?.value ,
        weight :this.addProductFormGroup.get("productWeight")?.value ,
        larger :this.addProductFormGroup.get("productLarger")?.value ,
        width:this.addProductFormGroup.get("productWidth")?.value
      } ,
    }
    this.store.dispatch(new SaveProductAction(product)) ;

  }

  onFileSelected(event: any , imageNum: number) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onloadend = () => {
      const base64String: string = reader.result as string;
      switch (imageNum){
        case 1:
          this.addProductFormGroup.patchValue({
            productImage1: base64String
          });
          break;
        case 2:
          this.addProductFormGroup.patchValue({
            productImage2: base64String,
          });
          break;
        case 3:
          this.addProductFormGroup.patchValue({
            productImage3: base64String
          });
          break;
      }

    };
    reader.readAsDataURL(file);
    event.target.value = ''
  }

}
