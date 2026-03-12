import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuotationsComponent } from './add-quotations.component';

describe('AddQuotationsComponent', () => {
  let component: AddQuotationsComponent;
  let fixture: ComponentFixture<AddQuotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddQuotationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
