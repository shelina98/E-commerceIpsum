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
        id: 2,
        title: 'Cabbage',
        description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
        price: '$80',
        amount:10,
        rating:2,
        imgUrl:"assets/product/cabbage.png"
      },
      {
        id: 1,
        title: 'Broccoli',
        description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
        price: '$40',
        amount:10,
        rating:1,
        imgUrl:"assets/product/broccoli.png"
      },
      {
        id: 3,
        title: 'Onion',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '$30',
        amount:10,
        rating:3,
        imgUrl:"assets/product/onion.png"
      },
      {
        id: 4,
        title: 'Olives',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '$30',
        amount:10,
        rating: 4,
        imgUrl:"assets/product/olives.png"
      },
      {
        id: 5,
        title: 'Olive Oil',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '$30',
        amount:10,
        rating: 4,
        imgUrl:"assets/product/olive-oil.png"
      },
      {
        id: 6,
        title: 'Carrot',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '$30',
        amount:10,
        rating: 4,
        imgUrl:"assets/product/carrot .png"
      },
      {
        id: 7,
        title: 'Chilli Pepper',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '$30',
        amount:10,
        rating: 4,
        imgUrl:"assets/product/chilli-pepper.png"
      },
      {
        id: 8,
        title: 'Eggplant',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '$30',
        amount:10,
        rating: 4,
        imgUrl:"assets/product/eggplant.png"
      }
    ];
    return { products };
  }
}
