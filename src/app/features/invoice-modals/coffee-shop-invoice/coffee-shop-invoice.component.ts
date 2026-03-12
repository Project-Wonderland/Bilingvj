import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coffee-shop-invoice',
  imports: [CommonModule,RouterLink],
  templateUrl: './coffee-shop-invoice.component.html',
  styleUrls: [ './coffee-shop-invoice.component.scss']
})
export class CoffeeShopInvoiceComponent {
routes=routes
}
