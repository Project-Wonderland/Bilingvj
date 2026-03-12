import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeSettingsComponent } from './barcode-settings.component';

describe('BarcodeSettingsComponent', () => {
  let component: BarcodeSettingsComponent;
  let fixture: ComponentFixture<BarcodeSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarcodeSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcodeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
