import { TestBed } from "@angular/core/testing";

import { HttpService } from "./http.service";
import { ContactForm } from "../pages/contact-page/contact-form.model";

describe("HttpService", () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it('should return "success" when sendContactForm is called', (done) => {
    const formData: ContactForm = {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      message: "Hello",
      terms: true,
    };

    service.sendContactForm(formData).subscribe((response) => {
      expect(response).toBe("success");
      done();
    });
  });
});
