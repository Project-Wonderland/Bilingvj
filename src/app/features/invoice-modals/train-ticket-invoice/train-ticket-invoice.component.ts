import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-train-ticket-invoice',
  imports: [CommonModule,RouterLink],
  templateUrl: './train-ticket-invoice.component.html',
  styleUrls: [ './train-ticket-invoice.component.scss']
})
export class TrainTicketInvoiceComponent {
routes=routes
}
