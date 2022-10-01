import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../_models/product";
import {Subscription} from "rxjs";
import {ProductService} from "../_services/product.service";
import {Router} from "@angular/router";
import {AuthService} from "../_services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {take} from "rxjs/operators";



@Component({
  selector: 'app-buyer-products',
  templateUrl: './buyer-products.component.html',
  styleUrls: ['./buyer-products.component.css']
})
export class BuyerProductsComponent implements OnInit, OnDestroy {

  products: Product[] = []
  productObservable: Subscription = new Subscription;

  constructor(private productSer: ProductService,
              private route: Router,
              private auth: AuthService,
              private snackBar: MatSnackBar) { }


   ngOnInit() {
     this.productObservable = this.productSer.getProducts().subscribe(data => {
       this.products = data
     })
   }

  ngOnDestroy(): void {
    this.productObservable.unsubscribe()
  }

  addToCart(product: Product) {
    // this.cartService.addToCart(product);
    console.log('a hyn ktu ti')
    debugger
    this.auth.isLoggedInOb().pipe(take(1)).subscribe(
      res => {
        if (res) {
          console.log('item added to cart')
        } else {
          console.log('not added')
          this.snackBar.open('You have to login to add items to cart.', 'OK', {
            duration: 2000,
            panelClass: ['blue-snackbar', 'cart-snackbar'],
          })
        }
      }
    )


  }

  viewDetails(product: Product) {

  }

}
