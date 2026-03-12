import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBillingInvoiceComponent } from './student-billing-invoice.component';

describe('StudentBillingInvoiceComponent', () => {
  let component: StudentBillingInvoiceComponent;
  let fixture: ComponentFixture<StudentBillingInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentBillingInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentBillingInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
