import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    products: Product[] = [];
  selectedProduct!: Product | null;

  addProduct(product: Product) {
    this.products.push(product);
  }

  viewProduct(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    if (this.selectedProduct?.id === id) {
      this.selectedProduct = null;
    }
  }
}
