import { Component, OnInit } from "@angular/core";
declare function init_plugins(): any;
@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.css"],
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    init_plugins();
  }
}