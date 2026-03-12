import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-general-invoice-4',
  imports: [CommonModule,RouterLink],
  templateUrl: './general-invoice-4.component.html',
  styleUrls: [ './general-invoice-4.component.scss']
})
export class GeneralInvoice4Component {
routes=routes
}
