import { Injectable } from "@angular/core";
import { of } from "rxjs";

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  terms: boolean;
}

@Injectable({
  providedIn: "root",
})
export class ContactPageService {
  constructor() {}

  sendContactForm(formData: ContactForm) {
    console.log(`Data sent to the server ${JSON.stringify(formData)}`);
    return of("success");
  }
}
