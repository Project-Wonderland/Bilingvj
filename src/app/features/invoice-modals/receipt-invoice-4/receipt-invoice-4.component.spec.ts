import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptInvoice4Component } from './receipt-invoice-4.component';

describe('ReceiptInvoice4Component', () => {
  let component: ReceiptInvoice4Component;
  let fixture: ComponentFixture<ReceiptInvoice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceiptInvoice4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptInvoice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
