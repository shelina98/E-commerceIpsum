import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../_models/product";
import {CartService} from "../_services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  dataSource!: MatTableDataSource<Product>;
  displayedColumns: string[] = ['Title','Price','Quantity','Total', 'Options'];

  constructor(
    private cartService: CartService,

  ) {
    this.getCart()
  }

  ngOnInit() {
  }

  getCart() {
    this.cartService.getCart().subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res)
      })
  }

  clear() {

  }
  buy() {

  }

}
