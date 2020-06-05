import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-promesas",
  templateUrl: "./promesas.component.html",
  styleUrls: ["./promesas.component.css"],
})
export class PromesasComponent implements OnInit {
  constructor() {
    this.contarTres()
      .then((mensaje) => {
        console.log("termino", mensaje);
      })
      .catch((error) => {
        console.log("termino con error", error);
      });
  }

  ngOnInit() {}

  contarTres(): Promise<string> {
    return new Promise((res, rej) => {
      let contador = 0;
      const interval = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          res("Ok!!!");
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}
