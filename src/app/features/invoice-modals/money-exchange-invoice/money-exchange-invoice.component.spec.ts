import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyExchangeInvoiceComponent } from './money-exchange-invoice.component';

describe('MoneyExchangeInvoiceComponent', () => {
  let component: MoneyExchangeInvoiceComponent;
  let fixture: ComponentFixture<MoneyExchangeInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoneyExchangeInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyExchangeInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
