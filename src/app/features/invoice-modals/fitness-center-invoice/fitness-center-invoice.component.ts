import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fitness-center-invoice',
  imports: [CommonModule,RouterLink],
  templateUrl: './fitness-center-invoice.component.html',
  styleUrls: [ './fitness-center-invoice.component.scss']
})
export class FitnessCenterInvoiceComponent {
routes=routes
}
