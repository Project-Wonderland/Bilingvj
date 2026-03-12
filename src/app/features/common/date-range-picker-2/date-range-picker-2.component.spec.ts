import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangePicker2Component } from './date-range-picker-2.component';

describe('DateRangePicker2Component', () => {
  let component: DateRangePicker2Component;
  let fixture: ComponentFixture<DateRangePicker2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateRangePicker2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateRangePicker2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
