import { Routes } from "@angular/router";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { CountriesPageComponent } from "./pages/countries-page/countries-page.component";

export const routes: Routes = [
  { path: "contact", component: ContactPageComponent },
  { path: "countries", component: CountriesPageComponent },
  { path: "", redirectTo: "/countries", pathMatch: "full" },
];
