import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>My E-commerce</h1>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/products">Products</a>
        <a routerLink="/cart">Cart</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <p>&copy; 2024 My E-commerce</p>
    </footer>
  `,
  styles: [`
    header {
      background: #333;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    nav a {
      color: white;
      margin: 0 1rem;
      text-decoration: none;
    }
    main {
      padding: 2rem;
    }
    footer {
      background: #333;
      color: white;
      text-align: center;
      padding: 1rem;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  `]
})
export class AppComponent {}
