import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

interface Ajustes {
  temaUrl: string;
  tema: string;
}

@Injectable({
  providedIn: "root",
})
export class SettingService {
  ajustes: Ajustes = {
    temaUrl: "assets/css/colors/default-dark.css",
    tema: "default",
  };

  constructor(@Inject(DOCUMENT) private document: any) {
    this.aplicarTema();
  }

  guardarTema() {
    localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
  }

  aplicarTema() {
    if (localStorage.getItem("ajustes")) {
      this.ajustes = JSON.parse(localStorage.getItem("ajustes"));
      console.log("cargado tema desde localStorage");
      this.aplicarAjustes(this.ajustes.tema);
    } else {
      // aplicar tema
      console.log(
        "usando valor por defecto, dado que no hay nada en local storage"
      );
      this.aplicarAjustes(this.ajustes.tema);
    }
  }

  aplicarAjustes(tema) {
    const url = `assets/css/colors/${tema}.css`;
    this.document.getElementById("tema").setAttribute("href", url);
    this.ajustes.temaUrl = url;
    this.ajustes.tema = tema;
    this.guardarTema();
  }
}
