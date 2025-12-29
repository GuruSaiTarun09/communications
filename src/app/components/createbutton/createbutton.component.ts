import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-createbutton',
  templateUrl: './createbutton.component.html',
  styleUrls: ['./createbutton.component.css']
})
export class CreatebuttonComponent {
   @Input() name: string = "";
  @Input() price: any;
  @Input() rating: any;
  @Input() image: string = "";

  @Output() createProductEvent = new EventEmitter<any>();

  createProduct() {
    const product = {
      name: this.name,
      price: this.price,
      rating: this.rating,
      image: this.image
    };
    this.createProductEvent.emit(product);
  }
}
