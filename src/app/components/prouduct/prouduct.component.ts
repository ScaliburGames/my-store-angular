import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './prouduct.component.html',
  styleUrls: ['./prouduct.component.scss']
})
export class ProuductComponent {

@Input() product?:Product;
@Output() addedProduct = new EventEmitter<Product>();

  onAddToCart():void{
    this.addedProduct.emit(this.product);
  }

}
