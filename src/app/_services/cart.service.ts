import { Injectable } from '@angular/core';
import {Product} from "../_models/product";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ShoppingCart} from "../cart/cart.component";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = 'api/carts/';
  constructor(private  http: HttpClient) { }

  addToCart(product: Product) {
    console.log(product)
  }

  getCart(): Observable<ShoppingCart[]> {
    return this.http.get<ShoppingCart[]>(this.cartUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }


  async clearCart() {
      // const cartId = await this.getOrCreateCartId();
      //
      // this.fs.collection('cart').doc(cartId).
      // collection('items').snapshotChanges()
      //   .pipe(take(1))
      //   .subscribe(products => {
      //     products.map(productItem =>
      //       this.fs.collection('cart').doc(cartId)
      //         .collection('items').doc(productItem.payload.doc.id).delete()
      //     );
      //   });
    }


}
