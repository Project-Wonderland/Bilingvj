import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-billing-invoice',
  imports: [CommonModule,RouterLink],
  templateUrl: './student-billing-invoice.component.html',
  styleUrls: [ './student-billing-invoice.component.scss']
})
export class StudentBillingInvoiceComponent {
routes=routes
}
