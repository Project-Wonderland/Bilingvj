import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInvoice8Component } from './general-invoice-8.component';

describe('GeneralInvoice8Component', () => {
  let component: GeneralInvoice8Component;
  let fixture: ComponentFixture<GeneralInvoice8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInvoice8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInvoice8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
