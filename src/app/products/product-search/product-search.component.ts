import { Component, OnInit, ViewChild } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { ProductDataService } from "../product-data.service";
import { Product } from "../shared/product.model";
import { RealTimeFilterService } from "../real-time-filter.service";
import { debounceTime, map, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-product-search",
  templateUrl: "./product-search.component.html",
  styleUrls: ["./product-search.component.css"]
})
export class ProductSearchComponent implements OnInit {
  @ViewChild("input")
  input;

  products: Product[];
  filterProducts: Product[];
  searchTerm: string;
  constructor(
    private productsService: ProductDataService,
    private realTimeFilter: RealTimeFilterService
  ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.filterProducts = this.products;
    fromEvent(this.input.nativeElement, "keyup")
      .pipe(map((x: any) => x.target.value))
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .subscribe((val: any) => {
        this.filterProducts = this.realTimeFilter.realFilter(
          this.products,
          val
        );
        console.log(val);
      });
  }
}
