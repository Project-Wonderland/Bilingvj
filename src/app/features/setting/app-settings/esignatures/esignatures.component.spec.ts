import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsignaturesComponent } from './esignatures.component';

describe('EsignaturesComponent', () => {
  let component: EsignaturesComponent;
  let fixture: ComponentFixture<EsignaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsignaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
