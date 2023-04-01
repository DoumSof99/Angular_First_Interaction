import { Injectable } from '@angular/core';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];
  constructor() {}

  addTocart(productItem: IProduct) {
    this.items.push(productItem);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
