import { Component, OnInit, Input } from "@angular/core";
import { ChartType } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-donuts-chart",
  templateUrl: "./donuts-chart.component.html",
  styleUrls: ["./donuts-chart.component.css"],
})
export class DonutsChartComponent implements OnInit {
  @Input() data: [];
  @Input() label: Label[];
  @Input() type: ChartType;
  @Input() titulo: string;

  constructor() {}

  ngOnInit() {}
}
