import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-receipt-invoice-3',
  imports: [CommonModule,RouterLink],
  templateUrl: './receipt-invoice-3.component.html',
  styleUrls: [ './receipt-invoice-3.component.scss']
})
export class ReceiptInvoice3Component {
routes=routes
}
