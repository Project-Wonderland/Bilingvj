import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-internet-billing-invoice',
  imports: [CommonModule],
  templateUrl: './internet-billing-invoice.component.html',
  styleUrls: [ './internet-billing-invoice.component.scss']
})
export class InternetBillingInvoiceComponent {
routes=routes
}
