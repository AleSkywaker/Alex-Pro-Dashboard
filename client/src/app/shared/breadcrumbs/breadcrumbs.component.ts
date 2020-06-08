import { Component, OnInit } from "@angular/core";
import { Router, ActivationEnd } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Title, Meta, MetaDefinition } from "@angular/platform-browser";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.css"],
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;
  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
    this.getDataRoute().subscribe((evento) => {
      this.titulo = evento;
      this.title.setTitle(evento);

      const metaTag: MetaDefinition = {
        name: "description",
        content: this.titulo,
      };
      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {}

  getDataRoute(): Observable<string> {
    return this.router.events.pipe(
      filter((evento) => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data.titulo)
    );
  }
}
