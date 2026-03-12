import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceInvoiceComponent } from './ecommerce-invoice.component';

describe('EcommerceInvoiceComponent', () => {
  let component: EcommerceInvoiceComponent;
  let fixture: ComponentFixture<EcommerceInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcommerceInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
