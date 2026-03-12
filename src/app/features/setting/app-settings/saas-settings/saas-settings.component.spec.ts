import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasSettingsComponent } from './saas-settings.component';

describe('SaasSettingsComponent', () => {
  let component: SaasSettingsComponent;
  let fixture: ComponentFixture<SaasSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaasSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
