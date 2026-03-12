import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainHostingInvoiceComponent } from './domain-hosting-invoice.component';

describe('DomainHostingInvoiceComponent', () => {
  let component: DomainHostingInvoiceComponent;
  let fixture: ComponentFixture<DomainHostingInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DomainHostingInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainHostingInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
