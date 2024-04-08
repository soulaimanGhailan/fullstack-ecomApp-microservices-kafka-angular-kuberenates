import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreatedProduct, ProductsCategory} from "../../models/product.model";
import {Color, Currency} from "../../models/common.model";
import {Store} from "@ngrx/store";
import {DataStateEnum, ProductState} from "../../ngrx/productsState/products.reducer";
import {map, Observable} from "rxjs";
import {ProductItemState} from "../../ngrx/Product-item-State/productItem.reducers";
import {SaveProductAction} from "../../ngrx/Product-item-State/productItem.actions";

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
  constructor(private store : Store<any> , private fb : FormBuilder) {
  }

  ngOnInit(): void {
    this.store.subscribe(
      s => {
          this.productState=s.productItemState ;
          if(s.productItemState.dataState == this.dataState.EDIT){
            console.log(s.productItemState)
            this.editProductFormGroup=this.fb.group({
              productName : [s.productItemState.product.name , Validators.required],
              productImage1 : [null , Validators.required],
              productImage2 : [null , Validators.required],
              productImage3 : [null , Validators.required],
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

  }

  editProduct() {
    this.submitted = true ;
    if(this.editProductFormGroup.invalid) return ;
    let product: CreatedProduct ={
      productId: this.productState?.product?.productId ,
      name : this.editProductFormGroup.get("productName")?.value ,
      category: this.editProductFormGroup.get("productCategory")?.value ,
      description: this.editProductFormGroup.get("productDescription")?.value ,
      productPrice : {price :this.editProductFormGroup.get("productPrice")?.value ,
        currency:this.editProductFormGroup.get("productCurrency")?.value ,
        symbol: "MAD" } ,
      productImagesBas64: [
        this.editProductFormGroup.get("productImage1")?.value ,
        this.editProductFormGroup.get("productImage2")?.value ,
        this.editProductFormGroup.get("productImage3")?.value
      ] ,
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
    this.store.dispatch(new SaveProductAction(product)) ;
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
