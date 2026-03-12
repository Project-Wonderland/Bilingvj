import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-money-exchange-invoice',
  imports: [CommonModule],
  templateUrl: './money-exchange-invoice.component.html',
  styleUrls: [ './money-exchange-invoice.component.scss']
})
export class MoneyExchangeInvoiceComponent {
routes=routes
}
