import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-general-invoice-3',
  imports: [CommonModule,RouterLink],
  templateUrl: './general-invoice-3.component.html',
  styleUrls: [ './general-invoice-3.component.scss']
})
export class GeneralInvoice3Component {
routes=routes
}
