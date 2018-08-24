import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { PRODUCT } from "../mock-products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = PRODUCT;
  constructor() {}

  ngOnInit() {}
}
