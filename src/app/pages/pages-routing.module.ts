import { RxjsComponent } from "./rxjs/rxjs.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { NopagefoundComponent } from "src/app/shared/nopagefound/nopagefound.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";

const pageRoute: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "progress", component: ProgressComponent },
      { path: "graficas", component: Graficas1Component },
      { path: "promesas", component: PromesasComponent },
      { path: "rxjs", component: RxjsComponent },
      { path: "account-settings", component: AccountSettingsComponent },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    ],
  },
  { path: "**", component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(pageRoute)],
  exports: [RouterModule],
})
export class PageRoutingModule {}

// export const PAGES_ROUTES = RouterModule.forChild(pageRoute);
