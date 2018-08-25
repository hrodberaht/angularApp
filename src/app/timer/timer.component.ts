import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"]
})
export class TimerComponent implements OnInit {
  time: Date;
  constructor() {}

  ngOnInit() {
    const timer = interval(1000);
    const subscribe = timer.subscribe(val => (this.time = new Date()));
  }
}
