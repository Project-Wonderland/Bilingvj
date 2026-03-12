import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBookingInvoiceComponent } from './bus-booking-invoice.component';

describe('BusBookingInvoiceComponent', () => {
  let component: BusBookingInvoiceComponent;
  let fixture: ComponentFixture<BusBookingInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusBookingInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusBookingInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
