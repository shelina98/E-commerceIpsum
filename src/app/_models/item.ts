import { Product } from "./product";

export class itemsOfShoppingCart {
  product!:Product;
  quantity!: number
  constructor()  {}

  get totalPrice()

    {
      return this.product.price * this.quantity;
    }
  }
