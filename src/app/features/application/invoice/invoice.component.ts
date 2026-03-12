import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  imports:[CommonModule,RouterLink]
})
export class InvoiceComponent {
routes=routes
}
