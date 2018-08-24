import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../product.model";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  onDelete = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  buyIt() {
    alert(`You buy ${this.product.name} for ${this.product.price}`);
  }

  deleteProduct() {
    this.onDelete.emit(this.product.ean);
  }
}
