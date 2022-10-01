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
        id: 1,
        title: 'Seaman Cap',
        description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
        price: '$40',
        amount:10,
        imgUrl:"assets/logo.jpeg"
      },
      {
        id: 2,
        title: 'T-shirt',
        description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
        price: '$80',
        amount:10,
        imgUrl:"assets/logo.jpeg"
      },
      {
        id: 3,
        title: 'Back Pack',
        description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        price: '$30',
        amount:10,
        imgUrl:"assets/logo.jpeg"
      }
    ];
    return { products };
  }
}
