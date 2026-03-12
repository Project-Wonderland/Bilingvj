import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookingInvoiceComponent } from './hotel-booking-invoice.component';

describe('HotelBookingInvoiceComponent', () => {
  let component: HotelBookingInvoiceComponent;
  let fixture: ComponentFixture<HotelBookingInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelBookingInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelBookingInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
