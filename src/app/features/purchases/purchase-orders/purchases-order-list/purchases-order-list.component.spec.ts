import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesOrderListComponent } from './purchases-order-list.component';

describe('PurchasesOrderListComponent', () => {
  let component: PurchasesOrderListComponent;
  let fixture: ComponentFixture<PurchasesOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchasesOrderListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasesOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
