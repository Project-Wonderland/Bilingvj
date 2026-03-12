import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessCenterInvoiceComponent } from './fitness-center-invoice.component';

describe('FitnessCenterInvoiceComponent', () => {
  let component: FitnessCenterInvoiceComponent;
  let fixture: ComponentFixture<FitnessCenterInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FitnessCenterInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessCenterInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
