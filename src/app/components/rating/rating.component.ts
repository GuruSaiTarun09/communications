import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  template: `<span *ngFor="let r of stars" style="color:gold;">★</span>`,
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rate!: number;
  stars:Array<number> = [];
price: any;

  ngOnChanges(){
    this.stars = Array(this.rate).fill(0);
  }
}
