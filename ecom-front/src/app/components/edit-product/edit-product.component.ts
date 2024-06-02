import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreatedProduct, ProductsCategory} from "../../models/product.model";
import {Color, Currency} from "../../models/common.model";
import {Store} from "@ngrx/store";
import {DataStateEnum, ProductState} from "../../ngrx/productsState/products.reducer";
import {map, Observable} from "rxjs";
import {ProductItemState} from "../../ngrx/Product-item-State/productItem.reducers";
import {EditProductAction, GetProductItemAction} from "../../ngrx/Product-item-State/productItem.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  productState : ProductItemState | null = null
  editProductFormGroup!: FormGroup ;
  categories : string[] =  Object.values(ProductsCategory).map((val) => String(val));
  colors : string[] =  Object.values(Color).map((val) => String(val));
  currencies : string[] =  Object.values(Currency).map((val) => String(val));
  submitted:boolean = false
  public dataState = DataStateEnum ;
  editedProduct! : ProductItemState ;
  productImages!: string[]

  constructor(private store : Store<any> , private fb : FormBuilder , private router : Router) {
  }

  ngOnInit(): void {
    this.store.subscribe(
      s => {
          this.productState=s.productItemState ;
          if(s.productItemState.dataState == this.dataState.LOADED){
            this.productImages = s.productItemState.product.productImagesBas64 ;
            this.editProductFormGroup=this.fb.group({
              productName : [s.productItemState.product.name , Validators.required],
              productQuantity : [s.productItemState.product.quantity , Validators.required],
              productImage1 : [null],
              productImage2 : [null],
              productImage3 : [null],
              productBrand : [s.productItemState.product.brand , Validators.required],
              productPrice : [s.productItemState.product.productPrice.price , Validators.required],
              productCurrency : [s.productItemState.product.productPrice.currency , Validators.required],
              productColors : [s.productItemState.product.colors , Validators.required],
              productSelected : [s.productItemState.product.selected , Validators.required],
              productDescription : [s.productItemState.product.description , Validators.required],
              productHeight: [s.productItemState.product.dimension.height,  Validators.required],
              productWidth: [s.productItemState.product.dimension.width,  Validators.required],
              productLarger: [s.productItemState.product.dimension.larger , Validators.required],
              productWeight: [s.productItemState.product.dimension.weight, Validators.required],
              productCategory : [s.productItemState.product.category, Validators.required]
            })
          }
      }
    )


    let confirmationShown = false;
    this.store.subscribe(
      s => {
        if(s.productItemState.dataState == DataStateEnum.EDITED)
          this.editedProduct = s.productItemState
        if(this.editedProduct && this.editedProduct.product  && !confirmationShown){
          console.log(this.editedProduct.product?.productId) ;
          confirmationShown = true;
          let confirmation : boolean = confirm("product of name " + this.editedProduct.product.name + " has been created edited " +
            "confirm to go to see product details");
          if(confirmation == true )
          {
            this.router.navigateByUrl("/product-details") ;
            this.store.dispatch(new GetProductItemAction(this.editedProduct.product)) ;
          }
        }

      }
    )
  }

  editProduct() {
    this.submitted = true ;

    if(this.editProductFormGroup.invalid) return ;

    let selectedImage: string[] = []
    for (let i = 1; i < 4; i++) {
      const controlName = `productImage${i}` ;
        if(this.editProductFormGroup.get(controlName)?.value){
          selectedImage.push(this.editProductFormGroup.get(controlName)?.value)
        }
        else
          selectedImage.push(this.productImages[i-1])
    }

    let product: CreatedProduct ={
      productId: this.productState?.product?.productId ,
      name : this.editProductFormGroup.get("productName")?.value ,
      quantity : this.editProductFormGroup.get("productQuantity")?.value ,
      category: this.editProductFormGroup.get("productCategory")?.value ,
      description: this.editProductFormGroup.get("productDescription")?.value ,
      productPrice : {price :this.editProductFormGroup.get("productPrice")?.value ,
        currency:this.editProductFormGroup.get("productCurrency")?.value ,
        symbol: "MAD" } ,
      productImagesBas64: selectedImage,
      colors: this.editProductFormGroup.get("productColors")?.value ,
      brand : this.editProductFormGroup.get("productBrand")?.value ,
      selected : this.editProductFormGroup.get("productSelected")?.value ,
      status : "AVAILABLE" ,
      dimension : {
        height :this.editProductFormGroup.get("productHeight")?.value ,
        weight :this.editProductFormGroup.get("productWeight")?.value ,
        larger :this.editProductFormGroup.get("productLarger")?.value ,
        width:this.editProductFormGroup.get("productWidth")?.value
      } ,
    }
    this.store.dispatch(new EditProductAction(product)) ;
  }

  onFileSelected(event: any , imageNum: number) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onloadend = () => {
      const base64String: string = reader.result as string;
      switch (imageNum){
        case 1:
          this.editProductFormGroup.patchValue({
            productImage1: base64String
          });
          break;
        case 2:
          this.editProductFormGroup.patchValue({
            productImage2: base64String,
          });
          break;
        case 3:
          this.editProductFormGroup.patchValue({
            productImage3: base64String
          });
          break;
      }

    };
    reader.readAsDataURL(file);
    event.target.value = ''
  }



}
