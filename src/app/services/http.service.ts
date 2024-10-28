import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { ContactForm } from "../pages/contact-page/contact-form.model";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(httpService: HttpClient) {}

  sendContactForm(formData: ContactForm) {
    console.log(`Data sent to the server ${JSON.stringify(formData)}`);
    return of("success");
  }
}
