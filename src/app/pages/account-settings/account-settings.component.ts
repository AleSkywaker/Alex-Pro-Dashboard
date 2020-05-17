import { SettingService } from "../../services/service.index";
import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styleUrls: ["./account-settings.component.css"],
})
export class AccountSettingsComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: any,
    public ajustesService: SettingService
  ) {}

  ngOnInit() {
    this.colocarCheck();
  }
  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    // this.colocarCheck();
    this.ajustesService.aplicarAjustes(tema);
  }
  aplicarCheck(link: any) {
    const selectores: any = this.document.getElementsByClassName("selector");
    for (const ref of selectores) {
      ref.classList.remove("working");
    }
    link.classList.add("working");
  }

  colocarCheck() {
    const selectores: any = this.document.getElementsByClassName("selector");
    const tema = this.ajustesService.ajustes.tema;
    for (const ref of selectores) {
      if (ref.getAttribute("data-theme") === tema) {
        ref.classList.add("working");
        break;
      }
    }
  }
}
