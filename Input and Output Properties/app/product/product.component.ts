import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any; 
  @Output() productSelected: EventEmitter<any> = new EventEmitter<any>();

  onProductSelected() {
    this.productSelected.emit(this.product);
  }
}
