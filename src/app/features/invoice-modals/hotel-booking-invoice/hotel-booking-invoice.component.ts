import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotel-booking-invoice',
  imports: [CommonModule,RouterLink],
  templateUrl: './hotel-booking-invoice.component.html',
  styleUrls: [ './hotel-booking-invoice.component.scss']
})
export class HotelBookingInvoiceComponent {
routes=routes
}
