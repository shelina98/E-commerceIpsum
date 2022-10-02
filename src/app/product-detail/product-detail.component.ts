import {Component, Inject,} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Product} from "../_models/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  rating;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {
   this.rating = data.rating
  }
}

