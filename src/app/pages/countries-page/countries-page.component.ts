import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { Country, CountryService } from "./country.service";
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

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService
      .getCountries()
      .subscribe((data) => (this.countries = data));
  }
}
