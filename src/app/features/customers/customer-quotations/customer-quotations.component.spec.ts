import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerQuotationsComponent } from './customer-quotations.component';

describe('CustomerQuotationsComponent', () => {
  let component: CustomerQuotationsComponent;
  let fixture: ComponentFixture<CustomerQuotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerQuotationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
