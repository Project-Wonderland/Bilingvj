import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetBillingInvoiceComponent } from './internet-billing-invoice.component';

describe('InternetBillingInvoiceComponent', () => {
  let component: InternetBillingInvoiceComponent;
  let fixture: ComponentFixture<InternetBillingInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternetBillingInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternetBillingInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
