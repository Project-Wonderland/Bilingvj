import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurchasesOrdersComponent } from './add-purchases-orders.component';

describe('AddPurchasesOrdersComponent', () => {
  let component: AddPurchasesOrdersComponent;
  let fixture: ComponentFixture<AddPurchasesOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPurchasesOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPurchasesOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
