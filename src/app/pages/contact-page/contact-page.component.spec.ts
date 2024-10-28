import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactPageComponent } from "./contact-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContactPageService } from "./contact-page.service";

describe("ContactPageComponent", () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPageComponent, ReactiveFormsModule, FormsModule],
      providers: [ContactPageService],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
