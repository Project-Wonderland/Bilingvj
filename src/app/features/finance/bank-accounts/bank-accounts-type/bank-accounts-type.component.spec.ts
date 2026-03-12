import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountsTypeComponent } from './bank-accounts-type.component';

describe('BankAccountsTypeComponent', () => {
  let component: BankAccountsTypeComponent;
  let fixture: ComponentFixture<BankAccountsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankAccountsTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAccountsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
