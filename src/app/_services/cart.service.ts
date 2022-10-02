import { Injectable } from '@angular/core';
import {Product} from "../_models/product";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsUrl = 'api/products/';
  constructor(private  http: HttpClient) { }

  addToCart(product: Product) {
    console.log(product)
  }

  getCart(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
