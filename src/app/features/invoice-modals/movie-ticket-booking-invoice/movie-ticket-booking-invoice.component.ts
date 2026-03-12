import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-ticket-booking-invoice',
  imports: [CommonModule],
  templateUrl: './movie-ticket-booking-invoice.component.html',
  styleUrls: [ './movie-ticket-booking-invoice.component.scss']
})
export class MovieTicketBookingInvoiceComponent {
routes=routes
}
