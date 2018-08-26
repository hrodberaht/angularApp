import { Component, OnInit, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";
import { ProductsService } from "../product-data.service";
import { Product } from "../shared/product.model";

@Component({
  selector: "app-product-search",
  templateUrl: "./product-search.component.html",
  styleUrls: ["./product-search.component.css"]
})
export class ProductSearchComponent implements OnInit {
  @ViewChild("input")
  input;

  products: Product[];
  searchText: string;
  constructor(productsService: ProductsService) {
    this.products = productsService.getProducts();
  }

  ngOnInit() {
    const serchedProduct = fromEvent(this.input.nativeElement, "keyup");
    const subscribe = serchedProduct.subscribe((val: any) =>
      console.log(val.target.value)
    );
  }
}
