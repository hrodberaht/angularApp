import { Component, OnInit, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-product-search",
  templateUrl: "./product-search.component.html",
  styleUrls: ["./product-search.component.css"]
})
export class ProductSearchComponent implements OnInit {
  @ViewChild("input")
  input;

  searchText: string;
  constructor() {}

  ngOnInit() {
    const serchedProduct = fromEvent(this.input.nativeElement, "keyup");
    const subscribe = serchedProduct.subscribe((val: any) =>
      console.log(val.target.value)
    );
  }
}
