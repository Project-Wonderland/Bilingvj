import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInvoice6Component } from './general-invoice-6.component';

describe('GeneralInvoice6Component', () => {
  let component: GeneralInvoice6Component;
  let fixture: ComponentFixture<GeneralInvoice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInvoice6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInvoice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
