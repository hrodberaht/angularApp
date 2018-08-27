import { Component, OnInit } from "@angular/core";
import { ProductDataService } from "../product-data.service";
import { Product } from "../shared/product.model";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  product: Product;
  constructor(
    private productDataService: ProductDataService,
    private router: Router
  ) {}

  ngOnInit() {}

  addProduct(form: NgForm) {
    this.productDataService.addProduct({
      name: form.value.name,
      ean: form.value.ean,
      price: 12.3,
      imgUrl:
        "https://psmedia.playstation.com/is/image/psmedia/500mil-ds4-product-grid-01-ps4-en-15aug18_1534410394092?$ThumbnailTabs_Image$"
    });
    //this.router.navigate(["/products", "detail", form.value.ean]);
    form.reset();
  }
}
