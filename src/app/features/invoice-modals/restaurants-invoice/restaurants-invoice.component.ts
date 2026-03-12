import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurants-invoice',
  imports: [CommonModule,RouterLink],
  templateUrl: './restaurants-invoice.component.html',
  styleUrls: [ './restaurants-invoice.component.scss']
})
export class RestaurantsInvoiceComponent {
routes=routes
}
