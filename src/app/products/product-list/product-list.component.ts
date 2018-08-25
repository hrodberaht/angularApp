import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  constructor(productServices: ProductsService) {
    this.products = productServices.getProducts();
  }

  ngOnInit() {}

  deleteProduct(ean) {
    this.products.filter(product => {
      if (product.ean === ean) {
        alert(`You resignate from buying ${product.name}`);
      }
    });
  }
}
