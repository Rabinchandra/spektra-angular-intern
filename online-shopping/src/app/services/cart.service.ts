import { Injectable } from '@angular/core';
import { Cart } from '../../../Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart[] = [];

  constructor() {
    // Get data from localStorage
    const data = localStorage.getItem('cart');

    if (data) {
      this.cart = JSON.parse(data);
    }
  }

  getCart() {
    return this.cart;
  }

  addToCart(prod: any) {
    this.cart.push(prod);
    // Saving to localStorage
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(id: string): Cart[] {
    console.log('removal', id);
    this.cart = this.cart.filter((p) => p.id !== id);
    // Saving to local storage
    localStorage.setItem('cart', JSON.stringify(this.cart));
    return this.cart;
  }
}
