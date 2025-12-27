import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-createbutton',
  templateUrl: './createbutton.component.html',
  styleUrls: ['./createbutton.component.css']
})
export class CreatebuttonComponent {
 @Input() product: any; 
  @Input() index: number | undefined; 

  constructor(public prodService:ProductService){}

  create() {
    if(this.product){
      this.prodService.addProduct(this.product); 
      alert("Product Created Successfully!");
    }
  }
}
