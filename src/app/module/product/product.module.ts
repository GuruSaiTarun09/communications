import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule {
   name: string | undefined;
  price: number | undefined;
  rating: number | undefined;
  image: string | undefined;
 }
