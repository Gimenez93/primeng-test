import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { HttpService } from "../../services/http.service";

const imports = [ReactiveFormsModule, FormsModule];
const providers = [HttpService];

@Component({
  selector: "contact-page",
  standalone: true,
  imports: [imports],
  providers: [providers],
  templateUrl: "./contact-page.component.html",
  styleUrl: "./contact-page.component.scss",
})
export class ContactPageComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpService) {
    this.contactForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required],
      terms: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      return;
    }

    this.httpService.sendContactForm(this.contactForm.value).subscribe({
      next: () => {
        alert("Form sent successfully");
        this.contactForm.reset();
      },
      error: (error) => {
        console.error("Error sending form", error);
      },
    });
  }
}
