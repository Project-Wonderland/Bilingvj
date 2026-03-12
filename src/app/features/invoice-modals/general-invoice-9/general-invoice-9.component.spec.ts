import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInvoice9Component } from './general-invoice-9.component';

describe('GeneralInvoice9Component', () => {
  let component: GeneralInvoice9Component;
  let fixture: ComponentFixture<GeneralInvoice9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInvoice9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInvoice9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
