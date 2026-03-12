import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPurchasesOrdersComponent } from './edit-purchases-orders.component';

describe('EditPurchasesOrdersComponent', () => {
  let component: EditPurchasesOrdersComponent;
  let fixture: ComponentFixture<EditPurchasesOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPurchasesOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPurchasesOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
