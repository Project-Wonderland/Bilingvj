import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListsComponent } from './ticket-lists.component';

describe('TicketListsComponent', () => {
  let component: TicketListsComponent;
  let fixture: ComponentFixture<TicketListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
