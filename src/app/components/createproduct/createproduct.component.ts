import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent {
 @Output() newProduct = new EventEmitter<any>();

  name:string='';
  price:number=0;
  rating:number=0;
  image:string='';

  create(){
    const p = {
      name: this.name,
      price: this.price,
      rating: this.rating,
      image: this.image
    };
    this.newProduct.emit(p); // send data to parent
    alert("Product Added!");
  }
}
