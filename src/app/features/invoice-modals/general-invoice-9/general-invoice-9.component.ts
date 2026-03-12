import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-general-invoice-9',
  imports: [CommonModule,RouterLink],
  templateUrl: './general-invoice-9.component.html',
  styleUrls: [ './general-invoice-9.component.scss']
})
export class GeneralInvoice9Component {
routes=routes
}
