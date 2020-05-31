import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare function init_plugins(): any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    init_plugins();
  }
  ingresar() {
    console.log("ingresando");
    this.router.navigate(["/dashboard"]);
  }
}
