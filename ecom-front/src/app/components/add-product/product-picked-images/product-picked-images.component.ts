import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-picked-images',
  templateUrl: './product-picked-images.component.html',
  styleUrls: ['./product-picked-images.component.css']
})
export class ProductPickedImagesComponent {
  @Input() productImage1? : string ;
  @Input() productImage2? : string ;
  @Input() productImage3? : string ;
  @Input() productName?: string;
}
