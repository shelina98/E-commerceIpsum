import { Injectable } from '@angular/core';
import {Product} from "../_models/product";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { ShoppingCart } from '../_models/cart';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  carts =  [
   {
   items: [ {
    product:{
      uid: 2,
      title: 'Cabbage',
      description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
      price: 80,
      amount:10,
      rating:2,
      imgUrl:"assets/product/cabbage.png"
    },
    quantity:3,
    get totalPrice() {
      return this.product.price * this.quantity
    }
   },

   {
    product:{
      uid: 1,
      title: 'Broccoli',
      description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
      price: 40,
      amount:10,
      rating:1,
      imgUrl:"assets/product/broccoli.png"
    },
    quantity:2,
    get totalPrice() {
      return this.product.price * this.quantity
    }
   }],
    userId:2
   },
  ]

  cartOfUser!: ShoppingCart
  constructor(private  http: HttpClient,private snackBar: MatSnackBar) { }


  getCart(userId: number) {
    this.carts.forEach(ele => {
      if(ele.userId = userId){
        this.cartOfUser = ele
      }
    })
   return this.cartOfUser
  }

  
  addToCart(product: Product) {
    this.getCart(2)
    let add: boolean = true;
    this.cartOfUser.items.forEach(
      ele => {
        if(ele.product.uid == product.uid) {
         add =  false;
        } 
      })

    if(add == true) {
      this.cartOfUser.items.push({product:product, quantity:1, get totalPrice()
        {
          return this.product.price * this.quantity;
        }})

      this.snackBar.open('You have added this item to cart.', 'OK', {
          duration: 2000,
          panelClass: ['blue-snackbar', 'edit-snackbar'],
        })
    }
    else {
      this.snackBar.open('You have already added this item to cart.', 'OK', {
        duration: 2000,
        panelClass: ['blue-snackbar', 'edit-snackbar'],
      })
    }
  }

  async clearCart() {

    
      
    }

}
