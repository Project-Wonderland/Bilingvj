import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceMedicalComponent } from './invoice-medical.component';

describe('InvoiceMedicalComponent', () => {
  let component: InvoiceMedicalComponent;
  let fixture: ComponentFixture<InvoiceMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceMedicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
