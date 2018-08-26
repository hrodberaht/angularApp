import { Injectable } from "@angular/core";
import { Product } from "./shared/product.model";
import { PRODUCT } from "./shared/mock-products";

@Injectable({
  providedIn: "root"
})
export class ProductDataService {
  products: Product[] = PRODUCT;

  constructor() {}

  getProducts() {
    return this.products;
  }

  deleteProduct(ean: number) {
    this.products.filter(product => {
      if (product.ean === ean) {
        alert(`You resignate from buying ${product.name}`);
      }
    });
  }
}
