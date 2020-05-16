import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgressComponent } from "./progress/progress.component";
import { PagesComponent } from "./pages.component";
import { PageRoutingModule } from "./pages-routing.module";
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";

import { ChartsModule } from "ng2-charts";
import { DonutsChartComponent } from "../components/donuts-chart/donuts-chart.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    DonutsChartComponent,
    AccountSettingsComponent,
  ],
  exports: [DashboardComponent, Graficas1Component],
  imports: [PageRoutingModule, SharedModule, FormsModule, ChartsModule],
})
export class PagesModule {}
