import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
})
export class ViewproductComponent {
  @Input() product:any;
}
