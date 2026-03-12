import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-ecommerce-invoice',
  imports: [CommonModule,RouterLink],
  templateUrl: './ecommerce-invoice.component.html',
  styleUrls: [ './ecommerce-invoice.component.scss']
})
export class EcommerceInvoiceComponent {
routes=routes
}
