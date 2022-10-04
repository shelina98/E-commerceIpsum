import { Component, OnInit } from '@angular/core';
import {CartService} from "../_services/cart.service";
import {Observable} from "rxjs";
import {Title} from "@angular/platform-browser";
import {Product} from "../_models/product";

export  class itemsOfShoppingCart {
  product!: Product;
  quantity!: number;
  constructor(product: Product, quantity:number) {
  }
  get totalPrice() {
    return this.product.price * this.quantity;
  }
}

export class ShoppingCart {
  items: itemsOfShoppingCart[] = [];
  userId: number = 0;

  constructor(item: itemsOfShoppingCart[], userId: number) {
  }
  getQuantity(product: Product): number{
    let quant = 0;
    this.items?.forEach(element => {
      if (element.product.uid === product.uid) {
        quant = element.quantity;
      }
    });
    return quant;
  }

  public totalPrice() {
    let sum = 0;
    this.items?.forEach(element => {
      sum += element.product.price
   })
    return sum;
  }

  get totalItemsCount() {
    let count = 0;
    this.items?.forEach(element => {
        count += element.quantity;
    })

    return count;
  }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cart$!: Observable<ShoppingCart[]>;
  show!: boolean;

  constructor(private cartService: CartService,
              private title: Title) { }

  async ngOnInit() {
    this.title.setTitle("Cart");
    this.cart$ = this.cartService.getCart();
    this.cart$.subscribe( cart => {
      this.show = !!cart[0].items.length

    })
  }

  clearCart() {
    this.cartService.clearCart()
  }

  deleteItem(product: Product) {

  }
}
