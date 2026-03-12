import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTicketBookingInvoiceComponent } from './movie-ticket-booking-invoice.component';

describe('MovieTicketBookingInvoiceComponent', () => {
  let component: MovieTicketBookingInvoiceComponent;
  let fixture: ComponentFixture<MovieTicketBookingInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieTicketBookingInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTicketBookingInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
