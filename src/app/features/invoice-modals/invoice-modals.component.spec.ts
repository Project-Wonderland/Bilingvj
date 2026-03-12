import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceModalsComponent } from './invoice-modals.component';

describe('InvoiceModalsComponent', () => {
  let component: InvoiceModalsComponent;
  let fixture: ComponentFixture<InvoiceModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceModalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
