import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeShopInvoiceComponent } from './coffee-shop-invoice.component';

describe('CoffeeShopInvoiceComponent', () => {
  let component: CoffeeShopInvoiceComponent;
  let fixture: ComponentFixture<CoffeeShopInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeShopInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeShopInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
