import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flight-booking-invoice',
  imports: [CommonModule,RouterLink],
  templateUrl: './flight-booking-invoice.component.html',
  styleUrls: [ './flight-booking-invoice.component.scss']
})
export class FlightBookingInvoiceComponent {
routes=routes
}
