import { TestBed } from "@angular/core/testing";

import { ContactForm, ContactPageService } from "./contact-page.service";

describe("ContactPageService", () => {
  let service: ContactPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactPageService);
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
