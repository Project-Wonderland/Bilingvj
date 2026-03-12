import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrdersReportsComponent } from './purchase-orders-reports.component';

describe('PurchaseOrdersReportsComponent', () => {
  let component: PurchaseOrdersReportsComponent;
  let fixture: ComponentFixture<PurchaseOrdersReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseOrdersReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseOrdersReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
