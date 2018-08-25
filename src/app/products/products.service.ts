import { Injectable } from '@angular/core';
import { Product } from "./product.model";
import {PRODUCT} from "./mock-products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = PRODUCT;

  constructor() { }

  getProducts () {
    return this.products;
  }
}
