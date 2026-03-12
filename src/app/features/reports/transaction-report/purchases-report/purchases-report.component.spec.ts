import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesReportComponent } from './purchases-report.component';

describe('PurchasesReportComponent', () => {
  let component: PurchasesReportComponent;
  let fixture: ComponentFixture<PurchasesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchasesReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
