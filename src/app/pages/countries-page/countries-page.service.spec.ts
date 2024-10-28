import { TestBed } from "@angular/core/testing";

import { CountryService } from "./country.service";

describe("CountriesPageService", () => {
  let service: CountriesPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesPageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
