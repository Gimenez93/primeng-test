import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactPageComponent } from "./contact-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpService } from "../../services/http.service";

const imports = [ReactiveFormsModule, FormsModule];
const providers = [HttpService];

describe("ContactPageComponent", () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPageComponent, ...imports],
      providers: [providers],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
