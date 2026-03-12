import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptInvoice3Component } from './receipt-invoice-3.component';

describe('ReceiptInvoice3Component', () => {
  let component: ReceiptInvoice3Component;
  let fixture: ComponentFixture<ReceiptInvoice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceiptInvoice3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptInvoice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
