import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDueReportsComponent } from './customer-due-reports.component';

describe('CustomerDueReportsComponent', () => {
  let component: CustomerDueReportsComponent;
  let fixture: ComponentFixture<CustomerDueReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerDueReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDueReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
