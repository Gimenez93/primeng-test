import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { Country, CountriesPageService } from "./countries-page.service";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";

const imports = [
  ButtonModule,
  TableModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
];

@Component({
  selector: "app-countries-page",
  standalone: true,
  imports: [imports],
  templateUrl: "./countries-page.component.html",
  styleUrl: "./countries-page.component.scss",
})
export class CountriesPageComponent {
  countries: Country[] = [];
  showAddForm = false;

  constructor(private countriesPageService: CountriesPageService) {}

  ngOnInit() {
    this.countriesPageService
      .getCountries()
      .subscribe((data) => (this.countries = data));
  }
}
