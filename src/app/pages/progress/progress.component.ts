import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.css"],
})
export class ProgressComponent implements OnInit {
  porcentaje1: number;
  porcentaje2: number;
  constructor() {
    this.porcentaje1 = 90;
    this.porcentaje2 = 60;
  }

  ngOnInit() {}
}
