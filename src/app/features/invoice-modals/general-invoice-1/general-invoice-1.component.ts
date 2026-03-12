import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-general-invoice-1',
  imports: [CommonModule,RouterLink],
  templateUrl: './general-invoice-1.component.html',
  styleUrls: [ './general-invoice-1.component.scss']
})
export class GeneralInvoice1Component {
routes=routes
}
