import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInvoice10Component } from './general-invoice-10.component';

describe('GeneralInvoice10Component', () => {
  let component: GeneralInvoice10Component;
  let fixture: ComponentFixture<GeneralInvoice10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInvoice10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInvoice10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
