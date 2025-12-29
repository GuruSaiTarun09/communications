import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {

 @Input() productList: any[] = [];
  @Output() viewProduct = new EventEmitter<any>();
  @Output() deleteProduct = new EventEmitter<number>();
product: any;

}
