import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.css"],
})
export class ProgressComponent implements OnInit {
  porcentaje: number;

  constructor() {
    this.porcentaje = 50;
  }

  ngOnInit() {}
}
