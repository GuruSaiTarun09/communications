import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
 @Input() rate: number = 0;

  get stars() {
    return Array.from({ length: this.rate });
  }
}
