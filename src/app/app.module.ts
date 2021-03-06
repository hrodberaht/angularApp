import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { HeaderComponent } from "./header/header.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductItemComponent } from "./products/product-list/product-item/product-item.component";
import { HomeComponent } from "./home/home.component";
import { TimerComponent } from "./timer/timer.component";
import { ProductSearchComponent } from "./products/product-search/product-search.component";
import { AddProductComponent } from "./products/add-product/add-product.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/detail/:ean", component: ProductDetailComponent },
  { path: "products/add", component: AddProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductItemComponent,
    HomeComponent,
    TimerComponent,
    ProductSearchComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
