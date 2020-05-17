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
  public pieChartColors = [
    {
      backgroundColor: [
        "rgba(13, 0, 255, 1)",
        "rgba(55, 255, 0, 1)",
        "rgba(255, 229, 0, 1)",
      ],
      borderColor: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)"],
      borderWidth: 1,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
