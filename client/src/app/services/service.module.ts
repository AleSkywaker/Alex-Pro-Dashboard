import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SettingService, SharedService, SidebarService } from "./service.index";

@NgModule({
  declarations: [],
  providers: [SettingService, SharedService, SidebarService],
  imports: [CommonModule],
})
export class ServiceModule {}
