import { Injectable } from '@angular/core';
import {Product} from "../_models/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product: Product) {
    console.log(product)
  }
}
