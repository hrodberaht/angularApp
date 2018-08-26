import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../shared/product.model";
import { ProductDataService } from "../../product-data.service";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product;

  constructor(private productsService: ProductDataService) {}

  ngOnInit() {}

  buyIt() {
    alert(`You buy ${this.product.name} for ${this.product.price}`);
  }

  deleteProduct(ean) {
    this.productsService.deleteProduct(ean);
  }
}
