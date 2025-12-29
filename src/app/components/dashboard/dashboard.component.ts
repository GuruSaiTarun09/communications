import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
products: any[] = [];

selectedName: string = '';
selectedPrice: any;
selectedRating: any;
selectedImage: string = '';

selectedProduct: any = null;

onGetFormData(data: any) {
  this.selectedName = data.name;
  this.selectedPrice = data.price;
  this.selectedRating = data.rating;
  this.selectedImage = data.image;
}

onCreateProduct(product: any) {
  this.products.push(product);
}

onView(product: any) {
  this.selectedProduct = product;
}

onDelete(i: number) {
  this.products.splice(i, 1);
}
}
