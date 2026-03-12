import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDebitNotesComponent } from './add-debit-notes.component';

describe('AddDebitNotesComponent', () => {
  let component: AddDebitNotesComponent;
  let fixture: ComponentFixture<AddDebitNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDebitNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDebitNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
