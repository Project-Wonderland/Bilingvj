import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptInvoice2Component } from './receipt-invoice-2.component';

describe('ReceiptInvoice2Component', () => {
  let component: ReceiptInvoice2Component;
  let fixture: ComponentFixture<ReceiptInvoice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceiptInvoice2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptInvoice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
