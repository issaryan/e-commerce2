import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <h2>Our Products</h2>
    <div class="product-grid">
      <div *ngFor="let product of products" class="product-card">
        <img [src]="product.image" [alt]="product.name">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price | currency }}</p>
        <button (click)="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  `,
  styles: [`
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    .product-card {
      border: 1px solid #ddd;
      padding: 1rem;
      text-align: center;
    }
    img {
      max-width: 100%;
      height: 200px;
      object-fit: cover;
    }
    button {
      background: #333;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  `]
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      image: 'https://via.placeholder.com/300'
    }
  ];

  addToCart(product: any) {
    // Add to cart logic
  }
}
