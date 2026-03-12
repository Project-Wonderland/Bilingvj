import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainTicketInvoiceComponent } from './train-ticket-invoice.component';

describe('TrainTicketInvoiceComponent', () => {
  let component: TrainTicketInvoiceComponent;
  let fixture: ComponentFixture<TrainTicketInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainTicketInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainTicketInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
