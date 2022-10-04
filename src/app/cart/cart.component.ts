import { Component, OnInit } from '@angular/core';
import {CartService} from "../_services/cart.service";
import {Title} from "@angular/platform-browser";
import {Product} from "../_models/product";
import { ShoppingCart } from '../_models/cart';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { itemsOfShoppingCart } from '../_models/item';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  
  show!: boolean;
  cart!:ShoppingCart;
  dataSource!: MatTableDataSource<itemsOfShoppingCart>;


  constructor(private cartService: CartService,
              private title: Title,
              private snackBar: MatSnackBar,
              private rt: Router) { }

  ngOnInit() {
    this.title.setTitle("Cart");
    this.cart = this.cartService.getCart(2);

    if(this.cart.items.length ){
      this.show = !!this.cart.items.length
    }

    this.dataSource = new MatTableDataSource(this.cart.items)
  }

  displayedColumns = ['Title', 'Price', 'Quantity','Total'];

  getTotalCost() {
    return this.cart.items.map(t => t.totalPrice).reduce((acc, value) => acc + value, 0);
  }

  clearCart() {
    this.cart.items = []
    this.dataSource = new MatTableDataSource(this.cart.items)
  }

  purchase() {
    this.clearCart()
     this.snackBar.open('You purchased your items.', 'OK', {
      duration: 5000,
      panelClass: ['blue-snackbar', 'edit-snackbar'],
    })
    this.rt.navigate(['/dashboard'])
  }
  
  deleteItem(product: Product) {

  }

}
