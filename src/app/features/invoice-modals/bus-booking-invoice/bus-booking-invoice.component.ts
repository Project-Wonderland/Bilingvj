import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bus-booking-invoice',
  imports: [CommonModule,RouterLink],
  templateUrl: './bus-booking-invoice.component.html',
  styleUrls: [ './bus-booking-invoice.component.scss']
})
export class BusBookingInvoiceComponent {
routes=routes
}
