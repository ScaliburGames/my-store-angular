import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllProducts(): Observable<HttpResponse<Product[]>>{
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products', {observe: 'response'});
  }

}
