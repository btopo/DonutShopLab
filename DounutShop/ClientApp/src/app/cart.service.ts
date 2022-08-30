import { Injectable } from '@angular/core';
import { Details,  } from './donut.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Details[] = [];
  constructor() { }

  addToCart(details: Details) {
    this.items.push(details);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
