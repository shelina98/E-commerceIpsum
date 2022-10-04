//src/app/data.services.ts

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const products = [
      {
        uid: 2,
        title: 'Cabbage',
        description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
        price: '80',
        amount:10,
        rating:2,
        imgUrl:"assets/product/cabbage.png"
      },
      {
        uid: 1,
        title: 'Broccoli',
        description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
        price: '40',
        amount:10,
        rating:1,
        imgUrl:"assets/product/broccoli.png"
      },
      {
        uid: 3,
        title: 'Onion',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '30',
        amount:10,
        rating:3,
        imgUrl:"assets/product/onion.png"
      },
      {
        uid: 4,
        title: 'Olives',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '30',
        amount:10,
        rating: 4,
        imgUrl:"assets/product/olives.png"
      },
      {
        uid: 5,
        title: 'Olive Oil',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '30',
        amount:10,
        rating: 4,
        imgUrl:"assets/product/olive-oil.png"
      },
      {
        uid: 6,
        title: 'Carrot',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '30',
        amount:10,
        rating: 4,
        imgUrl:"assets/product/carrot .png"
      },
      {
        uid: 7,
        title: 'Chilli Pepper',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '30',
        amount:10,
        rating: 4,
        imgUrl:"assets/product/chilli-pepper.png"
      },
      {
        uid: 8,
        title: 'Eggplant',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '30',
        amount:10,
        rating: 4,
        imgUrl:"assets/product/eggplant.png"
      },
    ];
    return { products,};
  }
  // createDb() {
  //   const carts = [{
  //     userId:2,
  //     items:[
  //       {
  //         product: { id: 2,
  //         title: 'Cabbage',
  //         description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
  //         price: 80,
  //         amount:10,
  //         rating:2,
  //         imgUrl:"assets/product/cabbage.png"},
  //         quantity:1
  //     },
  //       {
  //         product:  {
  //           id: 1,
  //           title: 'Broccoli',
  //           description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
  //           price: 40,
  //           amount:10,
  //           rating:1,
  //           imgUrl:"assets/product/broccoli.png"
  //         },
  //         quantity: 3
  //       }
  //      ,]
  //   }];
  //   return {carts};
  // }
}
