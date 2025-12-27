import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   products:any[] = [];
  selectedProduct:any = null;
image: any;
name: any;
price: any;
rating: number | undefined;

  addProduct(prod:any){
    this.products.push(prod);
  }

  deleteProduct(index:number){
    this.products.splice(index,1);
  }

  viewProduct(prod:any){
    this.selectedProduct = prod;
  }
}
