import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <h2>Your Cart</h2>
    <div *ngFor="let item of cartItems" class="cart-item">
      <h3>{{ item.name }}</h3>
      <p>{{ item.price | currency }}</p>
      <button (click)="removeFromCart(item)">Remove</button>
    </div>
    <p>Total: {{ total | currency }}</p>
  `,
  styles: [`
    .cart-item {
      border-bottom: 1px solid #ddd;
      padding: 1rem 0;
    }
    button {
      background: #ff4444;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  `]
})
export class CartComponent {
  cartItems = [];
  total = 0;

  removeFromCart(item: any) {
    // Remove from cart logic
  }
}
