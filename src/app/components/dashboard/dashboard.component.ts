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
 productList:any[] = [];
  selectedProduct:any = null;

  addProduct(p:any){
    this.productList.push(p);
  }

  viewProduct(p:any){
    this.selectedProduct = p;
  }

  deleteProduct(index:number){
    this.productList.splice(index,1);
  }
}
