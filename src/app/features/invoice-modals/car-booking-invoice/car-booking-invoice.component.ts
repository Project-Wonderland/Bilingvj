import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-booking-invoice',
  imports: [CommonModule,RouterLink],
  templateUrl: './car-booking-invoice.component.html',
  styleUrls: [ './car-booking-invoice.component.scss']
})
export class CarBookingInvoiceComponent {
routes=routes
}
