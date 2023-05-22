import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  
  total = 0;
  myShoppingCar: Product[] = [];
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 1, 21);

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
    ){
      this.myShoppingCar = this.storeService.getMyShoppingCart();
    }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(res => {
      this.products = res.body ?? [];
    });
  }


  onAddToShoppingCar(product: Product):void{
    this.storeService.onAddProduct(product)
    this.total = this.storeService.getTotal();
  }

  
}
