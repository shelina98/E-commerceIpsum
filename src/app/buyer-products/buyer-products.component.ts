import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../_models/product";
import {Subscription} from "rxjs";
import {ProductService} from "../_services/product.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-buyer-products',
  templateUrl: './buyer-products.component.html',
  styleUrls: ['./buyer-products.component.css']
})
export class BuyerProductsComponent implements OnInit, OnDestroy {

  products: Product[] = []
  productObservable: Subscription = new Subscription;


  private imgUrl: any;

  constructor(private productSer: ProductService,
              private route: Router,) { }


   ngOnInit() {
     this.productObservable = this.productSer.getProducts().subscribe(data => {
       this.products = data
     })


   }

  ngOnDestroy(): void {
    this.productObservable.unsubscribe()
  }

  // addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  //   }


}
