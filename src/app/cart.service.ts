import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor(
    private http: HttpClient
  ) { }
}
