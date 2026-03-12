import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-invoice-templates',
  templateUrl: './invoice-templates.component.html',
  styleUrls: ['./invoice-templates.component.scss'],
  imports:[RouterLink],
})
export class InvoiceTemplatesComponent {
routes=routes;
}
