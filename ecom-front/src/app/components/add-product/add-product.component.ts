import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {CreatedProduct, Product, ProductsCategory} from "../../models/product.model";
import {Store} from "@ngrx/store";
import {SaveProductAction} from "../../ngrx/Product-item-State/productItem.actions";
import {Color, Currency} from "../../models/common.model";

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
  submitted:boolean = false
  constructor(private fb : FormBuilder , private store : Store<any>) {
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
      productSelected : [false , Validators.required],
      productDescription : ["" , Validators.required],
      productHeight: [0,  Validators.required],
      productWidth: [0,  Validators.required],
      productLarger: [0 , Validators.required],
      productWeight: [0 , Validators.required],
      productCategory : ["" , Validators.required]
    })


     }

  addProduct() {
    this.submitted = true ;
    if(this.addProductFormGroup.invalid) return ;
    let product: CreatedProduct ={
      name : this.addProductFormGroup.get("productName")?.value ,
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
