import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-receipt-invoice-4',
  imports: [CommonModule,RouterLink],
  templateUrl: './receipt-invoice-4.component.html',
  styleUrls: [ './receipt-invoice-4.component.scss']
})
export class ReceiptInvoice4Component {
routes=routes
}
