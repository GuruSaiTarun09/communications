import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent {
 @Output() sendProduct = new EventEmitter<any>();

  name: string = "";
  price: any;
  rating: any;
  image: string = "";

  sendData() {
    const data = {
      name: this.name,
      price: this.price,
      rating: this.rating,
      image: this.image
    };
    this.sendProduct.emit(data);
  }
  }
