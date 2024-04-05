import {Component, Input} from '@angular/core';
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() product: Product|null =null;

}
