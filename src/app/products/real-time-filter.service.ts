import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RealTimeFilterService {
  constructor() {}

  realFilter(data: any, name: any) {
    return data.filter(x => {
      if (name === "PC") {
        console.log(x);
      }
      return data;

      // if (x[name] === "PC") {
      //   console.log("name");
      //   return x;
      // } else {
      //   console.log("from filter");
      //   return data;
      // }
    });
  }
}
