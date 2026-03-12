import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInvoice7Component } from './general-invoice-7.component';

describe('GeneralInvoice7Component', () => {
  let component: GeneralInvoice7Component;
  let fixture: ComponentFixture<GeneralInvoice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInvoice7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInvoice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
