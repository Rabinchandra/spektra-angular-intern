import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../../../Cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: Cart[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    const data = localStorage.getItem('cart');

    if (data) {
      this.cart = JSON.parse(data);
    }
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to remove??')) {
      const updatedData = this.cartService.removeFromCart(id);
      this.cart = updatedData;
    }
  }
}
