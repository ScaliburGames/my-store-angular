import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];

  private myCart = new  BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

  onAddProduct(producto: Product):void{
    this.myShoppingCart.push(producto);
    this.myCart.next(this.myShoppingCart);
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0);
  }

  getMyShoppingCart(): Product[]{
    return this.myShoppingCart;
  }
}
