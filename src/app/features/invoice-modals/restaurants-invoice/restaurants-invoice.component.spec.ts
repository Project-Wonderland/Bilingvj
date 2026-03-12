import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsInvoiceComponent } from './restaurants-invoice.component';

describe('RestaurantsInvoiceComponent', () => {
  let component: RestaurantsInvoiceComponent;
  let fixture: ComponentFixture<RestaurantsInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantsInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantsInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
