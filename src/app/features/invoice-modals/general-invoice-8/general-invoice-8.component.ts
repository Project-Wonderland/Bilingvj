import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-general-invoice-8',
  imports: [CommonModule,RouterLink],
  templateUrl: './general-invoice-8.component.html',
  styleUrls: [ './general-invoice-8.component.scss']
})
export class GeneralInvoice8Component {
routes=routes
}
