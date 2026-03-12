import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptInvoice1Component } from './receipt-invoice-1.component';

describe('ReceiptInvoice1Component', () => {
  let component: ReceiptInvoice1Component;
  let fixture: ComponentFixture<ReceiptInvoice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceiptInvoice1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptInvoice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
