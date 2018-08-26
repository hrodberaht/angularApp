import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"]
})
export class TimerComponent implements OnInit, OnDestroy {
  time: Date;
  myObservable: Subscription;

  constructor() {}

  ngOnInit() {
    const observable = interval(1000);
    this.myObservable = observable.subscribe((val: any) => {
      console.log(val);
      this.time = new Date();
    });
  }

  ngOnDestroy() {
    this.myObservable.unsubscribe();
  }
}
