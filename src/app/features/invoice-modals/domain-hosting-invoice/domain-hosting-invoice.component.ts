import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-domain-hosting-invoice',
  imports: [CommonModule],
  templateUrl: './domain-hosting-invoice.component.html',
  styleUrls: [ './domain-hosting-invoice.component.scss']
})
export class DomainHostingInvoiceComponent {
routes=routes
}
