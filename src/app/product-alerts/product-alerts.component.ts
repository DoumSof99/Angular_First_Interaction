import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() productAlert!: IProduct;
  @Output() notify = new EventEmitter();
}
