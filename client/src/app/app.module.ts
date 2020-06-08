import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Custom modules
import { AppRoutingModule } from "./app-routing.module";
import { PagesModule } from "./pages/pages.module";

// Components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";
// Temporal
import { FormsModule } from "@angular/forms";
// Services
import { ServiceModule } from "./services/service.module";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    ServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}