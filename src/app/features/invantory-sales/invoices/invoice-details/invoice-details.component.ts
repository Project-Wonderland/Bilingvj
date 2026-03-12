import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss'],
  imports:[RouterLink],
})
export class InvoiceDetailsComponent {
routes=routes
}
