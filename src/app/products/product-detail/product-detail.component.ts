import { Component, OnInit } from "@angular/core";
import { ProductDataService } from "../product-data.service";
import { Product } from "../shared/product.model";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  ean: number;
  constructor(
    private productDataService: ProductDataService,
    private route: ActivatedRoute //private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.ean = +params.ean;
    });
    this.product = this.productDataService.getProducts().find((prod: any) => {
      if (prod.ean === this.ean) return prod;
    });
  }

  buyIt() {
    alert(`You buy ${this.product.name} for ${this.product.price}`);
  }
}
