import { TestBed } from "@angular/core/testing";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { CountryService, Country } from "./country.service";
import { of } from "rxjs";
import { provideHttpClient } from "@angular/common/http";

const expectedCountries: Country[] = [
  {
    name: "Country 1",
    flag: "https://example.com/flag1.png",
    currencyCode: "USD",
    population: 1000000,
    continent: "Americas",
    mapsUrl: "https://maps.google.com/?q=country1",
    active: true,
  },
  {
    name: "Country 2",
    flag: "https://example.com/flag2.png",
    currencyCode: "N/A",
    population: 500000,
    continent: "Europe",
    mapsUrl: "https://maps.google.com/?q=country2",
    active: true,
  },
];

describe("CountriesPageService", () => {
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CountryService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(CountryService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should fetch and transform countries data", () => {
    const spy = jest
      .spyOn(service, "getCountries")
      .mockReturnValue(of(expectedCountries));

    service.getCountries().subscribe((countries) => {
      expect(countries).toEqual(expectedCountries);
    });

    expect(spy).toHaveBeenCalled();
  });
});
