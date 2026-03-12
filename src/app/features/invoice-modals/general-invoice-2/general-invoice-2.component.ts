import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-general-invoice-2',
  imports: [CommonModule,RouterLink],
  templateUrl: './general-invoice-2.component.html',
  styleUrls: [ './general-invoice-2.component.scss']
})
export class GeneralInvoice2Component {
routes=routes
}
