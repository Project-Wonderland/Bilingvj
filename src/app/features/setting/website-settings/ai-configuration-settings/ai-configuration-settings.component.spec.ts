import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiConfigurationSettingsComponent } from './ai-configuration-settings.component';

describe('AiConfigurationSettingsComponent', () => {
  let component: AiConfigurationSettingsComponent;
  let fixture: ComponentFixture<AiConfigurationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiConfigurationSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiConfigurationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
