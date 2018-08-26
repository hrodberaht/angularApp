import { Component, OnInit } from "@angular/core";
import { ProductDataService } from "../product-data.service";
import { Product } from "../shared/product.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productDataService: ProductDataService,
    private route: ActivatedRoute //private location: Location
  ) {}

  ngOnInit() {
    const ean = +this.route.snapshot.paramMap.get("ean");
    console.log(ean);
    this.product = this.productDataService.getProducts().find((prod: any) => {
      if (prod.ean === ean) return prod;
    });
  }

  buyIt() {
    alert(`You buy ${this.product.name} for ${this.product.price}`);
  }
}
