import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styleUrls: ["./incrementador.component.css"],
})
export class IncrementadorComponent implements OnInit {
  @ViewChild("elemtInputProgress", { static: false }) inputProgress: ElementRef;

  @Input() leyenda: string;
  @Input() porcentaje: number;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  cambiarValor(valor: number) {
    this.porcentaje += valor;
    if (this.porcentaje > 100 || this.porcentaje < 0) {
      this.porcentaje -= valor;
    }
    this.cambioValor.emit(this.porcentaje);
    this.inputProgress.nativeElement.focus();
  }
  onChange(newValue: number) {
    const elemHTML: any = this.inputProgress.nativeElement;
    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    elemHTML.value = Number(this.porcentaje);
    this.cambioValor.emit(this.porcentaje);
  }
}
