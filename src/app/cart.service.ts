import { Injectable } from '@angular/core';
import { IProduct } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];
  constructor(private http: HttpClient) {}

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

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
