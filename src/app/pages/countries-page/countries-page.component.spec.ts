import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CountriesPageComponent } from "./countries-page.component";
import { Country, CountriesPageService } from "./countries-page.service";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

const mockCountries: Country[] = [
  {
    name: "Country 1",
    continent: "Continent 1",
    population: 1000,
    flag: "Flag 1",
    currencyCode: "CC1",
    mapsUrl: "Maps URL 1",
    active: true,
  },
  {
    name: "Country 2",
    continent: "Continent 2",
    population: 2000,
    flag: "Flag 2",
    currencyCode: "CC2",
    mapsUrl: "Maps URL 2",
    active: true,
  },
];

const serviceMock = {
  getCountries() {
    return of(mockCountries);
  },
};

describe("CountriesPageComponent", () => {
  let component: CountriesPageComponent;
  let fixture: ComponentFixture<CountriesPageComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesPageComponent],
      providers: [{ provide: CountriesPageService, useValue: serviceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesPageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load countries on initialization", () => {
    fixture.detectChanges();
    expect(component.countries.length).toBe(2);
    expect(component.countries).toEqual(mockCountries);
  });

  it("should toggle showAddForm when showAddForm is set", () => {
    expect(component.showAddForm).toBe(false);
    component.showAddForm = true;
    fixture.detectChanges();
    expect(component.showAddForm).toBe(true);
  });

  it("should display add button in template", () => {
    fixture.detectChanges();
    const addButton = debugElement.query(By.css(".add-country-btn"));
    expect(addButton).toBeTruthy();
  });
});
