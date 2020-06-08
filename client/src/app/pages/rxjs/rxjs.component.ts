import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscriber, Subscription } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styleUrls: ["./rxjs.component.css"],
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() {
    this.subscription = this.regresaObs().subscribe(
      (numero) => console.log(numero),
      (error: any) => console.log(error),
      () => {
        return console.log("el observador termino");
      }
    );
  }

  regresaObs(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      const interval = setInterval(() => {
        contador++;

        const salida = {
          valor: contador,
        };
        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(interval);
        //   // console.log("Hola Alex wapo 😍😍😍");
        //   observer.complete();
        // }
        // if (contador === 2) {
        //   // clearInterval(interval);
        //   observer.error("Auxilio!!");
        // }
      }, 1000);
    }).pipe(
      map((resp) => {
        return resp.valor;
      }),
      filter((valor, index) => {
        if (valor % 2 === 0) {
          // numero par
          return true;
        }
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log("abandonando la pagina");
  }
}
