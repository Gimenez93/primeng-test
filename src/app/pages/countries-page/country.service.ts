import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Country {
  name: string;
  flag: string;
  currencyCode: string;
  population: number;
  continent: string;
  mapsUrl: string;
  active: boolean;
}

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private apiUrl = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`).pipe(
      map((countries) =>
        countries.map((country) => ({
          name: country.name.common,
          flag: country.flags.png,
          currencyCode: Object.keys(country.currencies || {})[0] || "N/A",
          population: country.population,
          continent: country.region,
          mapsUrl: country.maps.googleMaps,
          active: true,
        }))
      )
    );
  }
}
