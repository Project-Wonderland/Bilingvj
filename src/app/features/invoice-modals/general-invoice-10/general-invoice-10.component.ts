import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-general-invoice-10',
  imports: [CommonModule,RouterLink],
  templateUrl: './general-invoice-10.component.html',
  styleUrls: [ './general-invoice-10.component.scss']
})
export class GeneralInvoice10Component {
routes=routes
}
